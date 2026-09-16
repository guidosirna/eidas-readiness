import type { Locale } from "./config";

/**
 * The chrome around the content: breadcrumb labels, section headings the data
 * does not carry, and the calls to action.
 *
 * Kept apart from the page content because these repeat across pages, and a
 * label translated three different ways on three pages is how a site starts
 * reading as a machine translation even when each sentence is right.
 */
export interface UiStrings {
  breadcrumb: {
    industries: string;
    glossary: string;
    guide: string;
    faq: string;
  };
  industry: {
    keyRequirements: string;
    useCases: string;
    timelineLink: string;
    relatedIndustries: string;
    relatedRoles: string;
    ctaHeadline: string;
    ctaDescription: string;
    ctaButton: string;
  };
  language: string;
}

const en: UiStrings = {
  breadcrumb: {
    industries: "Industries",
    glossary: "Glossary",
    guide: "Guides",
    faq: "Frequently Asked Questions",
  },
  industry: {
    keyRequirements: "Key Requirements",
    useCases: "Use Cases",
    timelineLink: "View the full eIDAS 2.0 compliance timeline",
    relatedIndustries: "Related industries",
    relatedRoles: "Related roles",
    ctaHeadline: "Assess Your Industry Readiness",
    ctaDescription:
      "Take our free eIDAS 2.0 readiness assessment to understand how the regulation impacts your sector.",
    ctaButton: "Get your readiness score",
  },
  language: "Language",
};

const de: UiStrings = {
  breadcrumb: {
    industries: "Branchen",
    glossary: "Glossar",
    guide: "Leitfäden",
    faq: "Häufige Fragen",
  },
  industry: {
    keyRequirements: "Zentrale Anforderungen",
    useCases: "Anwendungsfälle",
    timelineLink: "Den vollständigen eIDAS-2.0-Zeitplan ansehen",
    relatedIndustries: "Verwandte Branchen",
    relatedRoles: "Verwandte Rollen",
    ctaHeadline: "Prüfen Sie die Bereitschaft Ihrer Branche",
    ctaDescription:
      "Mit der kostenlosen eIDAS-2.0-Bereitschaftsanalyse sehen Sie, wie die Verordnung Ihren Sektor betrifft.",
    ctaButton: "Bereitschaftswert abrufen",
  },
  language: "Sprache",
};

const it: UiStrings = {
  breadcrumb: {
    industries: "Settori",
    glossary: "Glossario",
    guide: "Guide",
    faq: "Domande frequenti",
  },
  industry: {
    keyRequirements: "Requisiti principali",
    useCases: "Casi d'uso",
    timelineLink: "Vedi il calendario completo di eIDAS 2.0",
    relatedIndustries: "Settori correlati",
    relatedRoles: "Ruoli correlati",
    ctaHeadline: "Valuta la preparazione del tuo settore",
    ctaDescription:
      "Con l'analisi gratuita di preparazione a eIDAS 2.0 scopri come il regolamento incide sul tuo settore.",
    ctaButton: "Ottieni il tuo punteggio",
  },
  language: "Lingua",
};

const es: UiStrings = {
  breadcrumb: {
    industries: "Sectores",
    glossary: "Glosario",
    guide: "Guías",
    faq: "Preguntas frecuentes",
  },
  industry: {
    keyRequirements: "Requisitos principales",
    useCases: "Casos de uso",
    timelineLink: "Ver el calendario completo de eIDAS 2.0",
    relatedIndustries: "Sectores relacionados",
    relatedRoles: "Perfiles relacionados",
    ctaHeadline: "Evalúa la preparación de tu sector",
    ctaDescription:
      "Con la evaluación gratuita de preparación para eIDAS 2.0 verás cómo afecta el reglamento a tu sector.",
    ctaButton: "Obtén tu puntuación",
  },
  language: "Idioma",
};

export const UI: Record<Locale, UiStrings> = { en, de, it, es };
