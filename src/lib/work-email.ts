/**
 * Work-email check for the forms that ask for one.
 *
 * The gate and the contact form both label the field "Work email" and then
 * accepted anything. A personal address is a lead you cannot qualify: no
 * company, no sector, no way to tell a bank from a student.
 *
 * This is a filter, not a wall. The lists below can never be complete, and a
 * determined visitor can register a domain in a minute. It removes the casual
 * throwaway, which is most of what gets typed into a gate.
 */
import { trackEmailRejected } from "@/lib/analytics";

/** Consumer mailbox providers. Common enough to be worth naming individually. */
const FREE_PROVIDERS = new Set([
  "gmail.com",
  "googlemail.com",
  "hotmail.com",
  "hotmail.co.uk",
  "hotmail.fr",
  "hotmail.it",
  "hotmail.es",
  "outlook.com",
  "outlook.es",
  "outlook.fr",
  "live.com",
  "live.co.uk",
  "live.nl",
  "msn.com",
  "yahoo.com",
  "yahoo.co.uk",
  "yahoo.es",
  "yahoo.fr",
  "yahoo.it",
  "ymail.com",
  "aol.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "proton.me",
  "protonmail.com",
  "pm.me",
  "gmx.com",
  "gmx.de",
  "gmx.net",
  "web.de",
  "mail.com",
  "mail.ru",
  "yandex.com",
  "yandex.ru",
  "zoho.com",
  "qq.com",
  "163.com",
  "126.com",
  "139.com",
  "naver.com",
  "hanmail.net",
  "libero.it",
  "virgilio.it",
  "orange.fr",
  "wanadoo.fr",
  "free.fr",
  "laposte.net",
  "t-online.de",
  "seznam.cz",
  "wp.pl",
  "o2.pl",
  "interia.pl",
  "abv.bg",
  "bol.com.br",
  "uol.com.br",
  "terra.com.br",
]);

/** Disposable inbox services. A sample of the common ones, never exhaustive. */
const DISPOSABLE = new Set([
  "mailinator.com",
  "guerrillamail.com",
  "guerrillamail.net",
  "sharklasers.com",
  "10minutemail.com",
  "10minutemail.net",
  "tempmail.com",
  "temp-mail.org",
  "tempmailo.com",
  "yopmail.com",
  "yopmail.fr",
  "throwawaymail.com",
  "trashmail.com",
  "trashmail.de",
  "dispostable.com",
  "getnada.com",
  "nada.email",
  "maildrop.cc",
  "fakeinbox.com",
  "mintemail.com",
  "mailnesia.com",
  "spamgourmet.com",
  "moakt.com",
  "emailondeck.com",
  "discard.email",
  "mohmal.com",
  "tempr.email",
  "byom.de",
  "einrot.com",
  "grr.la",
  "spam4.me",
  "mailcatch.com",
  "inboxkitten.com",
  "burnermail.io",
  "anonaddy.com",
  "simplelogin.io",
  "duck.com",
]);

/**
 * Patterns that catch the throwaway services that spin up new domains faster
 * than any list can track them.
 */
const DISPOSABLE_PATTERNS = [
  /(^|\.)temp-?mail\./,
  /(^|\.)tempmail/,
  /(^|\.)throwaway/,
  /(^|\.)trashmail/,
  /(^|\.)fakemail/,
  /(^|\.)disposable/,
  /(^|\.)mailinator\./,
  /(^|\.)yopmail\./,
  /(^|\.)guerrillamail\./,
  /^\d+minutemail\./,
];

export type EmailCheck = { ok: true } | { ok: false; message: string };

const SHAPE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * `source` names the form for analytics. The reporting lives in here rather
 * than in each caller because a rejection left no trace at all until now, and
 * three forms call this: a fourth would be added without it and nobody would
 * notice, which is the same silence this is meant to end.
 *
 * `messages` comes from the caller because this file has no locale: the chatbot
 * knows which language it is rendering in, and a rejection a reader cannot read
 * is a lead lost at the last step. The other two callers are not translated yet
 * and pass nothing, which keeps them exactly as they were.
 */
export function checkWorkEmail(
  value: string,
  source: string,
  messages: { emailInvalid: string; emailWork: string } = {
    emailInvalid: "Please enter a valid email address.",
    emailWork: "Please use your work email address.",
  },
): EmailCheck {
  const email = value.trim().toLowerCase();

  if (!SHAPE.test(email)) {
    return { ok: false, message: messages.emailInvalid };
  }

  const domain = email.slice(email.lastIndexOf("@") + 1);

  const reject = (): EmailCheck => {
    trackEmailRejected(source, domain);
    // Same message for consumer and throwaway addresses: naming the reason
    // only explains how to get around it.
    return { ok: false, message: messages.emailWork };
  };

  if (FREE_PROVIDERS.has(domain)) return reject();

  if (DISPOSABLE.has(domain) || DISPOSABLE_PATTERNS.some((p) => p.test(domain))) {
    return reject();
  }

  return { ok: true };
}
