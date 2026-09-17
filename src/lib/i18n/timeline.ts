import type { Locale } from "./config";

/**
 * Every string on the timeline page, per language.
 *
 * The page is 48% of the site's search clicks, so it is the first one
 * translated and the one the pattern was worked out on. The prose used to live
 * inside the component with inline <Link> elements, which is why it could not
 * be translated without duplicating the JSX three times.
 *
 * Links inside prose are written `[text](/path)` and resolved by the renderer.
 * The targets stay English, because the pages they point at are English: a
 * German sentence linking to an English glossary entry is honest, and a
 * German label on an English page would not be.
 *
 * {days} in the countdown is substituted at render. Nothing else is
 * interpolated, so a translator can move it or drop it as the grammar needs.
 */
export type MilestoneStatus = "past" | "current" | "future";

export interface Milestone {
  date: string;
  title: string;
  description: string;
  status: MilestoneStatus;
}

export interface TimelineContent {
  meta: { title: string; description: string };
  /** Short form for the breadcrumb, where the full H1 wraps. */
  breadcrumb: string;
  hero: { h1: string; standfirst: string };
  countdown: {
    label: string;
    daysLeft: string;
    today: string;
    explanation: string;
    cta: string;
    dateLabel: string;
  };
  nav: { overview: string; timeline: string; whatThisMeans: string; related: string };
  overview: { heading: string; paragraphs: string[] };
  milestones: { heading: string; items: Milestone[] };
  whatThisMeans: { heading: string; cards: { title: string; desc: string; href: string }[] };
  whoThisAffects: { sectors: string; roles: string; terms: string; allTerms: string };
  related: { heading: string; items: { href: string; label: string; desc: string }[] };
  cta: { headline: string; description: string; button: string };
  /**
   * The small ask, sitting right under the dates. The page's only request used
   * to be the CTA at the very bottom, asking for a twelve-question assessment:
   * over 90 days 313 people read this page, the most-read on the site, and it
   * produced one lead. They come to look up a date, so what they are offered is
   * a date.
   */
  alerts: { headline: string; description: string; button: string };
}

