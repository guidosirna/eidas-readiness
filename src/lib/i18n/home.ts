import type { Locale } from "./config";

/**
 * The homepage, per language.
 *
 * The sector and role cards here are short summaries, not the sector pages
 * themselves: only two sector pages are translated, so these cards link to
 * the English pages in every language. Naming the sector in the reader's
 * language and landing them on an English page is the honest order; a German
 * card that said "Financial Services" would just look unfinished.
 *
 * The FAQ block on this page pulls the first four questions from
 * src/lib/i18n/faq.ts rather than repeating them.
 */
export interface HomeContent {
  meta: { title: string; description: string };
  hero: { h1: string; lead: string; leadStrong: string; sub: string; cta: string };
  how: {
    eyebrow: string;
    heading: string;
    note: string;
    steps: { title: string; desc: string }[];
    cta: string;
  };
  what: {
    heading: string;
    text: string;
    walletTerm: string;
    textAfter: string;
    stats: { number: string; label: string }[];
    cta: string;
  };
  industries: {
    eyebrow: string;
    heading: string;
    note: string;
    cards: { slug: string; title: string; desc: string }[];
    learnMore: string;
    cta: string;
  };
  midCta: { headline: string; description: string; button: string };
  roles: {
    eyebrow: string;
    heading: string;
    note: string;
    cards: { slug: string; title: string; desc: string }[];
    learnMore: string;
    cta: string;
  };
  faq: { eyebrow: string; heading: string; note: string; seeAll: string };
  finalCta: { headline: string; description: string; button: string };
}

const en: HomeContent = {
  meta: {
    title: "Free eIDAS 2.0 Readiness Check for the EUDI Wallet",
    description:
      "Score your organisation against eIDAS 2.0 in twelve questions. Free: your readiness across six compliance areas, the gaps that matter most, and what to fix before the wallet deadline.",
  },
  hero: {
    h1: "Is your organization ready for\u00a0eIDAS\u00a02.0?",
    lead: "The EU Digital Identity Wallet becomes mandatory in ",
    leadStrong: "2026.",
    sub: "Find out where you stand in 3\u00a0minutes.",
    cta: "Take the free assessment",
  },
  how: {
    eyebrow: "How it works",
    heading: "Three steps to your compliance roadmap",
    note: "Free, no signup, takes under 5 minutes.",
    steps: [
      {
        title: "Answer 12 questions",
        desc: "Covering legal obligations, technical readiness, privacy alignment, and integration planning.",
      },
      {
        title: "Get your readiness score",
        desc: "See exactly where you stand across 6 compliance areas with a detailed breakdown.",
      },
      {
        title: "Follow your action plan",
        desc: "Receive prioritised, personalised recommendations tailored to your specific gaps.",
      },
    ],
    cta: "Start the quick check",
  },
  what: {
    heading: "What is eIDAS\u00a02.0?",
    text: "The EU's updated digital identity regulation requires every Member State to issue a free ",
    walletTerm: "Digital Identity Wallet",
    textAfter: " to citizens and residents. Organizations in regulated sectors must accept it.",
    stats: [
      { number: "450M+", label: "EU citizens will receive a free digital identity wallet" },
      { number: "27", label: "Member States with cross-border recognition" },
      { number: "2026", label: "Mandatory wallet acceptance begins for regulated sectors" },
      { number: "100%", label: "Privacy by design with selective disclosure" },
    ],
    cta: "Read the full guide",
  },
  industries: {
    eyebrow: "Affected industries",
    heading: "Is your sector affected?",
    note: "These industries must accept the EU Digital Identity Wallet. Find your sector.",
    cards: [
      {
        slug: "financial-services",
        title: "Financial Services",
        desc: "Banks, payment providers, and fintechs must accept EUDIW for customer onboarding and strong authentication.",
      },
      {
        slug: "healthcare",
        title: "Healthcare",
        desc: "Hospitals, insurers, and health platforms need to verify patient identity and handle health attestations.",
      },
      {
        slug: "government-public-sector",
        title: "Government & Public Sector",
        desc: "All public services offering online access must accept the wallet for citizen authentication.",
      },
      {
        slug: "telecommunications",
        title: "Telecommunications",
        desc: "Telecom operators must accept the wallet for SIM registration and subscriber verification.",
      },
      {
        slug: "ecommerce-platforms",
        title: "E-commerce & Platforms",
        desc: "Very large online platforms must support wallet-based age verification and identity checks.",
      },
      {
        slug: "travel-transport",
        title: "Travel & Transport",
        desc: "Airlines, hotels, and mobility providers will need to verify digital travel credentials and identity documents.",
      },
    ],
    learnMore: "Learn more",
    cta: "View all industries",
  },
  midCta: {
    headline: "Understand how these changes affect your business",
    description:
      "Take our free eIDAS 2.0 readiness assessment and discover which areas of digital identity compliance need your attention.",
    button: "Get your readiness score",
  },
  roles: {
    eyebrow: "Who in your organization",
    heading: "Key roles that need to prepare",
    note: "eIDAS 2.0 affects multiple teams. Find out what it means for your position.",
    cards: [
      {
        slug: "cto-technical-lead",
        title: "CTOs and Technical Leaders",
        desc: "Responsible for technical infrastructure changes, protocol integration, and wallet connectivity.",
      },
      {
        slug: "compliance-officer",
        title: "Compliance Officers",
        desc: "Must understand new regulatory obligations, mandatory acceptance rules, and reporting requirements.",
      },
      {
        slug: "product-manager",
        title: "Product Managers",
        desc: "Need to plan wallet-based identity features, user flows, and credential verification UX.",
      },
      {
        slug: "legal-team",
        title: "Legal Teams",
        desc: "Must assess liability implications, data protection alignment, and relying party registration.",
      },
    ],
    learnMore: "Learn more",
    cta: "View all roles",
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Common questions",
    note: "Quick answers to the most common questions about eIDAS 2.0.",
    seeAll: "See all FAQs",
  },
  finalCta: {
    headline: "Start preparing today",
    description:
      "Organizations that act early have time to implement changes thoughtfully. Those that wait risk non-compliance and competitive disadvantage.",
    button: "Take the free assessment",
  },
};

