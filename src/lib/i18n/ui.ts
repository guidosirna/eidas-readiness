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
  faq: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    /** Inline link to the guide is written as [text](/path). */
    standfirst: string;
    searchPlaceholder: string;
    noResults: string;
    all: string;
    ctaHeadline: string;
    ctaDescription: string;
    ctaButton: string;
    /** The four category labels, keyed by the English value in the data. */
    categories: Record<string, string>;
  };
  footer: {
    tagline: string;
    assessment: string;
    learn: string;
    resources: string;
    byIndustry: string;
    byRole: string;
    privacy: string;
    terms: string;
    newsletterHeadline: string;
    newsletterDescription: string;
    /** {year} is substituted at render. */
    copyright: string;
  };
  header: {
    tagline: string;
    /** Nav grouping, not page names, so these are translated. */
    learn: string;
    prepare: string;
    guides: string;
    resources: string;
    byRole: string;
    byIndustry: string;
    /** Page names whose target has a translation. */
    faq: string;
    faqDesc: string;
    timeline: string;
    timelineDesc: string;
    guide: string;
    guideDesc: string;
    timestamp: string;
    timestampDesc: string;
    ctaQuestion: string;
    ctaBlurb: string;
    ctaButton: string;
  };
  chat: {
    emailInvalid: string;
    emailWork: string;
    bubble: string;
    bubbleCta: string;
    dismiss: string;
    header: string;
    close: string;
    intro: string;
    thanks: string;
    optionAssessment: string;
    optionExpert: string;
    assessmentBlurb: string;
    assessmentCta: string;
    name: string;
    email: string;
    company: string;
    sending: string;
    submit: string;
    error: string;
    resourceGuide: string;
    resourceAssessment: string;
    toggleOpen: string;
    toggleClose: string;
  };
  banner: {
    headline: string;
    trust: string;
    cta: string;
    dismiss: string;
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
  faq: {
    metaTitle: "eIDAS 2.0 FAQ | Frequently Asked Questions",
    metaDescription:
      "Answers to common eIDAS 2.0 questions about the EU Digital Identity Wallet, compliance deadlines, trust services, and technical integration.",
    h1: "Frequently Asked Questions",
    standfirst:
      "Find quick answers to common questions about [eIDAS 2.0 compliance](/guide/eidas-2-compliance), the European Digital Identity Wallet, and business readiness.",
    searchPlaceholder: "Search FAQs...",
    noResults: "No FAQs match your search. Try a different keyword.",
    all: "All",
    ctaHeadline: "Still Have Questions? Check Your Readiness",
    ctaDescription:
      "Take our free eIDAS 2.0 readiness assessment to find out where your organisation stands and get a personalised action plan.",
    ctaButton: "eIDAS Quick Check",
    categories: {
      General: "General",
      EUDIW: "EUDIW",
      "Business Compliance": "Business Compliance",
      Technical: "Technical",
    },
  },
  footer: {
    tagline:
      "A free resource helping European organizations understand and prepare for eIDAS 2.0 and the EU Digital Identity Wallet.",
    assessment: "Assessment & Tools",
    learn: "Learn",
    resources: "EU Resources",
    byIndustry: "eIDAS 2.0 by Industry",
    byRole: "eIDAS 2.0 by Role",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    newsletterHeadline: "Stay updated on eIDAS 2.0 developments",
    newsletterDescription: "Get regulatory updates and compliance insights delivered to your inbox.",
    copyright: "© {year} eIDAS 2.0 Readiness Check. An open resource for European organizations.",
  },
  header: {
    tagline: "A free resource for EU digital identity compliance",
    learn: "Learn",
    prepare: "Prepare",
    guides: "Guides",
    resources: "Resources",
    byRole: "By Role",
    byIndustry: "By Industry",
    faq: "FAQ",
    faqDesc: "Answers to common eIDAS 2.0 questions",
    timeline: "Timeline",
    timelineDesc: "Key dates and regulatory milestones",
    guide: "eIDAS 2.0 Compliance Guide",
    guideDesc: "Everything you need to know about the regulation, requirements, and implementation steps",
    timestamp: "Electronic Timestamps",
    timestampDesc: "What a qualified timestamp proves, and when you need one",
    ctaQuestion: "Ready to check your compliance?",
    ctaBlurb: "Answer 12 questions and get a personalised readiness score.",
    ctaButton: "eIDAS Quick Check",
  },
  chat: {
    emailInvalid: "Please enter a valid email address.",
    emailWork: "Please use your work email address.",
    bubble: "Need help preparing for eIDAS 2.0?",
    bubbleCta: "Chat with us",
    dismiss: "Dismiss",
    header: "eIDAS Readiness Help",
    close: "Close chat",
    intro: "Need help preparing for eIDAS 2.0? I can point you in the right direction.",
    thanks: "Thanks! We'll be in touch soon. In the meantime, check out our resources.",
    optionAssessment: "Check my readiness",
    optionExpert: "Talk to an expert",
    assessmentBlurb: "Let me help you check your readiness with our quick assessment.",
    assessmentCta: "eIDAS Quick Check",
    name: "Name",
    email: "Email *",
    company: "Company",
    sending: "Sending...",
    submit: "Get in Touch",
    error: "Something went wrong. Please try again.",
    resourceGuide: "Read the Compliance Guide",
    resourceAssessment: "Take the Assessment",
    toggleOpen: "Open help chat",
    toggleClose: "Close help chat",
  },
  banner: {
    headline: "Free eIDAS 2.0 Readiness Assessment",
    trust: "Trusted by top European organisations",
    cta: "Take the Quick Check",
    dismiss: "Dismiss banner",
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
  faq: {
    metaTitle: "eIDAS 2.0 FAQ | Häufige Fragen",
    metaDescription:
      "Antworten auf gängige Fragen zu eIDAS 2.0: die EU-Wallet für die digitale Identität, Compliance-Fristen, Vertrauensdienste und die technische Anbindung.",
    h1: "Häufige Fragen",
    standfirst:
      "Kurze Antworten auf gängige Fragen zur [eIDAS-2.0-Compliance](/guide/eidas-2-compliance), zur europäischen Wallet für die digitale Identität und zur Vorbereitung im Unternehmen.",
    searchPlaceholder: "Fragen durchsuchen ...",
    noResults: "Keine Frage passt zu Ihrer Suche. Versuchen Sie ein anderes Stichwort.",
    all: "Alle",
    ctaHeadline: "Noch Fragen offen? Prüfen Sie Ihre Bereitschaft",
    ctaDescription:
      "Mit der kostenlosen eIDAS-2.0-Bereitschaftsanalyse sehen Sie, wo Ihre Organisation steht, und erhalten einen individuellen Aktionsplan.",
    ctaButton: "eIDAS Quick Check",
    categories: {
      General: "Allgemein",
      EUDIW: "EUDIW",
      "Business Compliance": "Compliance im Unternehmen",
      Technical: "Technik",
    },
  },
  footer: {
    tagline:
      "Ein kostenloses Angebot, das europäischen Organisationen hilft, eIDAS 2.0 und die EU-Wallet für die digitale Identität zu verstehen und sich darauf vorzubereiten.",
    assessment: "Analyse und Werkzeuge",
    learn: "Wissen",
    resources: "EU-Quellen",
    byIndustry: "eIDAS 2.0 nach Branche",
    byRole: "eIDAS 2.0 nach Rolle",
    privacy: "Datenschutzerklärung",
    terms: "Nutzungsbedingungen",
    newsletterHeadline: "Bleiben Sie zu eIDAS 2.0 auf dem Laufenden",
    newsletterDescription: "Regulatorische Neuigkeiten und Einschätzungen zur Compliance, direkt in Ihr Postfach.",
    copyright: "© {year} eIDAS 2.0 Readiness Check. Ein offenes Angebot für europäische Organisationen.",
  },
  header: {
    tagline: "Ein kostenloses Angebot zur eIDAS-Compliance",
    learn: "Wissen",
    prepare: "Vorbereiten",
    guides: "Leitfäden",
    resources: "Inhalte",
    byRole: "Nach Rolle",
    byIndustry: "Nach Branche",
    faq: "Häufige Fragen",
    faqDesc: "Antworten auf gängige Fragen zu eIDAS 2.0",
    timeline: "Zeitplan",
    timelineDesc: "Zentrale Termine und regulatorische Etappen",
    guide: "Leitfaden zur eIDAS-2.0-Compliance",
    guideDesc: "Alles, was Sie zur Verordnung, zu den Anforderungen und zur Umsetzung wissen müssen",
    timestamp: "Elektronische Zeitstempel",
    timestampDesc: "Was ein qualifizierter Zeitstempel belegt und wann Sie ihn brauchen",
    ctaQuestion: "Bereit für den Bereitschaftscheck?",
    ctaBlurb: "12 Fragen beantworten und den persönlichen Bereitschaftswert erhalten.",
    ctaButton: "eIDAS Quick Check",
  },
  chat: {
    emailInvalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    emailWork: "Bitte verwenden Sie Ihre geschäftliche E-Mail-Adresse.",
    bubble: "Brauchen Sie Hilfe bei der Vorbereitung auf eIDAS 2.0?",
    bubbleCta: "Schreiben Sie uns",
    dismiss: "Schließen",
    header: "eIDAS-Readiness-Hilfe",
    close: "Chat schließen",
    intro: "Brauchen Sie Hilfe bei der Vorbereitung auf eIDAS 2.0? Ich weise Ihnen den Weg.",
    thanks: "Danke! Wir melden uns in Kürze. Sehen Sie sich in der Zwischenzeit unsere Ressourcen an.",
    optionAssessment: "Bereitschaft prüfen",
    optionExpert: "Mit einem Experten sprechen",
    assessmentBlurb: "Prüfen Sie Ihre Bereitschaft mit unserer kurzen Analyse.",
    assessmentCta: "eIDAS Quick Check",
    name: "Name",
    email: "E-Mail *",
    company: "Unternehmen",
    sending: "Wird gesendet…",
    submit: "Kontakt aufnehmen",
    error: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
    resourceGuide: "Compliance-Leitfaden lesen",
    resourceAssessment: "Zur Bereitschaftsanalyse",
    toggleOpen: "Hilfe-Chat öffnen",
    toggleClose: "Hilfe-Chat schließen",
  },
  banner: {
    headline: "Kostenlose eIDAS-2.0-Bereitschaftsanalyse",
    trust: "Genutzt von führenden europäischen Organisationen",
    cta: "Quick Check starten",
    dismiss: "Hinweis schließen",
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
  faq: {
    metaTitle: "FAQ eIDAS 2.0 | Domande frequenti",
    metaDescription:
      "Risposte alle domande più comuni su eIDAS 2.0: il portafoglio europeo di identità digitale, le scadenze di conformità, i servizi fiduciari e l'integrazione tecnica.",
    h1: "Domande frequenti",
    standfirst:
      "Risposte rapide alle domande più comuni sulla [conformità a eIDAS 2.0](/guide/eidas-2-compliance), sul portafoglio europeo di identità digitale e sulla preparazione delle imprese.",
    searchPlaceholder: "Cerca tra le domande...",
    noResults: "Nessuna domanda corrisponde alla ricerca. Prova con un'altra parola chiave.",
    all: "Tutte",
    ctaHeadline: "Hai ancora domande? Verifica la tua preparazione",
    ctaDescription:
      "Con l'analisi gratuita di preparazione a eIDAS 2.0 scopri dove si trova la tua organizzazione e ottieni un piano d'azione su misura.",
    ctaButton: "eIDAS Quick Check",
    categories: {
      General: "Generale",
      EUDIW: "EUDIW",
      "Business Compliance": "Conformità per le imprese",
      Technical: "Aspetti tecnici",
    },
  },
  footer: {
    tagline:
      "Una risorsa gratuita che aiuta le organizzazioni europee a capire eIDAS 2.0 e il portafoglio europeo di identità digitale e a prepararsi.",
    assessment: "Analisi e strumenti",
    learn: "Approfondimenti",
    resources: "Fonti dell'UE",
    byIndustry: "eIDAS 2.0 per settore",
    byRole: "eIDAS 2.0 per ruolo",
    privacy: "Informativa sulla privacy",
    terms: "Condizioni d'uso",
    newsletterHeadline: "Resta aggiornato sugli sviluppi di eIDAS 2.0",
    newsletterDescription: "Novità normative e analisi sulla conformità, direttamente nella tua casella.",
    copyright: "© {year} eIDAS 2.0 Readiness Check. Una risorsa aperta per le organizzazioni europee.",
  },
  header: {
    tagline: "Una risorsa gratuita sulla conformità a eIDAS",
    learn: "Approfondimenti",
    prepare: "Prepararsi",
    guides: "Guide",
    resources: "Contenuti",
    byRole: "Per ruolo",
    byIndustry: "Per settore",
    faq: "Domande frequenti",
    faqDesc: "Risposte alle domande più comuni su eIDAS 2.0",
    timeline: "Calendario",
    timelineDesc: "Date chiave e tappe normative",
    guide: "Guida alla conformità eIDAS 2.0",
    guideDesc: "Tutto quello che serve sapere su regolamento, requisiti e attuazione",
    timestamp: "Validazione temporale elettronica",
    timestampDesc: "Cosa dimostra una validazione temporale qualificata e quando serve",
    ctaQuestion: "Pronto a verificare la tua conformità?",
    ctaBlurb: "Rispondi a 12 domande e ottieni un punteggio di preparazione personalizzato.",
    ctaButton: "eIDAS Quick Check",
  },
  chat: {
    emailInvalid: "Inserisci un indirizzo email valido.",
    emailWork: "Usa il tuo indirizzo email aziendale.",
    bubble: "Serve aiuto per prepararsi a eIDAS 2.0?",
    bubbleCta: "Scrivici",
    dismiss: "Chiudi",
    header: "Assistenza eIDAS Readiness",
    close: "Chiudi la chat",
    intro: "Serve aiuto per prepararsi a eIDAS 2.0? Posso indicarti la strada giusta.",
    thanks: "Grazie! Ti contatteremo presto. Nel frattempo dai un'occhiata alle nostre risorse.",
    optionAssessment: "Verifica la mia preparazione",
    optionExpert: "Parla con un esperto",
    assessmentBlurb: "Verifica la tua preparazione con la nostra analisi rapida.",
    assessmentCta: "eIDAS Quick Check",
    name: "Nome",
    email: "Email *",
    company: "Azienda",
    sending: "Invio in corso…",
    submit: "Contattaci",
    error: "Qualcosa è andato storto. Riprova.",
    resourceGuide: "Leggi la guida alla conformità",
    resourceAssessment: "Fai l'analisi di preparazione",
    toggleOpen: "Apri la chat di assistenza",
    toggleClose: "Chiudi la chat di assistenza",
  },
  banner: {
    headline: "Analisi gratuita di preparazione a eIDAS 2.0",
    trust: "Usata da organizzazioni europee di primo piano",
    cta: "Fai il quick check",
    dismiss: "Chiudi avviso",
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
  faq: {
    metaTitle: "FAQ eIDAS 2.0 | Preguntas frecuentes",
    metaDescription:
      "Respuestas a las dudas más comunes sobre eIDAS 2.0: la cartera europea de identidad digital, los plazos de cumplimiento, los servicios de confianza y la integración técnica.",
    h1: "Preguntas frecuentes",
    standfirst:
      "Respuestas rápidas a las dudas más habituales sobre el [cumplimiento de eIDAS 2.0](/guide/eidas-2-compliance), la cartera europea de identidad digital y la preparación de las empresas.",
    searchPlaceholder: "Buscar en las preguntas...",
    noResults: "Ninguna pregunta coincide con tu búsqueda. Prueba con otra palabra.",
    all: "Todas",
    ctaHeadline: "¿Te quedan dudas? Evalúa tu preparación",
    ctaDescription:
      "Con la evaluación gratuita de preparación para eIDAS 2.0 descubres dónde está tu organización y obtienes un plan de acción a medida.",
    ctaButton: "eIDAS Quick Check",
    categories: {
      General: "General",
      EUDIW: "EUDIW",
      "Business Compliance": "Cumplimiento en la empresa",
      Technical: "Aspectos técnicos",
    },
  },
  footer: {
    tagline:
      "Un recurso gratuito que ayuda a las organizaciones europeas a entender eIDAS 2.0 y la cartera europea de identidad digital, y a prepararse.",
    assessment: "Evaluación y herramientas",
    learn: "Aprender",
    resources: "Fuentes de la UE",
    byIndustry: "eIDAS 2.0 por sector",
    byRole: "eIDAS 2.0 por perfil",
    privacy: "Política de privacidad",
    terms: "Condiciones de uso",
    newsletterHeadline: "Mantente al día de eIDAS 2.0",
    newsletterDescription: "Novedades normativas y análisis de cumplimiento, directos a tu bandeja.",
    copyright: "© {year} eIDAS 2.0 Readiness Check. Un recurso abierto para las organizaciones europeas.",
  },
  header: {
    tagline: "Un recurso gratuito sobre el cumplimiento de eIDAS",
    learn: "Aprender",
    prepare: "Prepararse",
    guides: "Guías",
    resources: "Contenidos",
    byRole: "Por perfil",
    byIndustry: "Por sector",
    faq: "Preguntas frecuentes",
    faqDesc: "Respuestas a las dudas más comunes sobre eIDAS 2.0",
    timeline: "Calendario",
    timelineDesc: "Fechas clave e hitos normativos",
    guide: "Guía de cumplimiento de eIDAS 2.0",
    guideDesc: "Todo lo que hay que saber del reglamento, los requisitos y la implantación",
    timestamp: "Sellos de tiempo electrónicos",
    timestampDesc: "Qué acredita un sello de tiempo cualificado y cuándo hace falta",
    ctaQuestion: "¿Listo para evaluar tu cumplimiento?",
    ctaBlurb: "Responde 12 preguntas y obtén una puntuación de preparación personalizada.",
    ctaButton: "eIDAS Quick Check",
  },
  chat: {
    emailInvalid: "Introduce una dirección de correo válida.",
    emailWork: "Usa tu correo corporativo.",
    bubble: "¿Necesitas ayuda para preparar eIDAS 2.0?",
    bubbleCta: "Escríbenos",
    dismiss: "Cerrar",
    header: "Ayuda de eIDAS Readiness",
    close: "Cerrar el chat",
    intro: "¿Necesitas ayuda para preparar eIDAS 2.0? Puedo orientarte.",
    thanks: "¡Gracias! Te escribimos pronto. Mientras tanto, echa un vistazo a nuestros recursos.",
    optionAssessment: "Evaluar mi preparación",
    optionExpert: "Hablar con un experto",
    assessmentBlurb: "Evalúa tu preparación con nuestra evaluación rápida.",
    assessmentCta: "eIDAS Quick Check",
    name: "Nombre",
    email: "Correo *",
    company: "Empresa",
    sending: "Enviando…",
    submit: "Contactar",
    error: "Algo ha fallado. Vuelve a intentarlo.",
    resourceGuide: "Leer la guía de cumplimiento",
    resourceAssessment: "Hacer la evaluación",
    toggleOpen: "Abrir el chat de ayuda",
    toggleClose: "Cerrar el chat de ayuda",
  },
  banner: {
    headline: "Evaluación gratuita de preparación para eIDAS 2.0",
    trust: "La usan organizaciones europeas de referencia",
    cta: "Hacer el chequeo rápido",
    dismiss: "Cerrar aviso",
  },
  language: "Idioma",
};

export const UI: Record<Locale, UiStrings> = { en, de, it, es };