const en: TimelineContent = {
  meta: {
    title: "eIDAS 2.0 Timeline: Key Dates and the Wallet Deadline",
    description:
      "Every eIDAS 2.0 date, from the 2021 proposal to the deadline for member states to offer a wallet, and mandatory acceptance by regulated sectors after it. With a live countdown.",
  },
  breadcrumb: "eIDAS 2.0 Timeline",
  hero: {
    h1: "eIDAS 2.0 Timeline & Key Deadlines",
    standfirst:
      "Track every milestone of the European Digital Identity framework, from the original Commission proposal to the mandatory wallet rollout across all EU member states.",
  },
  countdown: {
    label: "Wallet availability deadline",
    daysLeft: "{days} days left",
    today: "The deadline is today",
    dateLabel: "24 December 2026",
    explanation:
      "Every member state must offer at least one European Digital Identity Wallet to its citizens and residents by this date, under Article 5a(1) of Regulation (EU) 2024/1183.",
    cta: "Check your readiness",
  },
  nav: {
    overview: "Overview",
    timeline: "Implementation Timeline",
    whatThisMeans: "What This Means",
    related: "Related Resources",
  },
  overview: {
    heading: "Overview",
    paragraphs: [
      "The eIDAS 2.0 regulation represents the most ambitious overhaul of digital identity legislation in Europe since the original eIDAS framework was adopted in 2014. Understanding the regulatory timeline is essential for any organisation operating in the EU, because each milestone triggers specific obligations and opportunities.",
      "The legislative journey began in June 2021 when the European Commission tabled its proposal for a European Digital Identity Wallet. After more than two years of negotiation between the Parliament and the Council, the revised regulation was formally adopted in early 2024 and entered into force in May of that year. Since then, the focus has shifted to the technical layer: implementing acts, the Architecture Reference Framework ([ARF](/glossary/arf)), and Large-Scale Pilots that will shape how the [EUDIW](/glossary/eudiw) works in practice.",
      "The deadlines ahead are not abstract policy dates. They carry direct compliance consequences. Member states must offer a wallet to citizens by 24 December 2026, and regulated industries will be required to accept them after that. Organisations that begin preparing now will gain a significant competitive advantage. For a step-by-step compliance roadmap, see our [eIDAS 2.0 compliance guide](/guide/eidas-2-compliance).",
    ],
  },
  milestones: {
    heading: "Full eIDAS 2.0 implementation timeline",
    items: [
      {
        date: "June 2021",
        title: "European Commission Proposal",
        description:
          "The European Commission proposed the revision of eIDAS, introducing the European Digital Identity Wallet framework to give every EU citizen access to a secure, interoperable digital identity.",
        status: "past",
      },
      {
        date: "November 2023",
        title: "Political Agreement Reached",
        description:
          "European Parliament and Council reached a political agreement on the revised eIDAS regulation after extensive trilogue negotiations, setting the stage for formal adoption.",
        status: "past",
      },
      {
        date: "March 2024",
        title: "European Parliament Approval",
        description:
          "The regulation was formally adopted by the European Parliament with a decisive majority, signalling strong institutional backing for the digital identity framework.",
        status: "past",
      },
      {
        date: "April 2024",
        title: "Council of the EU Adoption",
        description:
          "The Council formally adopted the regulation, completing the legislative process and clearing the path for publication in the Official Journal of the European Union.",
        status: "past",
      },
      {
        date: "May 2024",
        title: "Entry into Force",
        description:
          "eIDAS 2.0 officially entered into force on 20 May 2024, starting the countdown for member state transposition and implementing act development.",
        status: "past",
      },
      {
        date: "November 2024",
        title: "Architecture Reference Framework Updates",
        description:
          "Updated ARF specifications for wallet implementation were published, providing technical guidance on interoperability, security, and data model standards for EUDIW development.",
        status: "past",
      },
      {
        date: "December 2024",
        title: "First Implementing Acts Enter into Force",
        description:
          "Implementing Regulations (EU) 2024/2977 to 2024/2982, adopted on 28 November 2024, were published on 4 December and entered into force on 24 December 2024. They define person identification data, attestation formats, wallet certification and relying party registration. They also start the 24-month clock in Article 5a(1) for member states to provide a wallet.",
        status: "past",
      },
      {
        date: "Q4 2025",
        title: "Large-Scale Pilot Results",
        description:
          "Large-Scale Pilots (LSPs) delivered final results and recommendations based on real-world testing across healthcare, finance, travel, and government use cases.",
        status: "past",
      },
      {
        date: "24 December 2026",
        title: "Member State Wallet Availability",
        description:
          "The hard deadline. Every member state must offer at least one European Digital Identity Wallet to its citizens and residents, backed by a notified eID scheme and interoperable across borders. Twenty-four months from the entry into force of the first implementing acts, under Article 5a(1) of Regulation (EU) 2024/1183.",
        status: "current",
      },
      {
        date: "2026–2027",
        title: "Mandatory Acceptance by Relying Parties",
        description:
          "Private sector entities in key industries, including banking, telecoms, healthcare, and transport, must accept the EUDIW for identity verification and attribute sharing.",
        status: "future",
      },
      {
        date: "2027+",
        title: "Full Ecosystem Maturity",
        description:
          "Complete trust service ecosystem operational with qualified electronic attestations of attributes, cross-border interoperability, and widespread private-sector adoption.",
        status: "future",
      },
    ],
  },
  whatThisMeans: {
    heading: "What this means for your organisation",
    cards: [
      {
        title: "Financial services",
        desc: "KYC and AML workflows must integrate wallet-based identity verification after the wallet deadline.",
        href: "/industries/financial-services",
      },
      {
        title: "Public sector",
        desc: "Member states must offer wallets and accept them for public services by 24 December 2026.",
        href: "/industries/government-public-sector",
      },
      {
        title: "Regulated industries",
        desc: "Telecoms, healthcare, travel, and energy face mandatory acceptance between 2026 and 2027.",
        href: "/industries",
      },
    ],
  },
  whoThisAffects: {
    sectors: "Sectors",
    roles: "Roles",
    terms: "Terms",
    allTerms: "all 36",
  },
  related: {
    heading: "Related Resources",
    items: [
      {
        href: "/guide/eidas-2-compliance",
        label: "eIDAS 2.0 Compliance Guide",
        desc: "Step-by-step roadmap to meet every regulatory requirement.",
      },
      {
        href: "/assessment",
        label: "Readiness Assessment",
        desc: "Find out where your organisation stands today.",
      },
      {
        href: "/eidas-2-compliance-checklist",
        label: "Compliance Checklist",
        desc: "A hands-on checklist to track your progress.",
      },
      {
        href: "/glossary/eudiw",
        label: "EUDIW (European Digital Identity Wallet)",
        desc: "What the wallet is and how it works.",
      },
      {
        href: "/glossary/arf",
        label: "ARF (Architecture Reference Framework)",
        desc: "The technical blueprint behind the wallet ecosystem.",
      },
    ],
  },
  cta: {
    headline: "Don't Miss Critical Deadlines - Assess Your Readiness Now",
    description:
      "Take our free eIDAS 2.0 readiness assessment to understand your compliance gaps and get a tailored action plan before the key deadlines hit.",
    button: "Check your readiness",
  },
  alerts: {
    headline: "Get told when a date moves",
    description: "These deadlines have slipped before. One email when one of them changes, nothing else.",
    button: "Notify me",
  },
};