const de: HomeContent = {
  meta: {
    title: "Kostenloser eIDAS-2.0-Bereitschaftscheck für die EUDI-Wallet",
    description:
      "Bewerten Sie Ihre Organisation in zwölf Fragen gegen eIDAS 2.0. Kostenlos: Ihre Bereitschaft in sechs Compliance-Bereichen, die wichtigsten Lücken und was vor der Wallet-Frist zu tun ist.",
  },
  hero: {
    h1: "Ist Ihre Organisation bereit für\u00a0eIDAS\u00a02.0?",
    lead: "Die EU-Wallet für die digitale Identität wird verpflichtend ab ",
    leadStrong: "2026.",
    sub: "In 3 Minuten wissen Sie, wo Sie stehen.",
    cta: "Kostenlose Analyse starten",
  },
  how: {
    eyebrow: "So funktioniert es",
    heading: "Drei Schritte zu Ihrem Compliance-Fahrplan",
    note: "Kostenlos, ohne Anmeldung, in unter 5 Minuten.",
    steps: [
      {
        title: "12 Fragen beantworten",
        desc: "Zu rechtlichen Pflichten, technischer Bereitschaft, Datenschutz und Integrationsplanung.",
      },
      {
        title: "Bereitschaftswert erhalten",
        desc: "Sie sehen genau, wo Sie in 6 Compliance-Bereichen stehen, mit einer detaillierten Aufschlüsselung.",
      },
      {
        title: "Aktionsplan abarbeiten",
        desc: "Sie erhalten priorisierte Empfehlungen, zugeschnitten auf Ihre konkreten Lücken.",
      },
    ],
    cta: "Quick Check starten",
  },
  what: {
    heading: "Was ist eIDAS\u00a02.0?",
    text: "Die überarbeitete EU-Verordnung zur digitalen Identität verpflichtet jeden Mitgliedstaat, eine kostenlose ",
    walletTerm: "Wallet für die digitale Identität",
    textAfter:
      " an Bürger und Einwohner auszugeben. Organisationen in regulierten Branchen müssen sie akzeptieren.",
    stats: [
      { number: "450 Mio.+", label: "EU-Bürger erhalten eine kostenlose Wallet für die digitale Identität" },
      { number: "27", label: "Mitgliedstaaten mit grenzüberschreitender Anerkennung" },
      { number: "2026", label: "Die Annahmepflicht für regulierte Branchen beginnt" },
      { number: "100 %", label: "Datenschutz durch Technikgestaltung, mit selektiver Offenlegung" },
    ],
    cta: "Den vollständigen Leitfaden lesen",
  },
  industries: {
    eyebrow: "Betroffene Branchen",
    heading: "Ist Ihre Branche betroffen?",
    note: "Diese Branchen müssen die EU-Wallet für die digitale Identität akzeptieren. Finden Sie Ihre.",
    cards: [
      {
        slug: "financial-services",
        title: "Finanzdienstleistungen",
        desc: "Banken, Zahlungsdienstleister und Fintechs müssen die EUDIW beim Onboarding und für die starke Authentifizierung akzeptieren.",
      },
      {
        slug: "healthcare",
        title: "Gesundheitswesen",
        desc: "Kliniken, Versicherer und Gesundheitsplattformen müssen Patientenidentitäten prüfen und Gesundheitsbescheinigungen verarbeiten.",
      },
      {
        slug: "government-public-sector",
        title: "Öffentlicher Sektor",
        desc: "Alle öffentlichen Dienste mit Online-Zugang müssen die Wallet zur Authentifizierung von Bürgern akzeptieren.",
      },
      {
        slug: "telecommunications",
        title: "Telekommunikation",
        desc: "Telekommunikationsanbieter müssen die Wallet für die SIM-Registrierung und die Prüfung von Anschlussinhabern akzeptieren.",
      },
      {
        slug: "ecommerce-platforms",
        title: "E-Commerce und Plattformen",
        desc: "Sehr große Online-Plattformen müssen Altersprüfung und Identitätskontrolle über die Wallet unterstützen.",
      },
      {
        slug: "travel-transport",
        title: "Reise und Verkehr",
        desc: "Fluggesellschaften, Hotels und Mobilitätsanbieter werden digitale Reisenachweise und Ausweisdokumente prüfen müssen.",
      },
    ],
    learnMore: "Mehr erfahren",
    cta: "Alle Branchen ansehen",
  },
  midCta: {
    headline: "Verstehen Sie, was diese Änderungen für Ihr Geschäft bedeuten",
    description:
      "Mit der kostenlosen eIDAS-2.0-Bereitschaftsanalyse sehen Sie, welche Bereiche der Compliance bei der digitalen Identität Ihre Aufmerksamkeit brauchen.",
    button: "Bereitschaftswert abrufen",
  },
  roles: {
    eyebrow: "Wer in Ihrer Organisation",
    heading: "Rollen, die sich vorbereiten müssen",
    note: "eIDAS 2.0 betrifft mehrere Teams. Sehen Sie, was es für Ihre Position bedeutet.",
    cards: [
      {
        slug: "cto-technical-lead",
        title: "CTOs und technische Leitung",
        desc: "Verantwortlich für Änderungen an der technischen Infrastruktur, die Protokollanbindung und die Verbindung zur Wallet.",
      },
      {
        slug: "compliance-officer",
        title: "Compliance-Verantwortliche",
        desc: "Müssen die neuen regulatorischen Pflichten, die Annahmepflichten und die Meldeanforderungen kennen.",
      },
      {
        slug: "product-manager",
        title: "Produktverantwortliche",
        desc: "Müssen Wallet-basierte Identitätsfunktionen, Nutzerstrecken und die Bedienung der Nachweisprüfung planen.",
      },
      {
        slug: "legal-team",
        title: "Rechtsabteilungen",
        desc: "Müssen Haftungsfolgen, die Abstimmung mit dem Datenschutz und die Registrierung als vertrauender Beteiligter bewerten.",
      },
    ],
    learnMore: "Mehr erfahren",
    cta: "Alle Rollen ansehen",
  },
  faq: {
    eyebrow: "Häufige Fragen",
    heading: "Gängige Fragen",
    note: "Kurze Antworten auf die häufigsten Fragen zu eIDAS 2.0.",
    seeAll: "Alle Fragen ansehen",
  },
  finalCta: {
    headline: "Fangen Sie heute an",
    description:
      "Wer früh handelt, hat Zeit, Änderungen sorgfältig umzusetzen. Wer wartet, riskiert Verstöße und Nachteile im Wettbewerb.",
    button: "Kostenlose Analyse starten",
  },
};

