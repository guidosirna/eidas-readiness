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
  glossary: {
    relatedTerms: string;
    back: string;
    ctaHeadline: string;
    ctaDescription: string;
    ctaButton: string;
    /**
     * The five category labels, keyed by the English value in the data.
     * Shown translated; the link still carries the English key, because
     * /glossary filters on the English value.
     */
    categories: Record<string, string>;
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
  glossary: {
    relatedTerms: "Related Terms",
    back: "Back to glossary",
    ctaHeadline: "See How eIDAS 2.0 Affects Your Organisation",
    ctaDescription:
      "Take our free readiness assessment to understand your compliance gaps and get actionable recommendations.",
    ctaButton: "Get your readiness score",
    categories: {
      "Core Regulation": "Core Regulation",
      "Digital Identity": "Digital Identity",
      "Trust Services": "Trust Services",
      "Technical Standards": "Technical Standards",
      Governance: "Governance",
    },
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
  glossary: {
    relatedTerms: "Verwandte Begriffe",
    back: "Zurück zum Glossar",
    ctaHeadline: "Sehen Sie, wie eIDAS 2.0 Ihre Organisation betrifft",
    ctaDescription:
      "Mit der kostenlosen Bereitschaftsanalyse erkennen Sie Ihre Compliance-Lücken und erhalten konkrete Empfehlungen.",
    ctaButton: "Bereitschaftswert abrufen",
    categories: {
      "Core Regulation": "Kernverordnung",
      "Digital Identity": "Digitale Identität",
      "Trust Services": "Vertrauensdienste",
      "Technical Standards": "Technische Standards",
      Governance: "Governance",
    },
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
  glossary: {
    relatedTerms: "Termini correlati",
    back: "Torna al glossario",
    ctaHeadline: "Scopri come eIDAS 2.0 incide sulla tua organizzazione",
    ctaDescription:
      "Con l'analisi gratuita di preparazione individui le tue lacune di conformità e ricevi raccomandazioni concrete.",
    ctaButton: "Ottieni il tuo punteggio",
    categories: {
      "Core Regulation": "Regolamento",
      "Digital Identity": "Identità digitale",
      "Trust Services": "Servizi fiduciari",
      "Technical Standards": "Standard tecnici",
      Governance: "Governance",
    },
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
  glossary: {
    relatedTerms: "Términos relacionados",
    back: "Volver al glosario",
    ctaHeadline: "Descubre cómo afecta eIDAS 2.0 a tu organización",
    ctaDescription:
      "Con la evaluación gratuita de preparación identificas tus brechas de cumplimiento y recibes recomendaciones concretas.",
    ctaButton: "Obtén tu puntuación",
    categories: {
      "Core Regulation": "Reglamento",
      "Digital Identity": "Identidad digital",
      "Trust Services": "Servicios de confianza",
      "Technical Standards": "Estándares técnicos",
      Governance: "Gobernanza",
    },
  },
  language: "Idioma",
};

export const UI: Record<Locale, UiStrings> = { en, de, it, es };