const de: TimelineContent = {
  meta: {
    title: "eIDAS 2.0 Zeitplan: Fristen und der Wallet-Termin",
    description:
      "Alle Termine der eIDAS-2.0-Verordnung, vom Vorschlag 2021 bis zur Frist, zu der die Mitgliedstaaten eine Wallet anbieten müssen, und der anschließenden Annahmepflicht für regulierte Branchen. Mit laufendem Countdown.",
  },
  breadcrumb: "eIDAS 2.0 Zeitplan",
  hero: {
    h1: "eIDAS 2.0 Zeitplan und zentrale Fristen",
    standfirst:
      "Alle Etappen des europäischen Rahmens für digitale Identität, vom ursprünglichen Vorschlag der Kommission bis zur verpflichtenden Einführung der Wallet in allen EU-Mitgliedstaaten.",
  },
  countdown: {
    label: "Frist für die Verfügbarkeit der Wallet",
    daysLeft: "Noch {days} Tage",
    today: "Die Frist läuft heute ab",
    dateLabel: "24. Dezember 2026",
    explanation:
      "Jeder Mitgliedstaat muss seinen Bürgerinnen, Bürgern und Einwohnern bis zu diesem Datum mindestens eine europäische Wallet für die digitale Identität anbieten, nach Artikel 5a Absatz 1 der Verordnung (EU) 2024/1183.",
    cta: "Bereitschaft prüfen",
  },
  nav: {
    overview: "Überblick",
    timeline: "Zeitplan der Umsetzung",
    whatThisMeans: "Was das bedeutet",
    related: "Weiterführende Inhalte",
  },
  overview: {
    heading: "Überblick",
    paragraphs: [
      "Die Verordnung eIDAS 2.0 ist die weitreichendste Überarbeitung des europäischen Rechts zur digitalen Identität seit der Annahme des ursprünglichen eIDAS-Rahmens im Jahr 2014. Für jede Organisation, die in der EU tätig ist, lohnt es sich, den regulatorischen Zeitplan zu kennen, denn an jede Etappe knüpfen sich konkrete Pflichten und Möglichkeiten.",
      "Der Gesetzgebungsweg begann im Juni 2021, als die Europäische Kommission ihren Vorschlag für eine europäische Wallet für die digitale Identität vorlegte. Nach mehr als zwei Jahren Verhandlungen zwischen Parlament und Rat wurde die überarbeitete Verordnung Anfang 2024 formell angenommen und trat im Mai desselben Jahres in Kraft. Seither liegt der Schwerpunkt auf der technischen Ebene: Durchführungsrechtsakte, der Architecture Reference Framework ([ARF](/glossary/arf)) und die Large-Scale Pilots, die bestimmen werden, wie die [EUDIW](/glossary/eudiw) in der Praxis funktioniert.",
      "Die anstehenden Fristen sind keine abstrakten politischen Termine, sondern haben unmittelbare Folgen für die Compliance. Die Mitgliedstaaten müssen ihren Bürgern bis zum 24. Dezember 2026 eine Wallet anbieten, und regulierte Branchen werden sie danach akzeptieren müssen. Wer jetzt beginnt, verschafft sich einen erheblichen Vorsprung. Einen schrittweisen Fahrplan finden Sie in unserem [Leitfaden zur eIDAS-2.0-Compliance](/guide/eidas-2-compliance).",
    ],
  },
  milestones: {
    heading: "Vollständiger Zeitplan der eIDAS-2.0-Umsetzung",
    items: [
      {
        date: "Juni 2021",
        title: "Vorschlag der Europäischen Kommission",
        description:
          "Die Europäische Kommission schlug die Überarbeitung von eIDAS vor und führte den Rahmen für die europäische Wallet für die digitale Identität ein, damit alle EU-Bürger Zugang zu einer sicheren, interoperablen digitalen Identität erhalten.",
        status: "past",
      },
      {
        date: "November 2023",
        title: "Politische Einigung erzielt",
        description:
          "Europäisches Parlament und Rat erzielten nach ausführlichen Trilog-Verhandlungen eine politische Einigung über die überarbeitete eIDAS-Verordnung und bereiteten damit die formelle Annahme vor.",
        status: "past",
      },
      {
        date: "März 2024",
        title: "Zustimmung des Europäischen Parlaments",
        description:
          "Das Europäische Parlament nahm die Verordnung mit klarer Mehrheit formell an, ein deutliches Zeichen institutioneller Unterstützung für den Rahmen zur digitalen Identität.",
        status: "past",
      },
      {
        date: "April 2024",
        title: "Annahme durch den Rat der EU",
        description:
          "Der Rat nahm die Verordnung formell an, schloss damit das Gesetzgebungsverfahren ab und machte den Weg für die Veröffentlichung im Amtsblatt der Europäischen Union frei.",
        status: "past",
      },
      {
        date: "Mai 2024",
        title: "Inkrafttreten",
        description:
          "eIDAS 2.0 trat am 20. Mai 2024 offiziell in Kraft. Damit begann die Frist für die Umsetzung in den Mitgliedstaaten und für die Erarbeitung der Durchführungsrechtsakte.",
        status: "past",
      },
      {
        date: "November 2024",
        title: "Aktualisierungen des Architecture Reference Framework",
        description:
          "Aktualisierte ARF-Spezifikationen für die Umsetzung der Wallet wurden veröffentlicht, mit technischen Vorgaben zu Interoperabilität, Sicherheit und Datenmodellen für die Entwicklung der EUDIW.",
        status: "past",
      },
      {
        date: "Dezember 2024",
        title: "Erste Durchführungsrechtsakte treten in Kraft",
        description:
          "Die Durchführungsverordnungen (EU) 2024/2977 bis 2024/2982, angenommen am 28. November 2024, wurden am 4. Dezember veröffentlicht und traten am 24. Dezember 2024 in Kraft. Sie regeln Personenidentifizierungsdaten, Formate für Attributsbescheinigungen, die Zertifizierung der Wallet und die Registrierung vertrauender Beteiligter. Mit ihnen beginnt außerdem die 24-Monats-Frist aus Artikel 5a Absatz 1, innerhalb der die Mitgliedstaaten eine Wallet bereitstellen müssen.",
        status: "past",
      },
      {
        date: "Q4 2025",
        title: "Ergebnisse der Large-Scale Pilots",
        description:
          "Die Large-Scale Pilots (LSPs) legten ihre abschließenden Ergebnisse und Empfehlungen vor, gestützt auf Tests unter realen Bedingungen im Gesundheitswesen, im Finanzsektor, im Reiseverkehr und in der Verwaltung.",
        status: "past",
      },
      {
        date: "24. Dezember 2026",
        title: "Verfügbarkeit der Wallet in den Mitgliedstaaten",
        description:
          "Die harte Frist. Jeder Mitgliedstaat muss seinen Bürgern und Einwohnern mindestens eine europäische Wallet für die digitale Identität anbieten, gestützt auf ein notifiziertes eID-System und grenzüberschreitend interoperabel. 24 Monate nach Inkrafttreten der ersten Durchführungsrechtsakte, nach Artikel 5a Absatz 1 der Verordnung (EU) 2024/1183.",
        status: "current",
      },
      {
        date: "2026–2027",
        title: "Annahmepflicht für vertrauende Beteiligte",
        description:
          "Private Akteure in Schlüsselbranchen, darunter Banken, Telekommunikation, Gesundheitswesen und Verkehr, müssen die EUDIW zur Identitätsprüfung und für die Weitergabe von Attributen akzeptieren.",
        status: "future",
      },
      {
        date: "2027+",
        title: "Vollständige Reife des Ökosystems",
        description:
          "Ein vollständig betriebsfähiges Ökosystem von Vertrauensdiensten mit qualifizierten elektronischen Attributsbescheinigungen, grenzüberschreitender Interoperabilität und breiter Nutzung in der Privatwirtschaft.",
        status: "future",
      },
    ],
  },
  whatThisMeans: {
    heading: "Was das für Ihre Organisation bedeutet",
    cards: [
      {
        title: "Finanzdienstleistungen",
        desc: "KYC- und AML-Prozesse müssen die Identitätsprüfung über die Wallet nach Ablauf der Wallet-Frist einbinden.",
        href: "/industries/financial-services",
      },
      {
        title: "Öffentlicher Sektor",
        desc: "Die Mitgliedstaaten müssen Wallets bis zum 24. Dezember 2026 anbieten und für öffentliche Dienste akzeptieren.",
        href: "/industries/government-public-sector",
      },
      {
        title: "Regulierte Branchen",
        desc: "Für Telekommunikation, Gesundheitswesen, Reise und Energie gilt die Annahmepflicht zwischen 2026 und 2027.",
        href: "/industries",
      },
    ],
  },
  whoThisAffects: {
    sectors: "Branchen",
    roles: "Rollen",
    terms: "Begriffe",
    allTerms: "alle 36",
  },
  related: {
    heading: "Weiterführende Inhalte",
    items: [
      {
        href: "/guide/eidas-2-compliance",
        label: "Leitfaden zur eIDAS-2.0-Compliance",
        desc: "Ein schrittweiser Fahrplan für jede regulatorische Anforderung.",
      },
      {
        href: "/assessment",
        label: "Bereitschaftsanalyse",
        desc: "Finden Sie heraus, wo Ihre Organisation heute steht.",
      },
      {
        href: "/eidas-2-compliance-checklist",
        label: "Compliance-Checkliste",
        desc: "Eine praktische Checkliste, um den Fortschritt zu verfolgen.",
      },
      {
        href: "/glossary/eudiw",
        label: "EUDIW (European Digital Identity Wallet)",
        desc: "Was die Wallet ist und wie sie funktioniert.",
      },
      {
        href: "/glossary/arf",
        label: "ARF (Architecture Reference Framework)",
        desc: "Der technische Bauplan hinter dem Wallet-Ökosystem.",
      },
    ],
  },
  cta: {
    headline: "Verpassen Sie keine Frist. Prüfen Sie jetzt Ihre Bereitschaft",
    description:
      "Mit der kostenlosen eIDAS-2.0-Bereitschaftsanalyse erkennen Sie Ihre Compliance-Lücken und erhalten einen passenden Aktionsplan, bevor die entscheidenden Fristen ablaufen.",
    button: "Bereitschaft prüfen",
  },
  alerts: {
    headline: "Erfahren Sie, wenn sich ein Datum verschiebt",
    description: "Diese Fristen wurden schon einmal verschoben. Eine E-Mail, wenn sich eine davon ändert, nichts weiter.",
    button: "Benachrichtigen",
  },
};