const it: HomeContent = {
  meta: {
    title: "Verifica gratuita di preparazione a eIDAS 2.0 e al wallet EUDI",
    description:
      "Valuta la tua organizzazione rispetto a eIDAS 2.0 in dodici domande. Gratis: la tua preparazione su sei aree di conformità, le lacune che contano e cosa sistemare prima della scadenza del wallet.",
  },
  hero: {
    h1: "La tua organizzazione è pronta per\u00a0eIDAS\u00a02.0?",
    lead: "Il portafoglio europeo di identità digitale diventa obbligatorio nel ",
    leadStrong: "2026.",
    sub: "Scopri in 3 minuti dove ti trovi.",
    cta: "Fai l'analisi gratuita",
  },
  how: {
    eyebrow: "Come funziona",
    heading: "Tre passi verso il tuo percorso di conformità",
    note: "Gratis, senza registrazione, in meno di 5 minuti.",
    steps: [
      {
        title: "Rispondi a 12 domande",
        desc: "Su obblighi giuridici, preparazione tecnica, allineamento in materia di privacy e pianificazione dell'integrazione.",
      },
      {
        title: "Ottieni il tuo punteggio",
        desc: "Vedi esattamente come sei posizionato su 6 aree di conformità, con un dettaglio per ciascuna.",
      },
      {
        title: "Segui il piano d'azione",
        desc: "Ricevi raccomandazioni ordinate per priorità e calibrate sulle tue lacune specifiche.",
      },
    ],
    cta: "Inizia il quick check",
  },
  what: {
    heading: "Che cos'è eIDAS\u00a02.0?",
    text: "Il regolamento europeo aggiornato sull'identità digitale impone a ogni Stato membro di rilasciare gratuitamente un ",
    walletTerm: "portafoglio di identità digitale",
    textAfter:
      " a cittadini e residenti. Le organizzazioni dei settori regolamentati devono accettarlo.",
    stats: [
      { number: "450 mln+", label: "cittadini dell'UE riceveranno un portafoglio di identità digitale gratuito" },
      { number: "27", label: "Stati membri con riconoscimento transfrontaliero" },
      { number: "2026", label: "inizia l'obbligo di accettazione per i settori regolamentati" },
      { number: "100%", label: "privacy by design con divulgazione selettiva" },
    ],
    cta: "Leggi la guida completa",
  },
  industries: {
    eyebrow: "Settori interessati",
    heading: "Il tuo settore è interessato?",
    note: "Questi settori devono accettare il portafoglio europeo di identità digitale. Trova il tuo.",
    cards: [
      {
        slug: "financial-services",
        title: "Servizi finanziari",
        desc: "Banche, prestatori di servizi di pagamento e fintech devono accettare l'EUDIW per l'onboarding e per l'autenticazione forte.",
      },
      {
        slug: "healthcare",
        title: "Sanità",
        desc: "Ospedali, assicuratori e piattaforme sanitarie devono verificare l'identità del paziente e gestire le attestazioni sanitarie.",
      },
      {
        slug: "government-public-sector",
        title: "Settore pubblico",
        desc: "Tutti i servizi pubblici con accesso online devono accettare il wallet per autenticare i cittadini.",
      },
      {
        slug: "telecommunications",
        title: "Telecomunicazioni",
        desc: "Gli operatori di telecomunicazioni devono accettare il wallet per la registrazione delle SIM e la verifica degli abbonati.",
      },
      {
        slug: "ecommerce-platforms",
        title: "E-commerce e piattaforme",
        desc: "Le piattaforme online di dimensioni molto grandi devono supportare verifica dell'età e controlli di identità tramite wallet.",
      },
      {
        slug: "travel-transport",
        title: "Viaggi e trasporti",
        desc: "Compagnie aeree, alberghi e operatori di mobilità dovranno verificare credenziali di viaggio digitali e documenti di identità.",
      },
    ],
    learnMore: "Scopri di più",
    cta: "Vedi tutti i settori",
  },
  midCta: {
    headline: "Capisci come questi cambiamenti incidono sulla tua attività",
    description:
      "Con l'analisi gratuita di preparazione a eIDAS 2.0 scopri quali aree della conformità in materia di identità digitale richiedono la tua attenzione.",
    button: "Ottieni il tuo punteggio",
  },
  roles: {
    eyebrow: "Chi nella tua organizzazione",
    heading: "I ruoli che devono prepararsi",
    note: "eIDAS 2.0 coinvolge più team. Scopri cosa significa per il tuo ruolo.",
    cards: [
      {
        slug: "cto-technical-lead",
        title: "CTO e responsabili tecnici",
        desc: "Responsabili delle modifiche all'infrastruttura tecnica, dell'integrazione dei protocolli e del collegamento al wallet.",
      },
      {
        slug: "compliance-officer",
        title: "Responsabili della conformità",
        desc: "Devono conoscere i nuovi obblighi normativi, le regole di accettazione obbligatoria e gli adempimenti di segnalazione.",
      },
      {
        slug: "product-manager",
        title: "Responsabili di prodotto",
        desc: "Devono pianificare funzioni di identità basate sul wallet, i flussi utente e l'esperienza di verifica degli attestati.",
      },
      {
        slug: "legal-team",
        title: "Uffici legali",
        desc: "Devono valutare i profili di responsabilità, l'allineamento alla protezione dei dati e la registrazione come parte facente affidamento.",
      },
    ],
    learnMore: "Scopri di più",
    cta: "Vedi tutti i ruoli",
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Domande comuni",
    note: "Risposte rapide alle domande più frequenti su eIDAS 2.0.",
    seeAll: "Vedi tutte le domande",
  },
  finalCta: {
    headline: "Inizia a prepararti oggi",
    description:
      "Chi si muove presto ha il tempo di introdurre i cambiamenti con cura. Chi aspetta rischia di non essere conforme e di perdere terreno.",
    button: "Fai l'analisi gratuita",
  },
};

