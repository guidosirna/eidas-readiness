/**
 * Shared helper for submitting to Netlify Forms from client components.
 *
 * Netlify registers forms by parsing static HTML at deploy time and silently
 * DROPS any submitted field that is not declared there. Our forms are all
 * client-rendered, so `public/__forms.html` is their only declaration, and it
 * is generated from `netlify-forms.schema.json` on every build.
 *
 * To add a field: add it to the schema. Nothing else declares fields.
 */
import schema from "./netlify-forms.schema.json";
import { getAttribution } from "./attribution";

/** "_common" holds the attribution fields every form carries; it is not a form. */
export type NetlifyFormName = Exclude<keyof typeof schema, "_common">;

const { _common: commonFields, ...formSchemas } = schema;
const declaredFields: Record<string, readonly string[]> = Object.fromEntries(
  Object.entries(formSchemas).map(([name, fields]) => [
    name,
    [...fields, ...commonFields],
  ])
);

function encodeFormData(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

/**
 * Warns about fields Netlify will discard. Cannot be fixed at runtime, the
 * point is to make the loss loud during development instead of invisible in
 * production, which is how four fields of the content gate went missing.
 */
function warnUndeclaredFields(
  formName: NetlifyFormName,
  data: Record<string, string>
) {
  const undeclared = Object.keys(data).filter(
    (key) => !declaredFields[formName].includes(key)
  );
  if (undeclared.length === 0) return;

  const message =
    `Netlify Forms will DISCARD these "${formName}" fields because they are not ` +
    `declared in src/lib/netlify-forms.schema.json: ${undeclared.join(", ")}`;

  if (process.env.NODE_ENV !== "production") throw new Error(message);
  console.error(message);
}

export async function submitNetlifyForm(
  formName: NetlifyFormName,
  data: Record<string, string>
): Promise<void> {
  // Attribution rides along on every submission, so no caller can forget it.
  const payload = { ...data, ...getAttribution() };
  warnUndeclaredFields(formName, payload);

  const res = await fetch("/__forms.html", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encodeFormData({ "form-name": formName, ...payload }),
  });

  if (res.ok) return;

  // There is no Netlify form handler in `next dev`, the static file answers 405 , 
  // so locally we log the payload and let the flow continue. Anything else, and
  // anything at all in production, is a real failure the caller must see.
  if (process.env.NODE_ENV !== "production" && (res.status === 405 || res.status === 404)) {
    console.info(
      `[dev] Netlify Forms is not available locally (${res.status}). ` +
        `Would have submitted "${formName}":`,
      data
    );
    return;
  }

  throw new Error(
    `Netlify Forms rejected "${formName}" with ${res.status}. ` +
      `Check that the form and all its fields are declared in ` +
      `src/lib/netlify-forms.schema.json.`
  );
}

/** Current page path, safe to call during SSR. */
export function currentPagePath(): string {
  return typeof window !== "undefined" ? window.location.pathname : "";
}