const it: TimelineContent = {
  meta: {
    title: "Calendario eIDAS 2.0: scadenze e il termine per il wallet",
    description:
      "Tutte le date del regolamento eIDAS 2.0, dalla proposta del 2021 al termine entro cui gli Stati membri devono offrire un wallet, e l'obbligo di accettazione per i settori regolamentati. Con un conto alla rovescia aggiornato.",
  },
  breadcrumb: "Calendario eIDAS 2.0",
  hero: {
    h1: "Calendario eIDAS 2.0 e scadenze principali",
    standfirst:
      "Tutte le tappe del quadro europeo per l'identità digitale, dalla proposta originaria della Commissione all'introduzione obbligatoria del wallet in tutti gli Stati membri dell'UE.",
  },
  countdown: {
    label: "Termine per la disponibilità del wallet",
    daysLeft: "Mancano {days} giorni",
    today: "Il termine scade oggi",
    dateLabel: "24 dicembre 2026",
    explanation:
      "Entro questa data ogni Stato membro deve offrire ai propri cittadini e residenti almeno un portafoglio europeo di identità digitale, ai sensi dell'articolo 5 bis, paragrafo 1, del regolamento (UE) 2024/1183.",
    cta: "Verifica la tua preparazione",
  },
  nav: {
    overview: "Panoramica",
    timeline: "Calendario di attuazione",
    whatThisMeans: "Cosa comporta",
    related: "Risorse correlate",
  },
  overview: {
    heading: "Panoramica",
    paragraphs: [
      "Il regolamento eIDAS 2.0 è la revisione più ambiziosa della normativa europea sull'identità digitale dall'adozione del quadro eIDAS originario nel 2014. Conoscere il calendario normativo è essenziale per qualsiasi organizzazione che operi nell'UE, perché a ogni tappa corrispondono obblighi e opportunità precisi.",
      "Il percorso legislativo è iniziato nel giugno 2021, quando la Commissione europea ha presentato la sua proposta per un portafoglio europeo di identità digitale. Dopo oltre due anni di negoziati tra Parlamento e Consiglio, il regolamento rivisto è stato adottato formalmente all'inizio del 2024 ed è entrato in vigore nel maggio dello stesso anno. Da allora l'attenzione si è spostata sul piano tecnico: gli atti di esecuzione, l'Architecture Reference Framework ([ARF](/glossary/arf)) e i Large-Scale Pilots che definiranno il funzionamento concreto dell'[EUDIW](/glossary/eudiw).",
      "Le scadenze che seguono non sono date politiche astratte: hanno conseguenze dirette sulla conformità. Gli Stati membri devono offrire un wallet ai cittadini entro il 24 dicembre 2026, e i settori regolamentati dovranno accettarlo successivamente. Chi inizia a prepararsi adesso ottiene un vantaggio competitivo significativo. Per un percorso passo per passo, consulta la nostra [guida alla conformità eIDAS 2.0](/guide/eidas-2-compliance).",
    ],
  },
  milestones: {
    heading: "Calendario completo di attuazione di eIDAS 2.0",
    items: [
      {
        date: "Giugno 2021",
        title: "Proposta della Commissione europea",
        description:
          "La Commissione europea ha proposto la revisione di eIDAS, introducendo il quadro del portafoglio europeo di identità digitale per dare a ogni cittadino dell'UE accesso a un'identità digitale sicura e interoperabile.",
        status: "past",
      },
      {
        date: "Novembre 2023",
        title: "Accordo politico raggiunto",
        description:
          "Parlamento europeo e Consiglio hanno raggiunto un accordo politico sul regolamento eIDAS rivisto dopo lunghi negoziati in trilogo, aprendo la strada all'adozione formale.",
        status: "past",
      },
      {
        date: "Marzo 2024",
        title: "Approvazione del Parlamento europeo",
        description:
          "Il regolamento è stato adottato formalmente dal Parlamento europeo con ampia maggioranza, segno di un solido sostegno istituzionale al quadro sull'identità digitale.",
        status: "past",
      },
      {
        date: "Aprile 2024",
        title: "Adozione da parte del Consiglio dell'UE",
        description:
          "Il Consiglio ha adottato formalmente il regolamento, completando il processo legislativo e aprendo la via alla pubblicazione nella Gazzetta ufficiale dell'Unione europea.",
        status: "past",
      },
      {
        date: "Maggio 2024",
        title: "Entrata in vigore",
        description:
          "eIDAS 2.0 è entrato ufficialmente in vigore il 20 maggio 2024, avviando i termini per il recepimento negli Stati membri e per la predisposizione degli atti di esecuzione.",
        status: "past",
      },
      {
        date: "Novembre 2024",
        title: "Aggiornamenti dell'Architecture Reference Framework",
        description:
          "Sono state pubblicate specifiche ARF aggiornate per l'attuazione del wallet, con indicazioni tecniche su interoperabilità, sicurezza e modelli di dati per lo sviluppo dell'EUDIW.",
        status: "past",
      },
      {
        date: "Dicembre 2024",
        title: "Entrano in vigore i primi atti di esecuzione",
        description:
          "I regolamenti di esecuzione (UE) dal 2024/2977 al 2024/2982, adottati il 28 novembre 2024, sono stati pubblicati il 4 dicembre ed entrati in vigore il 24 dicembre 2024. Definiscono i dati di identificazione personale, i formati delle attestazioni, la certificazione del wallet e la registrazione delle parti facenti affidamento. Da essi decorre anche il termine di 24 mesi previsto dall'articolo 5 bis, paragrafo 1, entro cui gli Stati membri devono fornire un wallet.",
        status: "past",
      },
      {
        date: "Q4 2025",
        title: "Risultati dei Large-Scale Pilots",
        description:
          "I Large-Scale Pilots (LSP) hanno presentato risultati e raccomandazioni finali, basati su test in condizioni reali in sanità, finanza, viaggi e pubblica amministrazione.",
        status: "past",
      },
      {
        date: "24 dicembre 2026",
        title: "Disponibilità del wallet negli Stati membri",
        description:
          "Il termine inderogabile. Ogni Stato membro deve offrire ai propri cittadini e residenti almeno un portafoglio europeo di identità digitale, basato su un regime di identificazione elettronica notificato e interoperabile a livello transfrontaliero. Ventiquattro mesi dall'entrata in vigore dei primi atti di esecuzione, ai sensi dell'articolo 5 bis, paragrafo 1, del regolamento (UE) 2024/1183.",
        status: "current",
      },
      {
        date: "2026–2027",
        title: "Obbligo di accettazione per le parti facenti affidamento",
        description:
          "I soggetti privati dei settori chiave, tra cui banche, telecomunicazioni, sanità e trasporti, devono accettare l'EUDIW per la verifica dell'identità e la condivisione degli attributi.",
        status: "future",
      },
      {
        date: "2027+",
        title: "Piena maturità dell'ecosistema",
        description:
          "Ecosistema dei servizi fiduciari pienamente operativo, con attestati elettronici qualificati di attributi, interoperabilità transfrontaliera e adozione diffusa nel settore privato.",
        status: "future",
      },
    ],
  },
  whatThisMeans: {
    heading: "Cosa comporta per la tua organizzazione",
    cards: [
      {
        title: "Servizi finanziari",
        desc: "I processi KYC e AML dovranno integrare la verifica dell'identità tramite wallet dopo il termine per il wallet.",
        href: "/industries/financial-services",
      },
      {
        title: "Settore pubblico",
        desc: "Gli Stati membri devono offrire i wallet e accettarli per i servizi pubblici entro il 24 dicembre 2026.",
        href: "/industries/government-public-sector",
      },
      {
        title: "Settori regolamentati",
        desc: "Telecomunicazioni, sanità, viaggi ed energia sono soggetti all'obbligo di accettazione tra il 2026 e il 2027.",
        href: "/industries",
      },
    ],
  },
  whoThisAffects: {
    sectors: "Settori",
    roles: "Ruoli",
    terms: "Termini",
    allTerms: "tutti e 36",
  },
  related: {
    heading: "Risorse correlate",
    items: [
      {
        href: "/guide/eidas-2-compliance",
        label: "Guida alla conformità eIDAS 2.0",
        desc: "Un percorso passo per passo per ogni requisito normativo.",
      },
      {
        href: "/assessment",
        label: "Analisi di preparazione",
        desc: "Scopri dove si trova oggi la tua organizzazione.",
      },
      {
        href: "/eidas-2-compliance-checklist",
        label: "Checklist di conformità",
        desc: "Una checklist operativa per seguire i progressi.",
      },
      {
        href: "/glossary/eudiw",
        label: "EUDIW (European Digital Identity Wallet)",
        desc: "Che cos'è il wallet e come funziona.",
      },
      {
        href: "/glossary/arf",
        label: "ARF (Architecture Reference Framework)",
        desc: "Il progetto tecnico alla base dell'ecosistema del wallet.",
      },
    ],
  },
  cta: {
    headline: "Non perdere le scadenze decisive. Verifica ora la tua preparazione",
    description:
      "Con l'analisi gratuita di preparazione a eIDAS 2.0 individui le tue lacune di conformità e ottieni un piano d'azione su misura prima che scadano i termini principali.",
    button: "Verifica la tua preparazione",
  },
  alerts: {
    headline: "Scopri quando una data si sposta",
    description: "Queste scadenze sono già slittate in passato. Una email quando una di loro cambia, nient'altro.",
    button: "Avvisami",
  },
};