const es: HomeContent = {
  meta: {
    title: "Chequeo gratuito de preparación para eIDAS 2.0 y la cartera EUDI",
    description:
      "Evalúa tu organización frente a eIDAS 2.0 en doce preguntas. Gratis: tu preparación en seis áreas de cumplimiento, las brechas que más importan y qué corregir antes del plazo de la cartera.",
  },
  hero: {
    h1: "¿Está tu organización lista para\u00a0eIDAS\u00a02.0?",
    lead: "La cartera europea de identidad digital pasa a ser obligatoria en ",
    leadStrong: "2026.",
    sub: "Averigua en 3 minutos dónde estás.",
    cta: "Hacer la evaluación gratuita",
  },
  how: {
    eyebrow: "Cómo funciona",
    heading: "Tres pasos hacia tu hoja de ruta de cumplimiento",
    note: "Gratis, sin registro, en menos de 5 minutos.",
    steps: [
      {
        title: "Responde 12 preguntas",
        desc: "Sobre obligaciones jurídicas, preparación técnica, encaje con la privacidad y planificación de la integración.",
      },
      {
        title: "Recibe tu puntuación",
        desc: "Verás exactamente dónde estás en 6 áreas de cumplimiento, con el detalle de cada una.",
      },
      {
        title: "Sigue tu plan de acción",
        desc: "Recibirás recomendaciones priorizadas y ajustadas a tus brechas concretas.",
      },
    ],
    cta: "Empezar el chequeo rápido",
  },
  what: {
    heading: "¿Qué es eIDAS\u00a02.0?",
    text: "El reglamento europeo actualizado de identidad digital obliga a cada Estado miembro a expedir de forma gratuita una ",
    walletTerm: "cartera de identidad digital",
    textAfter:
      " a sus ciudadanos y residentes. Las organizaciones de sectores regulados deben aceptarla.",
    stats: [
      { number: "450 M+", label: "ciudadanos de la UE recibirán una cartera de identidad digital gratuita" },
      { number: "27", label: "Estados miembros con reconocimiento transfronterizo" },
      { number: "2026", label: "empieza la aceptación obligatoria para los sectores regulados" },
      { number: "100 %", label: "privacidad desde el diseño, con divulgación selectiva" },
    ],
    cta: "Leer la guía completa",
  },
  industries: {
    eyebrow: "Sectores afectados",
    heading: "¿Está afectado tu sector?",
    note: "Estos sectores deben aceptar la cartera europea de identidad digital. Encuentra el tuyo.",
    cards: [
      {
        slug: "financial-services",
        title: "Servicios financieros",
        desc: "Bancos, proveedores de pago y fintech deben aceptar la EUDIW para el alta de clientes y la autenticación reforzada.",
      },
      {
        slug: "healthcare",
        title: "Sanidad",
        desc: "Hospitales, aseguradoras y plataformas de salud tienen que verificar la identidad del paciente y manejar declaraciones sanitarias.",
      },
      {
        slug: "government-public-sector",
        title: "Sector público",
        desc: "Todos los servicios públicos con acceso en línea deben aceptar la cartera para autenticar a la ciudadanía.",
      },
      {
        slug: "telecommunications",
        title: "Telecomunicaciones",
        desc: "Los operadores de telecomunicaciones deben aceptar la cartera para registrar tarjetas SIM y verificar a los abonados.",
      },
      {
        slug: "ecommerce-platforms",
        title: "Comercio electrónico y plataformas",
        desc: "Las plataformas en línea de muy gran tamaño deben admitir la verificación de edad y los controles de identidad con cartera.",
      },
      {
        slug: "travel-transport",
        title: "Viajes y transporte",
        desc: "Aerolíneas, hoteles y operadores de movilidad tendrán que verificar credenciales de viaje digitales y documentos de identidad.",
      },
    ],
    learnMore: "Saber más",
    cta: "Ver todos los sectores",
  },
  midCta: {
    headline: "Entiende cómo te afectan estos cambios",
    description:
      "Con la evaluación gratuita de preparación para eIDAS 2.0 descubres qué áreas del cumplimiento en identidad digital necesitan tu atención.",
    button: "Obtén tu puntuación",
  },
  roles: {
    eyebrow: "Quién en tu organización",
    heading: "Perfiles que tienen que prepararse",
    note: "eIDAS 2.0 afecta a varios equipos. Descubre qué significa para tu puesto.",
    cards: [
      {
        slug: "cto-technical-lead",
        title: "CTO y responsables técnicos",
        desc: "Responsables de los cambios en la infraestructura técnica, de la integración de protocolos y de la conexión con la cartera.",
      },
      {
        slug: "compliance-officer",
        title: "Responsables de cumplimiento",
        desc: "Deben conocer las nuevas obligaciones normativas, las reglas de aceptación obligatoria y los deberes de información.",
      },
      {
        slug: "product-manager",
        title: "Responsables de producto",
        desc: "Tienen que planificar funciones de identidad con cartera, los flujos de usuario y la experiencia de verificación de credenciales.",
      },
      {
        slug: "legal-team",
        title: "Equipos jurídicos",
        desc: "Deben valorar las implicaciones de responsabilidad, el encaje con la protección de datos y el registro como parte usuaria.",
      },
    ],
    learnMore: "Saber más",
    cta: "Ver todos los perfiles",
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Preguntas comunes",
    note: "Respuestas rápidas a las preguntas más habituales sobre eIDAS 2.0.",
    seeAll: "Ver todas las preguntas",
  },
  finalCta: {
    headline: "Empieza a prepararte hoy",
    description:
      "Quien se mueve pronto tiene tiempo de aplicar los cambios con calma. Quien espera se expone al incumplimiento y a perder posición.",
    button: "Hacer la evaluación gratuita",
  },
};

export const HOME_CONTENT: Record<Locale, HomeContent> = { en, de, it, es };
