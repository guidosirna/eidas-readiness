/**
 * Generates public/__forms.html from src/lib/netlify-forms.schema.json.
 *
 * Netlify detects forms by parsing static HTML at deploy time and silently DROPS
 * any submitted field that is not declared there. Our forms are client-rendered,
 * so that parser never sees them — the generated file is the only declaration.
 *
 * Runs from `prebuild`, so the deployed file can never drift from the schema.
 * Do not edit public/__forms.html by hand; edit the schema.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const schemaPath = join(root, "src/lib/netlify-forms.schema.json");
const outPath = join(root, "public/__forms.html");

const schema = JSON.parse(readFileSync(schemaPath, "utf8"));

const forms = Object.entries(schema)
  .map(([name, fields]) => {
    const inputs = [
      `      <input type="hidden" name="form-name" value="${name}" />`,
      ...fields.map((f) => `      <input name="${f}" />`),
    ].join("\n");
    return `    <form name="${name}" data-netlify="true" hidden>\n${inputs}\n    </form>`;
  })
  .join("\n\n");

writeFileSync(
  outPath,
  `<!--
  GENERATED FILE — do not edit.
  Source: src/lib/netlify-forms.schema.json
  Regenerate: node scripts/generate-netlify-forms.mjs (runs automatically on build)

  Netlify parses this file at deploy time to register forms and their fields.
  Any field submitted but not declared here is silently discarded.
-->
<html>
  <head><title>Forms</title></head>
  <body>
${forms}
  </body>
</html>
`
);

const total = Object.values(schema).reduce((n, f) => n + f.length, 0);
console.log(
  `Generated public/__forms.html: ${Object.keys(schema).length} forms, ${total} fields.`
);