const es: TimelineContent = {
  meta: {
    title: "Calendario eIDAS 2.0: fechas clave y el plazo de la cartera",
    description:
      "Todas las fechas del reglamento eIDAS 2.0, desde la propuesta de 2021 hasta el plazo para que los Estados miembros ofrezcan una cartera, y la aceptación obligatoria de los sectores regulados. Con una cuenta atrás en vivo.",
  },
  breadcrumb: "Calendario eIDAS 2.0",
  hero: {
    h1: "Calendario eIDAS 2.0 y plazos clave",
    standfirst:
      "Todos los hitos del marco europeo de identidad digital, desde la propuesta original de la Comisión hasta el despliegue obligatorio de la cartera en todos los Estados miembros de la UE.",
  },
  countdown: {
    label: "Plazo de disponibilidad de la cartera",
    daysLeft: "Quedan {days} días",
    today: "El plazo vence hoy",
    dateLabel: "24 de diciembre de 2026",
    explanation:
      "Antes de esa fecha, cada Estado miembro debe ofrecer a sus ciudadanos y residentes al menos una cartera europea de identidad digital, conforme al artículo 5 bis, apartado 1, del Reglamento (UE) 2024/1183.",
    cta: "Evalúa tu preparación",
  },
  nav: {
    overview: "Resumen",
    timeline: "Calendario de aplicación",
    whatThisMeans: "Qué implica",
    related: "Recursos relacionados",
  },
  overview: {
    heading: "Resumen",
    paragraphs: [
      "El reglamento eIDAS 2.0 es la revisión más ambiciosa de la legislación europea sobre identidad digital desde que se adoptó el marco eIDAS original en 2014. Conocer el calendario normativo es imprescindible para cualquier organización que opere en la UE, porque cada hito activa obligaciones y oportunidades concretas.",
      "El recorrido legislativo empezó en junio de 2021, cuando la Comisión Europea presentó su propuesta de cartera europea de identidad digital. Tras más de dos años de negociación entre el Parlamento y el Consejo, el reglamento revisado se adoptó formalmente a comienzos de 2024 y entró en vigor en mayo de ese año. Desde entonces el foco se ha desplazado al plano técnico: los actos de ejecución, el Architecture Reference Framework ([ARF](/glossary/arf)) y los Large-Scale Pilots que determinarán cómo funciona la [EUDIW](/glossary/eudiw) en la práctica.",
      "Los plazos que vienen no son fechas políticas abstractas: tienen consecuencias directas de cumplimiento. Los Estados miembros deben ofrecer una cartera a sus ciudadanos antes del 24 de diciembre de 2026, y los sectores regulados tendrán que aceptarla después. Quien empiece a prepararse ahora obtendrá una ventaja competitiva considerable. Para una hoja de ruta paso a paso, consulta nuestra [guía de cumplimiento de eIDAS 2.0](/guide/eidas-2-compliance).",
    ],
  },
  milestones: {
    heading: "Calendario completo de aplicación de eIDAS 2.0",
    items: [
      {
        date: "Junio de 2021",
        title: "Propuesta de la Comisión Europea",
        description:
          "La Comisión Europea propuso la revisión de eIDAS e introdujo el marco de la cartera europea de identidad digital, para que todos los ciudadanos de la UE tengan acceso a una identidad digital segura e interoperable.",
        status: "past",
      },
      {
        date: "Noviembre de 2023",
        title: "Acuerdo político alcanzado",
        description:
          "El Parlamento Europeo y el Consejo alcanzaron un acuerdo político sobre el reglamento eIDAS revisado tras largas negociaciones en trílogo, allanando el camino a su adopción formal.",
        status: "past",
      },
      {
        date: "Marzo de 2024",
        title: "Aprobación del Parlamento Europeo",
        description:
          "El Parlamento Europeo adoptó formalmente el reglamento por amplia mayoría, una señal clara de respaldo institucional al marco de identidad digital.",
        status: "past",
      },
      {
        date: "Abril de 2024",
        title: "Adopción por el Consejo de la UE",
        description:
          "El Consejo adoptó formalmente el reglamento, completando el proceso legislativo y abriendo la puerta a su publicación en el Diario Oficial de la Unión Europea.",
        status: "past",
      },
      {
        date: "Mayo de 2024",
        title: "Entrada en vigor",
        description:
          "eIDAS 2.0 entró oficialmente en vigor el 20 de mayo de 2024, con lo que empezaron a contar los plazos de transposición en los Estados miembros y de elaboración de los actos de ejecución.",
        status: "past",
      },
      {
        date: "Noviembre de 2024",
        title: "Actualizaciones del Architecture Reference Framework",
        description:
          "Se publicaron especificaciones ARF actualizadas para la implementación de la cartera, con orientación técnica sobre interoperabilidad, seguridad y modelos de datos para el desarrollo de la EUDIW.",
        status: "past",
      },
      {
        date: "Diciembre de 2024",
        title: "Entran en vigor los primeros actos de ejecución",
        description:
          "Los Reglamentos de Ejecución (UE) 2024/2977 a 2024/2982, adoptados el 28 de noviembre de 2024, se publicaron el 4 de diciembre y entraron en vigor el 24 de diciembre de 2024. Definen los datos de identificación de la persona, los formatos de las declaraciones de atributos, la certificación de la cartera y el registro de las partes usuarias. Además, con ellos empieza a contar el plazo de 24 meses del artículo 5 bis, apartado 1, para que los Estados miembros provean una cartera.",
        status: "past",
      },
      {
        date: "Q4 2025",
        title: "Resultados de los Large-Scale Pilots",
        description:
          "Los Large-Scale Pilots (LSP) presentaron sus resultados y recomendaciones finales, a partir de pruebas en condiciones reales en sanidad, finanzas, viajes y administración pública.",
        status: "past",
      },
      {
        date: "24 de diciembre de 2026",
        title: "Disponibilidad de la cartera en los Estados miembros",
        description:
          "El plazo firme. Cada Estado miembro debe ofrecer a sus ciudadanos y residentes al menos una cartera europea de identidad digital, respaldada por un sistema de identificación electrónica notificado e interoperable a nivel transfronterizo. Veinticuatro meses desde la entrada en vigor de los primeros actos de ejecución, conforme al artículo 5 bis, apartado 1, del Reglamento (UE) 2024/1183.",
        status: "current",
      },
      {
        date: "2026–2027",
        title: "Aceptación obligatoria por las partes usuarias",
        description:
          "Las entidades privadas de sectores clave, entre ellos banca, telecomunicaciones, sanidad y transporte, deberán aceptar la EUDIW para verificar la identidad y compartir atributos.",
        status: "future",
      },
      {
        date: "2027+",
        title: "Madurez plena del ecosistema",
        description:
          "Ecosistema de servicios de confianza plenamente operativo, con declaraciones electrónicas cualificadas de atributos, interoperabilidad transfronteriza y adopción amplia en el sector privado.",
        status: "future",
      },
    ],
  },
  whatThisMeans: {
    heading: "Qué implica para tu organización",
    cards: [
      {
        title: "Servicios financieros",
        desc: "Los procesos de KYC y AML deberán integrar la verificación de identidad con la cartera después del plazo de la cartera.",
        href: "/industries/financial-services",
      },
      {
        title: "Sector público",
        desc: "Los Estados miembros deben ofrecer carteras y aceptarlas en los servicios públicos antes del 24 de diciembre de 2026.",
        href: "/industries/government-public-sector",
      },
      {
        title: "Sectores regulados",
        desc: "Telecomunicaciones, sanidad, viajes y energía tienen aceptación obligatoria entre 2026 y 2027.",
        href: "/industries",
      },
    ],
  },
  whoThisAffects: {
    sectors: "Sectores",
    roles: "Perfiles",
    terms: "Términos",
    allTerms: "los 36",
  },
  related: {
    heading: "Recursos relacionados",
    items: [
      {
        href: "/guide/eidas-2-compliance",
        label: "Guía de cumplimiento de eIDAS 2.0",
        desc: "Una hoja de ruta paso a paso para cada requisito normativo.",
      },
      {
        href: "/assessment",
        label: "Evaluación de preparación",
        desc: "Descubre dónde está hoy tu organización.",
      },
      {
        href: "/eidas-2-compliance-checklist",
        label: "Lista de comprobación",
        desc: "Una lista práctica para seguir tu progreso.",
      },
      {
        href: "/glossary/eudiw",
        label: "EUDIW (European Digital Identity Wallet)",
        desc: "Qué es la cartera y cómo funciona.",
      },
      {
        href: "/glossary/arf",
        label: "ARF (Architecture Reference Framework)",
        desc: "El plano técnico detrás del ecosistema de la cartera.",
      },
    ],
  },
  cta: {
    headline: "No dejes pasar los plazos críticos. Evalúa tu preparación ahora",
    description:
      "Con la evaluación gratuita de preparación para eIDAS 2.0 identificas tus brechas de cumplimiento y obtienes un plan de acción a medida antes de que venzan los plazos clave.",
    button: "Evalúa tu preparación",
  },
  alerts: {
    headline: "Te avisamos si una fecha se mueve",
    description: "Estos plazos ya se han corrido antes. Un correo cuando uno cambie, nada más.",
    button: "Avísame",
  },
};

export const TIMELINE_CONTENT: Record<Locale, TimelineContent> = { en, de, it, es };
