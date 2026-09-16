import type { Locale } from "./config";

/**
 * The compliance guide, per language.
 *
 * 3,500 words of prose that used to live as 1,300 lines of JSX with the
 * sentences and the markup welded together. Represented here as blocks so the
 * same component can render four languages, and so a translator can change a
 * sentence without touching a className.
 *
 * Inline markup in any `text` is what src/lib/i18n/prose.tsx understands:
 * `[label](/path)`, `[label](https://...)` and `**bold**`. Nothing else.
 *
 * Note on the deadline row of the milestone table: the English original said
 * only "2026". The date is 24 December 2026, fixed by Article 5a(1) and the
 * entry into force of the first implementing acts, and there was no reason to
 * carry the vagueness into three more languages.
 */
export type GuideBlock =
  | { t: "p"; text: string }
  | { t: "h3"; text: string }
  | { t: "callout"; title: string; text: string }
  | { t: "table"; head: string[]; rows: string[][] }
  | { t: "list"; items: string[] }
  | { t: "steps"; items: string[] }
  | { t: "phases"; items: { title: string; duration: string; text: string }[] };

export interface GuideSection {
  id: string;
  /** Short label for the sidebar, without the section number. */
  label: string;
  heading: string;
  blocks: GuideBlock[];
}

export interface GuideContent {
  meta: { title: string; description: string };
  breadcrumb: string;
  hero: {
    eyebrow: string;
    h1: string;
    published: string;
    updated: string;
    readTime: string;
    standfirst: string;
  };
  sections: GuideSection[];
  related: { heading: string; items: { href: string; label: string; desc: string }[] };
  cta: { headline: string; description: string; button: string };
}

const en: GuideContent = {
  meta: {
    title: "eIDAS 2.0 Compliance: Requirements, Deadlines and Checklist",
    description:
      "What eIDAS 2.0 requires of relying parties, the date each obligation lands on, and a step-by-step roadmap for integrating the EU Digital Identity Wallet.",
  },
  breadcrumb: "eIDAS 2.0 Compliance Guide",
  hero: {
    eyebrow: "Compliance Guide",
    h1: "The Complete Guide to eIDAS 2.0 Compliance",
    published: "Published June 15, 2025",
    updated: "Updated December 10, 2025",
    readTime: "15 min read",
    standfirst:
      "The [eIDAS 2.0 regulation](/glossary/eidas-2) represents the most significant overhaul of Europe's digital identity framework since its inception. Whether you are a financial institution, healthcare provider, public administration, or technology company operating in the EU, this guide will walk you through every requirement, deadline, and implementation step you need to know.",
  },
  sections: [
    {
      id: "what-is-eidas-2",
      label: "What is eIDAS 2.0?",
      heading: "1. What is eIDAS 2.0?",
      blocks: [
        {
          t: "p",
          text: "eIDAS 2.0 is the informal name for the revised Regulation on electronic identification and trust services for electronic transactions in the internal market. It amends the original [**Regulation (EU) No 910/2014**](https://eur-lex.europa.eu/eli/reg/2014/910/oj) (commonly known as eIDAS 1.0), which established the first EU-wide legal framework for electronic identification, authentication, and trust services such as [qualified electronic signatures](/glossary/qes), seals, timestamps, and registered delivery services.",
        },
        { t: "h3", text: "Why the Update Was Needed" },
        {
          t: "p",
          text: "Since eIDAS 1.0 entered into force in 2016, the digital landscape changed dramatically. COVID-19 accelerated the demand for remote identity verification. Cross-border recognition of national eID schemes remained fragmented: only 14 of 27 Member States had notified an eID scheme by 2022, and adoption among citizens was uneven. At the same time, the private sector was largely excluded from the eID ecosystem, and new use cases such as attribute attestation, verifiable credentials, and mobile-first identity wallets were not covered by the original text.",
        },
        {
          t: "p",
          text: "The European Commission published its legislative proposal in June 2021, and after intensive negotiations between the European Parliament and the Council, the amending regulation was formally adopted in early 2024. The revised framework introduces a mandatory [European Digital Identity Wallet (EUDIW)](/glossary/eudiw) that every Member State must offer to its citizens and residents, along with a substantially expanded set of trust services and governance requirements.",
        },
        {
          t: "callout",
          title: "Key Takeaway",
          text: "eIDAS 2.0 transforms digital identity from a voluntary, government-centric system into a mandatory, wallet-based ecosystem that spans both public and private sectors across all 27 EU Member States.",
        },
      ],
    },
    {
      id: "key-changes",
      label: "Key Changes from eIDAS 1.0",
      heading: "2. Key Changes from eIDAS 1.0",
      blocks: [
        {
          t: "p",
          text: "While eIDAS 1.0 laid the groundwork, eIDAS 2.0 introduces fundamental shifts in scope, technology, and obligations. The table below summarizes the most impactful changes.",
        },
        {
          t: "table",
          head: ["Area", "eIDAS 1.0", "eIDAS 2.0"],
          rows: [
            ["Digital Identity Wallet", "Not addressed", "Mandatory EUDIW in every Member State"],
            ["eID Coverage", "Voluntary notification by Member States", "Mandatory provision to all citizens and residents"],
            ["Private Sector", "Limited obligation to accept eID", "Mandatory acceptance by relying parties in key sectors"],
            ["Attribute Attestations", "Not covered", "Electronic Attestation of Attributes (EAA) and Qualified EAA introduced"],
            ["Trust Services", "Signatures, seals, timestamps, registered delivery", "Adds e-archiving, e-ledgers, and management of remote signing devices"],
            ["Governance", "National supervisory bodies", "Strengthened governance, cooperation group, conformity assessments, peer reviews"],
            ["Interoperability", "Interoperability framework (voluntary)", "Mandatory technical standards (ARF), toolbox, reference implementation"],
          ],
        },
        { t: "h3", text: "New Trust Services" },
        {
          t: "p",
          text: "eIDAS 2.0 expands the catalogue of qualified trust services to include:",
        },
        {
          t: "list",
          items: [
            "**Electronic archiving services** long-term preservation of electronic documents and data with legal certainty.",
            "**Electronic ledger services** qualified ledgers (potentially blockchain-based) for recording data with integrity guarantees.",
            "**Management of remote electronic signature and seal creation devices** a new qualified service governing the management of cryptographic keys held remotely by [Qualified Trust Service Providers (QTSPs)](/glossary/qtsp).",
          ],
        },
        { t: "h3", text: "Universal Acceptance" },
        {
          t: "p",
          text: "One of the most consequential changes is the obligation for certain private-sector relying parties to accept the EUDIW. Under eIDAS 1.0, cross-border acceptance was largely limited to public services. eIDAS 2.0 extends mandatory acceptance to sectors such as banking (under Anti-Money Laundering requirements), transport, healthcare, telecommunications, energy, and any service provider that is legally required to perform strong customer authentication or identity verification. This means that if your platform verifies user identity today, you will very likely need to support the wallet tomorrow.",
        },
      ],
    },
    {
      id: "eudiw",
      label: "The European Digital Identity Wallet",
      heading: "3. The European Digital Identity Wallet (EUDIW)",
      blocks: [
        {
          t: "p",
          text: "The [EUDIW](/glossary/eudiw) is the centrepiece of eIDAS 2.0. It is a mobile application (or combination of secure element and app) issued under the authority of a Member State that allows citizens and residents to:",
        },
        {
          t: "list",
          items: [
            "Store and present **Person Identification Data (PID)** a minimum dataset that identifies the holder (name, date of birth, unique identifier) and is authenticated at a high level of assurance.",
            "Store and selectively disclose **Electronic Attestations of Attributes (EAAs)** verifiable claims about the holder such as a professional qualification, a driving licence, a university diploma, or a proof of address.",
            "Create [qualified electronic signatures (QES)](/glossary/qes) for free for non-professional use, making legally binding digital signing accessible to all EU citizens.",
            "Authenticate to online and offline services, both in the public and private sectors, using a single trusted app.",
          ],
        },
        { t: "h3", text: "How the Wallet Works" },
        {
          t: "p",
          text: "The wallet relies on a decentralised architecture. There is no single EU database of identities. Instead, each Member State issues wallets that conform to the **Architecture and Reference Framework (ARF)** developed by the EU Toolbox Expert Group. The ARF defines the protocols, data models, and security requirements that ensure all wallets are interoperable across borders. At a technical level, the wallet combines a secure cryptographic device (either hardware-backed on the smartphone or via a remote HSM) with a user-facing application and backend infrastructure provided by the Member State or a delegated entity.",
        },
        {
          t: "p",
          text: "Relying parties (the organizations requesting identity data) must register and authenticate themselves before they can request attributes from the wallet. This protects users from unauthorized data harvesting and ensures that only the minimum necessary data is shared. The principle of **selective disclosure** means a user can, for instance, prove they are over 18 without revealing their exact date of birth.",
        },
        {
          t: "callout",
          title: "Preparing for the EUDIW?",
          text: "Read our dedicated [EUDIW Preparation Guide](/guide/eudiw-preparation) for a deep dive into integration patterns, security requirements, and technical architecture considerations for relying parties.",
        },
      ],
    },
    {
      id: "who-is-affected",
      label: "Who is Affected",
      heading: "4. Who is Affected",
      blocks: [
        {
          t: "p",
          text: "eIDAS 2.0 has a significantly broader scope than its predecessor. The regulation affects any organization that provides services requiring identity verification within the EU, as well as trust service providers, Member State authorities, and technology vendors. Below is a sector-by-sector breakdown of the key impacts.",
        },
        { t: "h3", text: "Financial Services" },
        {
          t: "p",
          text: "Banks, payment institutions, investment firms, and insurance companies are among the most directly impacted. They will be required to accept the EUDIW for customer due diligence under Anti-Money Laundering (AML) regulations, strong customer authentication under PSD2/PSD3, and account opening procedures. This means integrating wallet-based identity verification into onboarding flows, potentially replacing or supplementing existing video-ident, photo-ident, or in-branch verification. Financial institutions should also expect that QES created via the wallet will become a standard mechanism for signing contracts and mandates.",
        },
        { t: "h3", text: "Healthcare" },
        {
          t: "p",
          text: "Healthcare providers, insurers, and digital health platforms will need to accept wallet-based identification for patient verification, electronic prescriptions, and cross-border access to medical records. Electronic Attestations of Attributes will enable patients to carry verified health insurance information and professional qualifications for healthcare workers across borders. The European Health Data Space (EHDS) regulation is expected to interoperate closely with eIDAS 2.0 wallet infrastructure.",
        },
        { t: "h3", text: "Public Sector" },
        {
          t: "p",
          text: "Government agencies and public administrations at all levels (EU, national, regional, municipal) are required to accept the EUDIW for accessing digital public services. This covers everything from tax filing and social benefits applications to business registration and public procurement. Public sector bodies also serve as issuers of many critical attestations such as driving licences, social security records, and residence permits.",
        },
        { t: "h3", text: "Telecommunications" },
        {
          t: "p",
          text: "Telecom operators are subject to identity verification obligations under EU and national laws (e.g., SIM registration requirements). The EUDIW will become an accepted and potentially preferred means of identity verification for SIM activation, contract signing, and age verification for content services.",
        },
        { t: "h3", text: "E-Commerce and Digital Platforms" },
        {
          t: "p",
          text: "Very large online platforms (as defined by the Digital Services Act) are obligated to accept the EUDIW for user authentication when required by law. E-commerce platforms that perform age verification, KYC for marketplace sellers, or identity checks for regulated goods will need to integrate wallet verification flows. The regulation also impacts platforms that need to verify business identities under the Digital Markets Act.",
        },
        { t: "h3", text: "Travel and Transport" },
        {
          t: "p",
          text: "Airlines, railways, and other transport operators will need to support wallet-based identity verification for check-in, boarding, and cross-border travel within the Schengen area. Car rental services, hotel check-ins, and mobility-as-a-service platforms will similarly need to accept EUDIW-based driving licence attestations and identity verification.",
        },
        {
          t: "callout",
          title: "Not sure if you are affected?",
          text: "Take our free [eIDAS 2.0 readiness assessment](/assessment) to get a personalized analysis of how the regulation applies to your organization.",
        },
      ],
    },
    {
      id: "compliance-requirements",
      label: "Compliance Requirements",
      heading: "5. Compliance Requirements",
      blocks: [
        {
          t: "p",
          text: "Achieving compliance with eIDAS 2.0 involves meeting requirements across three dimensions: technical, organizational, and legal. The precise obligations depend on whether your organization is a [QTSP](/glossary/qtsp), a relying party, an EAA issuer, or a combination of these roles.",
        },
        { t: "h3", text: "Technical Requirements" },
        {
          t: "list",
          items: [
            "**Protocol support:** Implement the communication protocols defined in the ARF for wallet-to-relying-party interactions, including OpenID for Verifiable Presentations (OID4VP) and ISO/IEC 18013-5 for proximity flows.",
            "**Credential formats:** Support the standardised credential formats for PIDs and EAAs, including SD-JWT based verifiable credentials and mdoc (ISO 18013-5) formats.",
            "**Trust registry integration:** Connect to the EU Trust Lists and the new Access Certificate Authority infrastructure to validate wallet authenticity and relying party registrations.",
            "**Security standards:** Meet the certification requirements under the relevant Common Criteria protection profiles or equivalent security evaluations defined by implementing acts.",
            "**QES integration:** If you issue or rely on electronic signatures, ensure your infrastructure supports the wallet-based QES creation process, including remote signing protocols.",
          ],
        },
        { t: "h3", text: "Organizational Requirements" },
        {
          t: "list",
          items: [
            "**Policies and procedures:** Establish documented policies for identity verification, data handling, incident management, and business continuity that align with eIDAS 2.0 requirements.",
            "**Staff training:** Train personnel on wallet-based identity verification flows, data protection obligations under eIDAS 2.0, and incident reporting procedures.",
            "**Vendor management:** If you rely on third parties for identity services or trust infrastructure, ensure contractual and operational alignment with the new requirements.",
          ],
        },
        { t: "h3", text: "Legal Requirements" },
        {
          t: "list",
          items: [
            "**Registration:** Relying parties that access wallet data must register with the appropriate authority and declare which attributes they request and the legal basis for each.",
            "**Data protection:** Align wallet data processing with GDPR, including data minimisation, purpose limitation, and privacy impact assessments. eIDAS 2.0 introduces specific anti-tracking provisions (e.g., unique identifiers must not allow cross-service correlation by default).",
            "**Conformity assessment:** QTSPs and wallet providers must undergo conformity assessments by accredited bodies, with regular audits and peer review processes.",
            "**Liability framework:** Understand the updated liability provisions, which place clear obligations on wallet providers, QTSPs, and EAA issuers for damages arising from failures in their services.",
          ],
        },
        {
          t: "p",
          text: "For a practical, checklist-based view of these requirements, see our [eIDAS 2.0 Compliance Checklist](/eidas-2-compliance-checklist).",
        },
      ],
    },
    {
      id: "implementation-roadmap",
      label: "Implementation Roadmap",
      heading: "6. Implementation Roadmap",
      blocks: [
        {
          t: "p",
          text: "Successfully implementing eIDAS 2.0 compliance requires a phased approach. Below is a five-phase roadmap based on real-world implementation experience.",
        },
        {
          t: "phases",
          items: [
            {
              title: "Gap Analysis",
              duration: "Estimated duration: 4 to 8 weeks",
              text: "Assess your current identity verification processes, trust service usage, and technical infrastructure against the full set of eIDAS 2.0 requirements. Identify which roles your organization plays (relying party, QTSP, EAA issuer) and map every touchpoint where digital identity is used. Evaluate existing contracts, vendor relationships, and data flows. Deliverable: a comprehensive gap report with prioritized findings.",
            },
            {
              title: "Strategy and Planning",
              duration: "Estimated duration: 4 to 6 weeks",
              text: "Based on the gap analysis, define a compliance strategy that prioritizes the highest-impact areas. Determine whether to build in-house capabilities, partner with QTSPs, or adopt commercial solutions. Create a detailed project plan with milestones aligned to the regulatory deadlines. Secure budget and executive sponsorship. Establish governance structures including a project steering committee and designated compliance lead.",
            },
            {
              title: "Technical Implementation",
              duration: "Estimated duration: 12 to 24 weeks",
              text: "Execute the technical changes: integrate EUDIW verification protocols (OID4VP, mdoc), update credential issuance pipelines, connect to trust registries, and implement the required data minimisation controls. Update APIs, user interfaces, and backend systems to handle wallet-based identity flows. If you are a QTSP, implement new service types (e-archiving, ledgers) and upgrade existing services to meet revised standards. Develop fallback procedures for cases where wallet verification is unavailable.",
            },
            {
              title: "Testing and Validation",
              duration: "Estimated duration: 6 to 12 weeks",
              text: "Conduct interoperability testing with wallet reference implementations and large-scale pilots (LSPs). Perform security audits and penetration testing against the applicable protection profiles. Run user acceptance testing to ensure wallet-based flows are intuitive and do not degrade the user experience. Validate data protection compliance through privacy impact assessments and GDPR audits. Document all test results for the conformity assessment process.",
            },
            {
              title: "Certification and Ongoing Compliance",
              duration: "Estimated duration: 4 to 8 weeks initially, then ongoing",
              text: "Engage an accredited conformity assessment body (CAB) for formal evaluation. Submit the required documentation and evidence packages. Register with the national supervisory body. Once certified, establish a continuous compliance programme that includes periodic audits, vulnerability monitoring, incident response procedures, and tracking of implementing acts and delegated acts as the regulatory framework evolves.",
            },
          ],
        },
        {
          t: "p",
          text: "Total estimated duration from start to initial certification ranges from **30 to 58 weeks**, depending on organizational complexity, existing infrastructure maturity, and the number of services affected.",
        },
      ],
    },
    {
      id: "key-deadlines",
      label: "Key Deadlines and Timeline",
      heading: "7. Key Deadlines and Timeline",
      blocks: [
        {
          t: "p",
          text: "The regulation sets a series of milestones for Member States, trust service providers, and relying parties. Below are the major dates you need to track.",
        },
        {
          t: "table",
          head: ["Date", "Milestone"],
          rows: [
            ["April 2024", "Amending regulation formally adopted and published in the Official Journal of the EU. Entry into force 20 days after publication."],
            ["December 2024", "The first implementing acts, Implementing Regulations (EU) 2024/2977 to 2024/2982, enter into force. They detail person identification data, attestation formats, wallet certification and relying party registration, and start the 24-month clock in Article 5a(1)."],
            ["2025 to 2026", "Large-scale pilots (LSPs) conclude. Reference wallet implementations mature and become available for testing. Member States develop their national wallet solutions."],
            ["24 December 2026", "Member States must provide at least one EUDIW to citizens and residents. First wave of mandatory acceptance obligations enters into force."],
            ["2027 and beyond", "Full enforcement of all relying party acceptance obligations. Ongoing issuance of implementing acts. Periodic review and potential further amendments."],
          ],
        },
        {
          t: "p",
          text: "For a more detailed and regularly updated view of all regulatory milestones, visit our [eIDAS 2.0 Timeline](/eidas-2-timeline) page.",
        },
      ],
    },
    {
      id: "common-challenges",
      label: "Common Challenges",
      heading: "8. Common Challenges",
      blocks: [
        {
          t: "p",
          text: "These are the most frequently encountered challenges when preparing for eIDAS 2.0 and how to address them.",
        },
        { t: "h3", text: "Regulatory Uncertainty" },
        {
          t: "p",
          text: "Many implementing acts and delegated acts are still being finalised, which creates uncertainty about exact technical requirements. **Mitigation:** Follow the ARF development closely, participate in industry consultations, and build modular architectures that can adapt to evolving specifications. Engage with the EU Toolbox Expert Group outputs and the large-scale pilot results as authoritative guidance.",
        },
        { t: "h3", text: "Legacy System Integration" },
        {
          t: "p",
          text: "Organizations with mature identity verification systems built on legacy protocols (SAML 2.0, proprietary APIs, manual processes) face significant integration effort. **Mitigation:** Adopt an abstraction layer or identity orchestration platform that can mediate between existing systems and the new wallet-based flows. Plan for parallel operation during the transition period rather than a hard cutover.",
        },
        { t: "h3", text: "Cross-Border Interoperability" },
        {
          t: "p",
          text: "Despite the harmonised framework, practical interoperability between 27 national wallet implementations will take time to mature. **Mitigation:** Test early with multiple wallet reference implementations. Participate in cross-border pilot programmes. Design your integration to be wallet-agnostic, relying on the standardised ARF protocols rather than any single national implementation.",
        },
        { t: "h3", text: "User Experience Design" },
        {
          t: "p",
          text: "Wallet-based identity flows introduce new interaction patterns that can confuse users if poorly designed. QR codes, deep links, consent screens, and selective disclosure add steps to what may have been a simple form-fill process. **Mitigation:** Invest in UX research and prototyping early. Conduct usability testing with real users. Follow the design guidelines published by the EU large-scale pilots.",
        },
        { t: "h3", text: "Organizational Readiness" },
        {
          t: "p",
          text: "eIDAS 2.0 compliance is not purely a technology project. It requires legal review, process redesign, staff training, and executive sponsorship. **Mitigation:** Establish a cross-functional working group early, including legal, compliance, product, engineering, and operations. Secure a dedicated budget line and executive sponsor. Treat this as a strategic programme, not a one-off IT project.",
        },
        { t: "h3", text: "Resource Constraints" },
        {
          t: "p",
          text: "Skilled professionals with eIDAS expertise are in short supply. The intersection of digital identity standards, cryptography, EU regulation, and mobile security is a niche domain. **Mitigation:** Consider engaging specialised consultancies for gap analysis and strategy. Build internal expertise gradually through targeted training. Leverage the open-source reference implementations and toolkits provided by the EU to reduce development effort.",
        },
        {
          t: "p",
          text: "Have questions about these challenges? Check our [FAQ page](/faq) for answers to the most commonly asked questions about eIDAS 2.0 compliance.",
        },
      ],
    },
    {
      id: "how-to-start",
      label: "How to Start",
      heading: "9. How to Start",
      blocks: [
        {
          t: "p",
          text: "If you have read this far, you already understand the scope and urgency of eIDAS 2.0. Here are the practical first steps you can take today to begin your compliance journey.",
        },
        {
          t: "steps",
          items: [
            "**Take the readiness assessment.** Our free [eIDAS 2.0 readiness assessment](/assessment) gives you a quick understanding of where your organization stands today and produces a personalized report with recommended next steps.",
            "**Identify your role under the regulation.** Determine whether your organization is primarily a relying party, a trust service provider, an EAA issuer, or a combination. This determines which specific requirements apply to you.",
            "**Map your current identity touchpoints.** Document every place in your customer or user journey where identity verification, authentication, or electronic signing occurs. This inventory will form the basis of your gap analysis.",
            "**Assemble a cross-functional team.** Bring together stakeholders from legal, compliance, product, engineering, and operations. eIDAS 2.0 is not solely a technology challenge; it touches policy, process, and user experience.",
            "**Review the compliance checklist.** Use our [eIDAS 2.0 Compliance Checklist](/eidas-2-compliance-checklist) to get a structured overview of every requirement and track your progress.",
            "**Stay informed.** Monitor the [eIDAS 2.0 timeline](/eidas-2-timeline) for deadline updates. Follow the implementing acts as they are published. Engage with industry working groups and pilot programmes.",
            "**Consider expert support.** If your organization lacks in-house expertise in digital identity and EU regulation, engaging a specialized consultancy can accelerate your readiness and reduce risk.",
          ],
        },
      ],
    },
  ],
  related: {
    heading: "Related resources",
    items: [
      { href: "/guide/eudiw-preparation", label: "EUDIW Preparation Guide", desc: "Technical roadmap for wallet integration." },
      { href: "/eidas-2-timeline", label: "eIDAS 2.0 Timeline", desc: "Key dates and enforcement milestones." },
      { href: "/eidas-2-compliance-checklist", label: "eIDAS 2.0 Compliance Checklist", desc: "Track your compliance progress step by step." },
      { href: "/assessment", label: "Readiness Assessment", desc: "Get a personalised score and action plan." },
      { href: "/faq", label: "FAQ", desc: "Answers to common eIDAS 2.0 questions." },
      { href: "/glossary", label: "Glossary", desc: "Definitions for eIDAS 2.0 key terms." },
    ],
  },
  cta: {
    headline: "Ready to Start Your eIDAS 2.0 Journey?",
    description:
      "Take our free readiness assessment to understand your current compliance posture and get a personalized roadmap for eIDAS 2.0 implementation.",
    button: "Take the Readiness Assessment",
  },
};


const de: GuideContent = {
  meta: {
    title: "eIDAS-2.0-Compliance: Pflichten, Fristen und Checkliste",
    description:
      "Was eIDAS 2.0 von vertrauenden Beteiligten verlangt, zu welchem Datum jede Pflicht greift, und ein schrittweiser Fahrplan für die Anbindung der EU-Wallet für die digitale Identität.",
  },
  breadcrumb: "Leitfaden zur eIDAS-2.0-Compliance",
  hero: {
    eyebrow: "Compliance-Leitfaden",
    h1: "Der vollständige Leitfaden zur eIDAS-2.0-Compliance",
    published: "Veröffentlicht am 15. Juni 2025",
    updated: "Aktualisiert am 10. Dezember 2025",
    readTime: "15 Minuten Lesezeit",
    standfirst:
      "Die [Verordnung eIDAS 2.0](/glossary/eidas-2) ist die weitreichendste Überarbeitung des europäischen Rahmens für digitale Identität seit seinen Anfängen. Ob Finanzinstitut, Gesundheitsdienstleister, Verwaltung oder Technologieunternehmen mit Tätigkeit in der EU: Dieser Leitfaden führt durch jede Anforderung, jede Frist und jeden Umsetzungsschritt, den Sie kennen müssen.",
  },
  sections: [
    {
      id: "what-is-eidas-2",
      label: "Was ist eIDAS 2.0?",
      heading: "1. Was ist eIDAS 2.0?",
      blocks: [
        {
          t: "p",
          text: "eIDAS 2.0 ist der gängige Name für die überarbeitete Verordnung über elektronische Identifizierung und Vertrauensdienste für elektronische Transaktionen im Binnenmarkt. Sie ändert die ursprüngliche [**Verordnung (EU) Nr. 910/2014**](https://eur-lex.europa.eu/eli/reg/2014/910/oj) (bekannt als eIDAS 1.0), die den ersten EU-weiten Rechtsrahmen für elektronische Identifizierung, Authentifizierung und Vertrauensdienste wie [qualifizierte elektronische Signaturen](/glossary/qes), Siegel, Zeitstempel und Einschreibedienste geschaffen hat.",
        },
        { t: "h3", text: "Warum die Überarbeitung nötig war" },
        {
          t: "p",
          text: "Seit eIDAS 1.0 im Jahr 2016 in Kraft trat, hat sich die digitale Landschaft stark verändert. COVID-19 beschleunigte den Bedarf an Fernidentifizierung. Die grenzüberschreitende Anerkennung nationaler eID-Systeme blieb bruchstückhaft: Bis 2022 hatten nur 14 von 27 Mitgliedstaaten ein eID-System notifiziert, und die Nutzung durch die Bürger war ungleich verteilt. Gleichzeitig blieb die Privatwirtschaft vom eID-Ökosystem weitgehend ausgeschlossen, und neue Anwendungen wie Attributsbescheinigungen, überprüfbare Nachweise und mobile Identitäts-Wallets waren im ursprünglichen Text nicht vorgesehen.",
        },
        {
          t: "p",
          text: "Die Europäische Kommission legte ihren Gesetzgebungsvorschlag im Juni 2021 vor. Nach intensiven Verhandlungen zwischen Europäischem Parlament und Rat wurde die Änderungsverordnung Anfang 2024 formell angenommen. Der überarbeitete Rahmen führt eine verpflichtende [europäische Wallet für die digitale Identität (EUDIW)](/glossary/eudiw) ein, die jeder Mitgliedstaat seinen Bürgern und Einwohnern anbieten muss, und erweitert die Vertrauensdienste und Governance-Anforderungen deutlich.",
        },
        {
          t: "callout",
          title: "Das Wichtigste",
          text: "eIDAS 2.0 macht aus der digitalen Identität ein verpflichtendes, Wallet-basiertes Ökosystem, das öffentlichen und privaten Sektor in allen 27 Mitgliedstaaten umfasst, statt eines freiwilligen, staatlich zentrierten Systems.",
        },
      ],
    },
    {
      id: "key-changes",
      label: "Die Änderungen gegenüber eIDAS 1.0",
      heading: "2. Die Änderungen gegenüber eIDAS 1.0",
      blocks: [
        {
          t: "p",
          text: "eIDAS 1.0 legte die Grundlage, eIDAS 2.0 verschiebt Anwendungsbereich, Technik und Pflichten grundlegend. Die Tabelle fasst die Änderungen mit der größten Wirkung zusammen.",
        },
        {
          t: "table",
          head: ["Bereich", "eIDAS 1.0", "eIDAS 2.0"],
          rows: [
            ["Wallet für die digitale Identität", "Nicht geregelt", "Verpflichtende EUDIW in jedem Mitgliedstaat"],
            ["eID-Abdeckung", "Freiwillige Notifizierung durch die Mitgliedstaaten", "Verpflichtende Bereitstellung für alle Bürger und Einwohner"],
            ["Privatwirtschaft", "Begrenzte Pflicht zur Annahme von eID", "Annahmepflicht für vertrauende Beteiligte in Schlüsselbranchen"],
            ["Attributsbescheinigungen", "Nicht erfasst", "Elektronische Attributsbescheinigung (EAA) und qualifizierte EAA eingeführt"],
            ["Vertrauensdienste", "Signaturen, Siegel, Zeitstempel, Einschreibedienste", "Zusätzlich elektronische Archivierung, elektronische Register und Verwaltung von Fernsignaturgeräten"],
            ["Governance", "Nationale Aufsichtsorgane", "Gestärkte Governance, Kooperationsgruppe, Konformitätsbewertungen, Peer Reviews"],
            ["Interoperabilität", "Interoperabilitätsrahmen (freiwillig)", "Verpflichtende technische Standards (ARF), Toolbox, Referenzimplementierung"],
          ],
        },
        { t: "h3", text: "Neue Vertrauensdienste" },
        {
          t: "p",
          text: "eIDAS 2.0 erweitert den Katalog qualifizierter Vertrauensdienste um:",
        },
        {
          t: "list",
          items: [
            "**Elektronische Archivierungsdienste** die langfristige Aufbewahrung elektronischer Dokumente und Daten mit Rechtssicherheit.",
            "**Elektronische Registerdienste** qualifizierte Register, gegebenenfalls auf Blockchain-Basis, für die Aufzeichnung von Daten mit Integritätsgarantie.",
            "**Verwaltung von Geräten zur Erstellung elektronischer Fernsignaturen und Fernsiegel** ein neuer qualifizierter Dienst für die Verwaltung kryptografischer Schlüssel, die [qualifizierte Vertrauensdiensteanbieter (QTSPs)](/glossary/qtsp) aus der Ferne verwahren.",
          ],
        },
        { t: "h3", text: "Allgemeine Annahmepflicht" },
        {
          t: "p",
          text: "Eine der folgenreichsten Änderungen ist die Pflicht bestimmter privatwirtschaftlicher vertrauender Beteiligter, die EUDIW zu akzeptieren. Unter eIDAS 1.0 war die grenzüberschreitende Annahme weitgehend auf öffentliche Dienste begrenzt. eIDAS 2.0 erstreckt die Annahmepflicht auf Branchen wie das Bankwesen (nach den Geldwäschevorschriften), Verkehr, Gesundheitswesen, Telekommunikation, Energie und jeden Dienstleister, der rechtlich zu starker Kundenauthentifizierung oder Identitätsprüfung verpflichtet ist. Wenn Ihre Plattform heute Identitäten prüft, wird sie die Wallet morgen mit hoher Wahrscheinlichkeit unterstützen müssen.",
        },
      ],
    },
    {
      id: "eudiw",
      label: "Die europäische Wallet für die digitale Identität",
      heading: "3. Die europäische Wallet für die digitale Identität (EUDIW)",
      blocks: [
        {
          t: "p",
          text: "Die [EUDIW](/glossary/eudiw) ist das Kernstück von eIDAS 2.0. Sie ist eine mobile Anwendung, oder eine Kombination aus sicherem Element und App, die unter der Verantwortung eines Mitgliedstaats ausgegeben wird und Bürgern und Einwohnern Folgendes erlaubt:",
        },
        {
          t: "list",
          items: [
            "**Personenidentifizierungsdaten (PID)** speichern und vorlegen, den Mindestdatensatz, der den Inhaber identifiziert (Name, Geburtsdatum, eindeutige Kennung) und auf hohem Sicherheitsniveau authentifiziert ist.",
            "**Elektronische Attributsbescheinigungen (EAAs)** speichern und selektiv offenlegen, also überprüfbare Aussagen über den Inhaber wie eine berufliche Qualifikation, einen Führerschein, ein Hochschuldiplom oder einen Adressnachweis.",
            "[Qualifizierte elektronische Signaturen (QES)](/glossary/qes) kostenlos für nicht berufliche Zwecke erstellen, wodurch rechtsverbindliches digitales Signieren allen EU-Bürgern zugänglich wird.",
            "Sich bei Online- und Offline-Diensten im öffentlichen und privaten Sektor mit einer einzigen vertrauenswürdigen App authentifizieren.",
          ],
        },
        { t: "h3", text: "Wie die Wallet funktioniert" },
        {
          t: "p",
          text: "Die Wallet beruht auf einer dezentralen Architektur. Es gibt keine einzige EU-Datenbank der Identitäten. Stattdessen gibt jeder Mitgliedstaat Wallets aus, die dem **Architecture and Reference Framework (ARF)** der EU Toolbox Expert Group entsprechen. Der ARF legt die Protokolle, Datenmodelle und Sicherheitsanforderungen fest, die dafür sorgen, dass alle Wallets grenzüberschreitend zusammenarbeiten. Technisch verbindet die Wallet ein sicheres kryptografisches Element, entweder hardwaregestützt auf dem Smartphone oder über ein entferntes HSM, mit einer Anwendung für den Nutzer und einer Backend-Infrastruktur, die der Mitgliedstaat oder eine beauftragte Stelle bereitstellt.",
        },
        {
          t: "p",
          text: "Vertrauende Beteiligte, also die Organisationen, die Identitätsdaten anfragen, müssen sich registrieren und authentifizieren, bevor sie Attribute aus der Wallet anfragen dürfen. Das schützt Nutzer vor unbefugtem Datensammeln und stellt sicher, dass nur die notwendigen Mindestdaten geteilt werden. Der Grundsatz der **selektiven Offenlegung** bedeutet, dass eine Person etwa nachweisen kann, über 18 zu sein, ohne ihr genaues Geburtsdatum zu offenbaren.",
        },
        {
          t: "callout",
          title: "Bereiten Sie sich auf die EUDIW vor?",
          text: "Unser eigener [Leitfaden zur EUDIW-Vorbereitung](/guide/eudiw-preparation) geht tief auf Integrationsmuster, Sicherheitsanforderungen und technische Architekturfragen für vertrauende Beteiligte ein.",
        },
      ],
    },
    {
      id: "who-is-affected",
      label: "Wer betroffen ist",
      heading: "4. Wer betroffen ist",
      blocks: [
        {
          t: "p",
          text: "Der Anwendungsbereich von eIDAS 2.0 ist deutlich weiter als der der Vorgängerverordnung. Betroffen ist jede Organisation, die in der EU Dienste mit Identitätsprüfung anbietet, ebenso Vertrauensdiensteanbieter, Behörden der Mitgliedstaaten und Technologieanbieter. Nachstehend die wichtigsten Folgen Branche für Branche.",
        },
        { t: "h3", text: "Finanzdienstleistungen" },
        {
          t: "p",
          text: "Banken, Zahlungsinstitute, Wertpapierfirmen und Versicherungen gehören zu den unmittelbarsten Betroffenen. Sie werden die EUDIW für Sorgfaltspflichten nach den Geldwäschevorschriften, für die starke Kundenauthentifizierung nach PSD2 und PSD3 und für Kontoeröffnungen akzeptieren müssen. Das bedeutet, Wallet-basierte Identitätsprüfung in die Onboarding-Strecken einzubinden und bestehende Video-Ident-, Foto-Ident- oder Filialprüfungen zu ersetzen oder zu ergänzen. Institute sollten außerdem damit rechnen, dass über die Wallet erstellte QES zum Standardweg für die Unterzeichnung von Verträgen und Mandaten wird.",
        },
        { t: "h3", text: "Gesundheitswesen" },
        {
          t: "p",
          text: "Gesundheitsdienstleister, Versicherer und digitale Gesundheitsplattformen werden Wallet-basierte Identifizierung für die Patientenprüfung, elektronische Verordnungen und den grenzüberschreitenden Zugang zu Krankenakten akzeptieren müssen. Elektronische Attributsbescheinigungen erlauben es Patienten, verifizierte Versicherungsdaten mitzuführen, und Gesundheitsfachkräften, berufliche Qualifikationen über Grenzen hinweg nachzuweisen. Die Verordnung über den europäischen Raum für Gesundheitsdaten (EHDS) wird voraussichtlich eng mit der Wallet-Infrastruktur zusammenarbeiten.",
        },
        { t: "h3", text: "Öffentlicher Sektor" },
        {
          t: "p",
          text: "Behörden und Verwaltungen auf allen Ebenen, europäisch, national, regional und kommunal, müssen die EUDIW für den Zugang zu digitalen Verwaltungsleistungen akzeptieren. Das reicht von der Steuererklärung und Sozialleistungsanträgen bis zur Unternehmensregistrierung und zur öffentlichen Auftragsvergabe. Stellen des öffentlichen Sektors sind zugleich Aussteller vieler wichtiger Bescheinigungen wie Führerscheine, Sozialversicherungsnachweise und Aufenthaltstitel.",
        },
        { t: "h3", text: "Telekommunikation" },
        {
          t: "p",
          text: "Telekommunikationsanbieter unterliegen Pflichten zur Identitätsprüfung nach europäischem und nationalem Recht, etwa bei der SIM-Registrierung. Die EUDIW wird ein anerkanntes und möglicherweise bevorzugtes Mittel der Identitätsprüfung für SIM-Aktivierung, Vertragsabschluss und Altersprüfung bei Inhaltediensten.",
        },
        { t: "h3", text: "E-Commerce und digitale Plattformen" },
        {
          t: "p",
          text: "Sehr große Online-Plattformen im Sinne des Gesetzes über digitale Dienste sind verpflichtet, die EUDIW zur Authentifizierung von Nutzern zu akzeptieren, wenn das Recht dies verlangt. Handelsplattformen, die Altersprüfungen, KYC für Marktplatzverkäufer oder Identitätsprüfungen für regulierte Waren durchführen, müssen Wallet-Prüfungen einbinden. Die Verordnung wirkt auch auf Plattformen, die nach dem Gesetz über digitale Märkte Unternehmensidentitäten prüfen müssen.",
        },
        { t: "h3", text: "Reise und Verkehr" },
        {
          t: "p",
          text: "Fluggesellschaften, Bahnunternehmen und andere Verkehrsbetriebe werden Wallet-basierte Identitätsprüfung für Check-in, Boarding und grenzüberschreitende Reisen im Schengen-Raum unterstützen müssen. Mietwagenanbieter, Hotels und Mobilitätsplattformen werden ebenso Führerscheinbescheinigungen und Identitätsprüfungen aus der EUDIW akzeptieren müssen.",
        },
        {
          t: "callout",
          title: "Nicht sicher, ob Sie betroffen sind?",
          text: "Die kostenlose [eIDAS-2.0-Bereitschaftsanalyse](/assessment) liefert eine auf Ihre Organisation zugeschnittene Auswertung, wie die Verordnung auf sie anzuwenden ist.",
        },
      ],
    },
    {
      id: "compliance-requirements",
      label: "Anforderungen an die Compliance",
      heading: "5. Anforderungen an die Compliance",
      blocks: [
        {
          t: "p",
          text: "Compliance mit eIDAS 2.0 heißt, Anforderungen in drei Dimensionen zu erfüllen: technisch, organisatorisch und rechtlich. Welche Pflichten genau gelten, hängt davon ab, ob Ihre Organisation [QTSP](/glossary/qtsp), vertrauender Beteiligter, EAA-Aussteller oder mehreres davon ist.",
        },
        { t: "h3", text: "Technische Anforderungen" },
        {
          t: "list",
          items: [
            "**Protokollunterstützung:** Setzen Sie die im ARF festgelegten Kommunikationsprotokolle für den Austausch zwischen Wallet und vertrauendem Beteiligten um, darunter OpenID for Verifiable Presentations (OID4VP) und ISO/IEC 18013-5 für Näheabläufe.",
            "**Nachweisformate:** Unterstützen Sie die standardisierten Nachweisformate für PIDs und EAAs, einschließlich überprüfbarer Nachweise auf SD-JWT-Basis und mdoc (ISO 18013-5).",
            "**Anbindung an Vertrauensregister:** Verbinden Sie sich mit den EU-Vertrauenslisten und der neuen Access-Certificate-Authority-Infrastruktur, um Echtheit der Wallet und Registrierung vertrauender Beteiligter zu prüfen.",
            "**Sicherheitsstandards:** Erfüllen Sie die Zertifizierungsanforderungen nach den einschlägigen Common-Criteria-Schutzprofilen oder gleichwertigen Sicherheitsbewertungen aus den Durchführungsrechtsakten.",
            "**QES-Einbindung:** Wenn Sie elektronische Signaturen ausstellen oder nutzen, stellen Sie sicher, dass Ihre Infrastruktur die Wallet-basierte QES-Erstellung samt Fernsignaturprotokollen unterstützt.",
          ],
        },
        { t: "h3", text: "Organisatorische Anforderungen" },
        {
          t: "list",
          items: [
            "**Richtlinien und Verfahren:** Legen Sie dokumentierte Richtlinien für Identitätsprüfung, Datenverarbeitung, Störungsmanagement und Geschäftsfortführung fest, die zu eIDAS 2.0 passen.",
            "**Schulung:** Schulen Sie Ihr Personal zu Wallet-basierten Prüfabläufen, zu den Datenschutzpflichten aus eIDAS 2.0 und zu den Meldeverfahren bei Sicherheitsvorfällen.",
            "**Lieferantensteuerung:** Wenn Sie Identitätsdienste oder Vertrauensinfrastruktur von Dritten beziehen, sorgen Sie für vertragliche und betriebliche Übereinstimmung mit den neuen Anforderungen.",
          ],
        },
        { t: "h3", text: "Rechtliche Anforderungen" },
        {
          t: "list",
          items: [
            "**Registrierung:** Vertrauende Beteiligte, die auf Wallet-Daten zugreifen, müssen sich bei der zuständigen Stelle registrieren und angeben, welche Attribute sie anfragen und auf welcher Rechtsgrundlage jeweils.",
            "**Datenschutz:** Bringen Sie die Verarbeitung von Wallet-Daten mit der DSGVO in Einklang, einschließlich Datenminimierung, Zweckbindung und Datenschutz-Folgenabschätzungen. eIDAS 2.0 enthält eigene Vorschriften gegen Tracking, etwa dass eindeutige Kennungen standardmäßig keine dienstübergreifende Verknüpfung erlauben dürfen.",
            "**Konformitätsbewertung:** QTSPs und Wallet-Anbieter müssen sich von akkreditierten Stellen bewerten lassen, mit regelmäßigen Audits und Peer-Review-Verfahren.",
            "**Haftungsrahmen:** Machen Sie sich mit den geänderten Haftungsvorschriften vertraut, die Wallet-Anbietern, QTSPs und EAA-Ausstellern klare Pflichten für Schäden aus Fehlern ihrer Dienste zuweisen.",
          ],
        },
        {
          t: "p",
          text: "Eine praktische Sicht auf diese Anforderungen in Checklistenform bietet unsere [eIDAS-2.0-Compliance-Checkliste](/eidas-2-compliance-checklist).",
        },
      ],
    },
    {
      id: "implementation-roadmap",
      label: "Fahrplan für die Umsetzung",
      heading: "6. Fahrplan für die Umsetzung",
      blocks: [
        {
          t: "p",
          text: "Die Umsetzung gelingt in Phasen. Nachstehend ein Fahrplan in fünf Phasen, der auf Erfahrungen aus echten Projekten beruht.",
        },
        {
          t: "phases",
          items: [
            {
              title: "Gap-Analyse",
              duration: "Geschätzte Dauer: 4 bis 8 Wochen",
              text: "Prüfen Sie Ihre heutigen Abläufe zur Identitätsprüfung, Ihre Nutzung von Vertrauensdiensten und Ihre technische Infrastruktur gegen den vollen Satz der Anforderungen aus eIDAS 2.0. Bestimmen Sie, welche Rollen Ihre Organisation einnimmt (vertrauender Beteiligter, QTSP, EAA-Aussteller), und erfassen Sie jeden Punkt, an dem digitale Identität vorkommt. Bewerten Sie bestehende Verträge, Lieferantenbeziehungen und Datenflüsse. Ergebnis: ein vollständiger Gap-Bericht mit priorisierten Feststellungen.",
            },
            {
              title: "Strategie und Planung",
              duration: "Geschätzte Dauer: 4 bis 6 Wochen",
              text: "Legen Sie auf Basis der Gap-Analyse eine Compliance-Strategie fest, die die Bereiche mit der größten Wirkung nach vorn stellt. Entscheiden Sie, ob Sie Fähigkeiten im Haus aufbauen, mit QTSPs zusammenarbeiten oder kommerzielle Lösungen einsetzen. Erstellen Sie einen detaillierten Projektplan mit Meilensteinen, die zu den regulatorischen Fristen passen. Sichern Sie Budget und Rückendeckung der Geschäftsleitung. Richten Sie Governance-Strukturen ein, darunter einen Steuerungskreis und eine benannte Compliance-Verantwortung.",
            },
            {
              title: "Technische Umsetzung",
              duration: "Geschätzte Dauer: 12 bis 24 Wochen",
              text: "Führen Sie die technischen Änderungen durch: Binden Sie die EUDIW-Prüfprotokolle (OID4VP, mdoc) ein, aktualisieren Sie die Ausstellungsprozesse für Nachweise, verbinden Sie sich mit den Vertrauensregistern und setzen Sie die verlangten Kontrollen zur Datenminimierung um. Passen Sie Schnittstellen, Benutzeroberflächen und Backend-Systeme an Wallet-basierte Abläufe an. Als QTSP setzen Sie die neuen Dienstarten (elektronische Archivierung, Register) um und bringen bestehende Dienste auf die überarbeiteten Standards. Entwickeln Sie Ausweichverfahren für Fälle, in denen die Wallet-Prüfung nicht verfügbar ist.",
            },
            {
              title: "Test und Validierung",
              duration: "Geschätzte Dauer: 6 bis 12 Wochen",
              text: "Testen Sie die Interoperabilität mit Referenzimplementierungen und den Large-Scale Pilots (LSPs). Führen Sie Sicherheitsaudits und Penetrationstests gegen die geltenden Schutzprofile durch. Testen Sie die Nutzerakzeptanz, damit die Wallet-Abläufe verständlich bleiben und die Nutzung nicht erschweren. Belegen Sie die Datenschutzkonformität über Folgenabschätzungen und DSGVO-Audits. Dokumentieren Sie alle Testergebnisse für die Konformitätsbewertung.",
            },
            {
              title: "Zertifizierung und laufende Compliance",
              duration: "Geschätzte Dauer: zunächst 4 bis 8 Wochen, danach laufend",
              text: "Beauftragen Sie eine akkreditierte Konformitätsbewertungsstelle mit der formellen Bewertung. Legen Sie die verlangten Unterlagen und Nachweise vor. Registrieren Sie sich beim nationalen Aufsichtsorgan. Richten Sie nach der Zertifizierung ein laufendes Compliance-Programm ein, mit regelmäßigen Audits, Überwachung von Schwachstellen, Verfahren zur Reaktion auf Vorfälle und der Beobachtung neuer Durchführungs- und delegierter Rechtsakte.",
            },
          ],
        },
        {
          t: "p",
          text: "Von Beginn bis zur ersten Zertifizierung sind insgesamt **30 bis 58 Wochen** zu erwarten, je nach Komplexität der Organisation, Reife der bestehenden Infrastruktur und Zahl der betroffenen Dienste.",
        },
      ],
    },
    {
      id: "key-deadlines",
      label: "Fristen und Zeitplan",
      heading: "7. Fristen und Zeitplan",
      blocks: [
        {
          t: "p",
          text: "Die Verordnung setzt eine Reihe von Meilensteinen für Mitgliedstaaten, Vertrauensdiensteanbieter und vertrauende Beteiligte. Nachstehend die wichtigsten Termine.",
        },
        {
          t: "table",
          head: ["Datum", "Meilenstein"],
          rows: [
            ["April 2024", "Die Änderungsverordnung wird formell angenommen und im Amtsblatt der EU veröffentlicht. Inkrafttreten 20 Tage nach der Veröffentlichung."],
            ["Dezember 2024", "Die ersten Durchführungsrechtsakte, Durchführungsverordnungen (EU) 2024/2977 bis 2024/2982, treten in Kraft. Sie regeln Personenidentifizierungsdaten, Formate für Bescheinigungen, die Zertifizierung der Wallet und die Registrierung vertrauender Beteiligter und setzen die 24-Monats-Frist aus Artikel 5a Absatz 1 in Gang."],
            ["2025 bis 2026", "Die Large-Scale Pilots (LSPs) werden abgeschlossen. Referenzimplementierungen der Wallet erreichen Reife und stehen zum Testen bereit. Die Mitgliedstaaten entwickeln ihre nationalen Lösungen."],
            ["24. Dezember 2026", "Die Mitgliedstaaten müssen ihren Bürgern und Einwohnern mindestens eine EUDIW bereitstellen. Die erste Welle der Annahmepflichten greift."],
            ["2027 und danach", "Vollständige Durchsetzung aller Annahmepflichten für vertrauende Beteiligte. Weitere Durchführungsrechtsakte. Regelmäßige Überprüfung und mögliche weitere Änderungen."],
          ],
        },
        {
          t: "p",
          text: "Eine ausführlichere und laufend aktualisierte Übersicht aller regulatorischen Meilensteine finden Sie auf unserer Seite [eIDAS 2.0 Zeitplan](/eidas-2-timeline).",
        },
      ],
    },
    {
      id: "common-challenges",
      label: "Häufige Schwierigkeiten",
      heading: "8. Häufige Schwierigkeiten",
      blocks: [
        {
          t: "p",
          text: "Das sind die Schwierigkeiten, die bei der Vorbereitung auf eIDAS 2.0 am häufigsten auftreten, und wie man ihnen begegnet.",
        },
        { t: "h3", text: "Regulatorische Unsicherheit" },
        {
          t: "p",
          text: "Viele Durchführungs- und delegierte Rechtsakte werden noch abgestimmt, was Unsicherheit über die genauen technischen Anforderungen schafft. **Gegenmaßnahme:** Verfolgen Sie die Entwicklung des ARF genau, beteiligen Sie sich an Konsultationen der Branche und bauen Sie modulare Architekturen, die sich an neue Spezifikationen anpassen lassen. Nutzen Sie die Ergebnisse der EU Toolbox Expert Group und der Large-Scale Pilots als maßgebliche Orientierung.",
        },
        { t: "h3", text: "Anbindung von Altsystemen" },
        {
          t: "p",
          text: "Organisationen mit ausgereiften Prüfsystemen auf älteren Protokollen (SAML 2.0, eigene Schnittstellen, manuelle Abläufe) haben einen erheblichen Integrationsaufwand. **Gegenmaßnahme:** Setzen Sie eine Abstraktionsschicht oder eine Identity-Orchestration-Plattform ein, die zwischen den bestehenden Systemen und den neuen Wallet-Abläufen vermittelt. Planen Sie für die Übergangszeit einen Parallelbetrieb statt einer harten Umstellung.",
        },
        { t: "h3", text: "Grenzüberschreitende Interoperabilität" },
        {
          t: "p",
          text: "Trotz des harmonisierten Rahmens wird die praktische Zusammenarbeit zwischen 27 nationalen Wallet-Umsetzungen Zeit brauchen. **Gegenmaßnahme:** Testen Sie früh mit mehreren Referenzimplementierungen. Beteiligen Sie sich an grenzüberschreitenden Pilotprogrammen. Legen Sie Ihre Integration wallet-unabhängig an, gestützt auf die standardisierten ARF-Protokolle statt auf eine einzelne nationale Umsetzung.",
        },
        { t: "h3", text: "Gestaltung der Nutzererfahrung" },
        {
          t: "p",
          text: "Wallet-basierte Abläufe bringen neue Interaktionsmuster mit, die Nutzer bei schlechter Gestaltung verwirren. QR-Codes, Deep Links, Einwilligungsdialoge und selektive Offenlegung fügen einem früher einfachen Formular zusätzliche Schritte hinzu. **Gegenmaßnahme:** Investieren Sie früh in UX-Forschung und Prototypen. Testen Sie die Bedienbarkeit mit echten Nutzern. Folgen Sie den Gestaltungsleitlinien aus den Large-Scale Pilots.",
        },
        { t: "h3", text: "Organisatorische Bereitschaft" },
        {
          t: "p",
          text: "Compliance mit eIDAS 2.0 ist kein reines Technikprojekt. Sie verlangt rechtliche Prüfung, neu gestaltete Prozesse, Schulung und Rückendeckung der Geschäftsleitung. **Gegenmaßnahme:** Richten Sie früh eine bereichsübergreifende Arbeitsgruppe ein, mit Recht, Compliance, Produkt, Entwicklung und Betrieb. Sichern Sie eine eigene Budgetlinie und einen Sponsor auf Leitungsebene. Behandeln Sie das Vorhaben als strategisches Programm, nicht als einmaliges IT-Projekt.",
        },
        { t: "h3", text: "Knappe Ressourcen" },
        {
          t: "p",
          text: "Fachleute mit eIDAS-Erfahrung sind knapp. Die Schnittmenge aus Standards für digitale Identität, Kryptografie, EU-Recht und mobiler Sicherheit ist ein Nischenfeld. **Gegenmaßnahme:** Ziehen Sie für Gap-Analyse und Strategie spezialisierte Beratung hinzu. Bauen Sie internes Wissen schrittweise über gezielte Schulung auf. Nutzen Sie die Open-Source-Referenzimplementierungen und Werkzeuge der EU, um Entwicklungsaufwand zu sparen.",
        },
        {
          t: "p",
          text: "Fragen zu diesen Punkten? Unsere [Seite mit häufigen Fragen](/faq) beantwortet die Fragen, die zur eIDAS-2.0-Compliance am häufigsten gestellt werden.",
        },
      ],
    },
    {
      id: "how-to-start",
      label: "Wie Sie anfangen",
      heading: "9. Wie Sie anfangen",
      blocks: [
        {
          t: "p",
          text: "Wenn Sie bis hierhin gelesen haben, kennen Sie Umfang und Dringlichkeit von eIDAS 2.0. Das sind die ersten praktischen Schritte, die Sie heute gehen können.",
        },
        {
          t: "steps",
          items: [
            "**Machen Sie die Bereitschaftsanalyse.** Unsere kostenlose [eIDAS-2.0-Bereitschaftsanalyse](/assessment) zeigt schnell, wo Ihre Organisation heute steht, und erstellt einen individuellen Bericht mit empfohlenen nächsten Schritten.",
            "**Bestimmen Sie Ihre Rolle unter der Verordnung.** Klären Sie, ob Ihre Organisation vor allem vertrauender Beteiligter, Vertrauensdiensteanbieter, EAA-Aussteller oder mehreres davon ist. Davon hängt ab, welche Anforderungen für Sie gelten.",
            "**Erfassen Sie Ihre heutigen Identitätspunkte.** Dokumentieren Sie jede Stelle Ihrer Kunden- oder Nutzerstrecke, an der Identitätsprüfung, Authentifizierung oder elektronisches Signieren vorkommt. Diese Aufstellung ist die Grundlage der Gap-Analyse.",
            "**Stellen Sie ein bereichsübergreifendes Team zusammen.** Holen Sie Recht, Compliance, Produkt, Entwicklung und Betrieb an einen Tisch. eIDAS 2.0 ist keine rein technische Aufgabe, sondern berührt Richtlinien, Prozesse und Nutzererfahrung.",
            "**Gehen Sie die Compliance-Checkliste durch.** Unsere [eIDAS-2.0-Compliance-Checkliste](/eidas-2-compliance-checklist) gibt einen strukturierten Überblick über jede Anforderung und macht den Fortschritt sichtbar.",
            "**Bleiben Sie informiert.** Beobachten Sie den [eIDAS-2.0-Zeitplan](/eidas-2-timeline) auf Änderungen bei den Fristen. Verfolgen Sie die Durchführungsrechtsakte, sobald sie veröffentlicht werden. Beteiligen Sie sich an Arbeitsgruppen und Pilotprogrammen der Branche.",
            "**Erwägen Sie externe Unterstützung.** Wenn im Haus Erfahrung mit digitaler Identität und EU-Recht fehlt, kann eine spezialisierte Beratung die Bereitschaft beschleunigen und Risiken senken.",
          ],
        },
      ],
    },
  ],
  related: {
    heading: "Weiterführende Inhalte",
    items: [
      { href: "/guide/eudiw-preparation", label: "Leitfaden zur EUDIW-Vorbereitung", desc: "Technischer Fahrplan für die Wallet-Anbindung." },
      { href: "/eidas-2-timeline", label: "eIDAS 2.0 Zeitplan", desc: "Zentrale Termine und Durchsetzungsschritte." },
      { href: "/eidas-2-compliance-checklist", label: "eIDAS-2.0-Compliance-Checkliste", desc: "Den Fortschritt Schritt für Schritt verfolgen." },
      { href: "/assessment", label: "Bereitschaftsanalyse", desc: "Persönlicher Wert und Aktionsplan." },
      { href: "/faq", label: "Häufige Fragen", desc: "Antworten auf gängige Fragen zu eIDAS 2.0." },
      { href: "/glossary", label: "Glossar", desc: "Definitionen der zentralen Begriffe von eIDAS 2.0." },
    ],
  },
  cta: {
    headline: "Bereit für den Start mit eIDAS 2.0?",
    description:
      "Mit der kostenlosen Bereitschaftsanalyse erkennen Sie Ihren heutigen Compliance-Stand und erhalten einen individuellen Fahrplan für die Umsetzung von eIDAS 2.0.",
    button: "Zur Bereitschaftsanalyse",
  },
};


const it: GuideContent = {
  meta: {
    title: "Conformità a eIDAS 2.0: requisiti, scadenze e checklist",
    description:
      "Cosa richiede eIDAS 2.0 alle parti facenti affidamento, la data in cui scatta ogni obbligo e un percorso passo per passo per integrare il portafoglio europeo di identità digitale.",
  },
  breadcrumb: "Guida alla conformità eIDAS 2.0",
  hero: {
    eyebrow: "Guida alla conformità",
    h1: "La guida completa alla conformità a eIDAS 2.0",
    published: "Pubblicato il 15 giugno 2025",
    updated: "Aggiornato il 10 dicembre 2025",
    readTime: "15 minuti di lettura",
    standfirst:
      "Il [regolamento eIDAS 2.0](/glossary/eidas-2) è la revisione più rilevante del quadro europeo per l'identità digitale dalla sua nascita. Che si tratti di un istituto finanziario, di un prestatore di assistenza sanitaria, di una pubblica amministrazione o di un'azienda tecnologica che opera nell'UE, questa guida accompagna attraverso ogni requisito, ogni scadenza e ogni passo di attuazione da conoscere.",
  },
  sections: [
    {
      id: "what-is-eidas-2",
      label: "Che cos'è eIDAS 2.0?",
      heading: "1. Che cos'è eIDAS 2.0?",
      blocks: [
        {
          t: "p",
          text: "eIDAS 2.0 è il nome con cui si indica il regolamento rivisto in materia di identificazione elettronica e servizi fiduciari per le transazioni elettroniche nel mercato interno. Modifica il [**regolamento (UE) n. 910/2014**](https://eur-lex.europa.eu/eli/reg/2014/910/oj) originario, noto come eIDAS 1.0, che ha istituito il primo quadro giuridico dell'Unione per l'identificazione elettronica, l'autenticazione e i servizi fiduciari come le [firme elettroniche qualificate](/glossary/qes), i sigilli, la validazione temporale e i servizi di recapito certificato.",
        },
        { t: "h3", text: "Perché serviva un aggiornamento" },
        {
          t: "p",
          text: "Da quando eIDAS 1.0 è entrato in vigore nel 2016, il contesto digitale è cambiato profondamente. La pandemia di COVID-19 ha accelerato la domanda di verifica dell'identità a distanza. Il riconoscimento transfrontaliero dei regimi nazionali di identificazione elettronica è rimasto frammentario: entro il 2022 solo 14 Stati membri su 27 avevano notificato un regime, e la diffusione tra i cittadini era disomogenea. Nello stesso periodo il settore privato è rimasto in gran parte fuori dall'ecosistema, e casi d'uso nuovi come le attestazioni di attributi, gli attestati verificabili e i wallet di identità nati per il mobile non erano previsti dal testo originario.",
        },
        {
          t: "p",
          text: "La Commissione europea ha presentato la proposta legislativa nel giugno 2021 e, dopo negoziati intensi tra Parlamento europeo e Consiglio, il regolamento di modifica è stato adottato formalmente all'inizio del 2024. Il quadro rivisto introduce un [portafoglio europeo di identità digitale (EUDIW)](/glossary/eudiw) obbligatorio, che ogni Stato membro deve offrire ai propri cittadini e residenti, insieme a un insieme di servizi fiduciari e di obblighi di governance sensibilmente ampliato.",
        },
        {
          t: "callout",
          title: "In sintesi",
          text: "eIDAS 2.0 trasforma l'identità digitale da sistema volontario e incentrato sullo Stato in un ecosistema obbligatorio basato sul wallet, che copre settore pubblico e privato in tutti i 27 Stati membri dell'UE.",
        },
      ],
    },
    {
      id: "key-changes",
      label: "Cosa cambia rispetto a eIDAS 1.0",
      heading: "2. Cosa cambia rispetto a eIDAS 1.0",
      blocks: [
        {
          t: "p",
          text: "eIDAS 1.0 ha posto le basi; eIDAS 2.0 introduce spostamenti di fondo in ambito di applicazione, tecnologia e obblighi. La tabella riassume i cambiamenti di maggiore impatto.",
        },
        {
          t: "table",
          head: ["Ambito", "eIDAS 1.0", "eIDAS 2.0"],
          rows: [
            ["Portafoglio di identità digitale", "Non disciplinato", "EUDIW obbligatorio in ogni Stato membro"],
            ["Copertura dell'identità elettronica", "Notifica volontaria da parte degli Stati membri", "Fornitura obbligatoria a tutti i cittadini e residenti"],
            ["Settore privato", "Obbligo limitato di accettare l'identificazione elettronica", "Accettazione obbligatoria per le parti facenti affidamento nei settori chiave"],
            ["Attestazioni di attributi", "Non previste", "Introdotte l'attestazione elettronica di attributi (EAA) e la EAA qualificata"],
            ["Servizi fiduciari", "Firme, sigilli, validazione temporale, recapito certificato", "Si aggiungono archiviazione elettronica, registri elettronici e gestione dei dispositivi di firma a distanza"],
            ["Governance", "Organismi di vigilanza nazionali", "Governance rafforzata, gruppo di cooperazione, valutazioni di conformità, revisioni tra pari"],
            ["Interoperabilità", "Quadro di interoperabilità volontario", "Standard tecnici obbligatori (ARF), toolbox, implementazione di riferimento"],
          ],
        },
        { t: "h3", text: "Nuovi servizi fiduciari" },
        {
          t: "p",
          text: "eIDAS 2.0 amplia il catalogo dei servizi fiduciari qualificati con:",
        },
        {
          t: "list",
          items: [
            "**Servizi di archiviazione elettronica** conservazione a lungo termine di documenti e dati elettronici con certezza giuridica.",
            "**Servizi di registro elettronico** registri qualificati, eventualmente basati su blockchain, per registrare dati con garanzie di integrità.",
            "**Gestione dei dispositivi per la creazione di firme e sigilli elettronici a distanza** un nuovo servizio qualificato che disciplina la gestione delle chiavi crittografiche custodite a distanza dai [prestatori di servizi fiduciari qualificati (QTSP)](/glossary/qtsp).",
          ],
        },
        { t: "h3", text: "Accettazione universale" },
        {
          t: "p",
          text: "Uno dei cambiamenti di maggiore portata è l'obbligo, per alcune parti facenti affidamento del settore privato, di accettare l'EUDIW. Con eIDAS 1.0 l'accettazione transfrontaliera era limitata in gran parte ai servizi pubblici. eIDAS 2.0 estende l'obbligo a settori come quello bancario (in forza della normativa antiriciclaggio), i trasporti, la sanità, le telecomunicazioni, l'energia e qualsiasi prestatore tenuto per legge all'autenticazione forte del cliente o alla verifica dell'identità. Se oggi la tua piattaforma verifica l'identità degli utenti, con ogni probabilità domani dovrà supportare il wallet.",
        },
      ],
    },
    {
      id: "eudiw",
      label: "Il portafoglio europeo di identità digitale",
      heading: "3. Il portafoglio europeo di identità digitale (EUDIW)",
      blocks: [
        {
          t: "p",
          text: "L'[EUDIW](/glossary/eudiw) è il fulcro di eIDAS 2.0. È un'applicazione mobile, o una combinazione di elemento sicuro e app, rilasciata sotto la responsabilità di uno Stato membro, che consente a cittadini e residenti di:",
        },
        {
          t: "list",
          items: [
            "Conservare e presentare i **dati di identificazione personale (PID)**, l'insieme minimo di dati che identifica il titolare (nome, data di nascita, identificativo univoco) e che è autenticato a un livello di garanzia elevato.",
            "Conservare e divulgare in modo selettivo le **attestazioni elettroniche di attributi (EAA)**, cioè dichiarazioni verificabili sul titolare come una qualifica professionale, una patente di guida, un diploma universitario o una prova di residenza.",
            "Creare [firme elettroniche qualificate (QES)](/glossary/qes) gratuitamente per usi non professionali, rendendo la firma digitale giuridicamente vincolante accessibile a tutti i cittadini dell'UE.",
            "Autenticarsi presso servizi online e offline, pubblici e privati, con una sola applicazione affidabile.",
          ],
        },
        { t: "h3", text: "Come funziona il wallet" },
        {
          t: "p",
          text: "Il wallet si basa su un'architettura decentralizzata: non esiste un'unica banca dati europea delle identità. Ogni Stato membro rilascia wallet conformi all'**Architecture and Reference Framework (ARF)** elaborato dall'EU Toolbox Expert Group. L'ARF definisce protocolli, modelli di dati e requisiti di sicurezza che garantiscono l'interoperabilità di tutti i wallet oltre frontiera. Sul piano tecnico il wallet combina un dispositivo crittografico sicuro, ancorato all'hardware dello smartphone oppure a un HSM remoto, con un'applicazione rivolta all'utente e un'infrastruttura di backend fornita dallo Stato membro o da un soggetto delegato.",
        },
        {
          t: "p",
          text: "Le parti facenti affidamento, cioè le organizzazioni che richiedono dati di identità, devono registrarsi e autenticarsi prima di poter chiedere attributi al wallet. Questo protegge gli utenti dalla raccolta non autorizzata di dati e garantisce che sia condiviso solo il minimo necessario. Il principio della **divulgazione selettiva** permette, per esempio, di dimostrare di avere più di 18 anni senza rivelare la data di nascita esatta.",
        },
        {
          t: "callout",
          title: "Ti stai preparando all'EUDIW?",
          text: "La nostra [guida alla preparazione all'EUDIW](/guide/eudiw-preparation) approfondisce schemi di integrazione, requisiti di sicurezza e scelte di architettura tecnica per le parti facenti affidamento.",
        },
      ],
    },
    {
      id: "who-is-affected",
      label: "Chi è interessato",
      heading: "4. Chi è interessato",
      blocks: [
        {
          t: "p",
          text: "L'ambito di applicazione di eIDAS 2.0 è molto più ampio di quello del regolamento precedente. Riguarda qualsiasi organizzazione che offra nell'UE servizi che richiedono la verifica dell'identità, oltre ai prestatori di servizi fiduciari, alle autorità degli Stati membri e ai fornitori di tecnologia. Segue una lettura settore per settore.",
        },
        { t: "h3", text: "Servizi finanziari" },
        {
          t: "p",
          text: "Banche, istituti di pagamento, imprese di investimento e compagnie assicurative sono tra i soggetti più direttamente interessati. Dovranno accettare l'EUDIW per l'adeguata verifica della clientela prevista dalla normativa antiriciclaggio, per l'autenticazione forte del cliente secondo PSD2 e PSD3 e per l'apertura dei rapporti. Ciò significa integrare la verifica dell'identità tramite wallet nei flussi di onboarding, sostituendo o integrando le attuali procedure di video identificazione, identificazione tramite foto o verifica in filiale. Gli istituti devono inoltre attendersi che la QES creata tramite wallet diventi lo strumento standard per firmare contratti e mandati.",
        },
        { t: "h3", text: "Sanità" },
        {
          t: "p",
          text: "Prestatori di assistenza sanitaria, assicuratori e piattaforme di salute digitale dovranno accettare l'identificazione tramite wallet per la verifica del paziente, le prescrizioni elettroniche e l'accesso transfrontaliero alla documentazione clinica. Le attestazioni elettroniche di attributi consentiranno ai pazienti di portare con sé informazioni assicurative verificate e agli operatori sanitari di dimostrare le proprie qualifiche oltre frontiera. Il regolamento sullo spazio europeo dei dati sanitari (EHDS) dovrebbe integrarsi strettamente con l'infrastruttura del wallet.",
        },
        { t: "h3", text: "Settore pubblico" },
        {
          t: "p",
          text: "Amministrazioni e pubbliche autorità a ogni livello, europeo, nazionale, regionale e comunale, devono accettare l'EUDIW per l'accesso ai servizi pubblici digitali. Si va dalla dichiarazione dei redditi e dalle domande di prestazioni sociali all'iscrizione delle imprese e agli appalti pubblici. Gli enti pubblici sono anche emittenti di molte attestazioni essenziali, come patenti di guida, posizioni previdenziali e permessi di soggiorno.",
        },
        { t: "h3", text: "Telecomunicazioni" },
        {
          t: "p",
          text: "Gli operatori di telecomunicazioni sono soggetti a obblighi di verifica dell'identità in forza del diritto dell'Unione e nazionale, per esempio per la registrazione delle SIM. L'EUDIW diventerà uno strumento accettato, e potenzialmente preferito, per l'attivazione delle SIM, la sottoscrizione dei contratti e la verifica dell'età per i servizi di contenuti.",
        },
        { t: "h3", text: "Commercio elettronico e piattaforme digitali" },
        {
          t: "p",
          text: "Le piattaforme online di dimensioni molto grandi, come definite dal regolamento sui servizi digitali, sono obbligate ad accettare l'EUDIW per autenticare gli utenti quando la legge lo richiede. Le piattaforme di commercio elettronico che verificano l'età, applicano il KYC ai venditori del marketplace o controllano l'identità per beni regolamentati dovranno integrare i flussi di verifica dal wallet. Il regolamento incide anche sulle piattaforme che devono verificare identità di impresa in forza del regolamento sui mercati digitali.",
        },
        { t: "h3", text: "Viaggi e trasporti" },
        {
          t: "p",
          text: "Compagnie aeree, ferrovie e altri operatori di trasporto dovranno supportare la verifica dell'identità tramite wallet per il check-in, l'imbarco e gli spostamenti transfrontalieri nello spazio Schengen. Autonoleggi, strutture alberghiere e piattaforme di mobilità come servizio dovranno analogamente accettare le attestazioni di patente e la verifica dell'identità dall'EUDIW.",
        },
        {
          t: "callout",
          title: "Non sai se ti riguarda?",
          text: "L'[analisi gratuita di preparazione a eIDAS 2.0](/assessment) restituisce un'analisi su misura di come il regolamento si applica alla tua organizzazione.",
        },
      ],
    },
    {
      id: "compliance-requirements",
      label: "Requisiti di conformità",
      heading: "5. Requisiti di conformità",
      blocks: [
        {
          t: "p",
          text: "La conformità a eIDAS 2.0 richiede di soddisfare requisiti su tre piani: tecnico, organizzativo e giuridico. Gli obblighi precisi dipendono dal fatto che l'organizzazione sia un [QTSP](/glossary/qtsp), una parte facente affidamento, un emittente di EAA o più di questi ruoli insieme.",
        },
        { t: "h3", text: "Requisiti tecnici" },
        {
          t: "list",
          items: [
            "**Supporto dei protocolli:** implementa i protocolli di comunicazione definiti dall'ARF per l'interazione tra wallet e parte facente affidamento, tra cui OpenID for Verifiable Presentations (OID4VP) e ISO/IEC 18013-5 per i flussi di prossimità.",
            "**Formati degli attestati:** supporta i formati standardizzati per PID ed EAA, compresi gli attestati verificabili basati su SD-JWT e il formato mdoc (ISO 18013-5).",
            "**Collegamento ai registri di fiducia:** collegati alle liste di fiducia dell'UE e alla nuova infrastruttura di Access Certificate Authority per validare l'autenticità del wallet e le registrazioni delle parti facenti affidamento.",
            "**Standard di sicurezza:** soddisfa i requisiti di certificazione previsti dai pertinenti profili di protezione Common Criteria o da valutazioni di sicurezza equivalenti definite dagli atti di esecuzione.",
            "**Integrazione della QES:** se rilasci o utilizzi firme elettroniche, verifica che la tua infrastruttura supporti la creazione della QES tramite wallet, compresi i protocolli di firma a distanza.",
          ],
        },
        { t: "h3", text: "Requisiti organizzativi" },
        {
          t: "list",
          items: [
            "**Politiche e procedure:** adotta politiche documentate per la verifica dell'identità, il trattamento dei dati, la gestione degli incidenti e la continuità operativa, coerenti con eIDAS 2.0.",
            "**Formazione del personale:** forma il personale sui flussi di verifica tramite wallet, sugli obblighi di protezione dei dati previsti da eIDAS 2.0 e sulle procedure di segnalazione degli incidenti.",
            "**Gestione dei fornitori:** se ti affidi a terzi per servizi di identità o per l'infrastruttura di fiducia, assicura l'allineamento contrattuale e operativo ai nuovi requisiti.",
          ],
        },
        { t: "h3", text: "Requisiti giuridici" },
        {
          t: "list",
          items: [
            "**Registrazione:** le parti facenti affidamento che accedono ai dati del wallet devono registrarsi presso l'autorità competente e dichiarare quali attributi richiedono e con quale base giuridica ciascuno.",
            "**Protezione dei dati:** allinea il trattamento dei dati del wallet al GDPR, con minimizzazione, limitazione della finalità e valutazioni d'impatto sulla privacy. eIDAS 2.0 introduce disposizioni specifiche contro il tracciamento: per esempio, gli identificativi univoci non devono consentire per impostazione predefinita la correlazione tra servizi diversi.",
            "**Valutazione di conformità:** QTSP e fornitori di wallet devono sottoporsi a valutazioni di conformità da parte di organismi accreditati, con audit periodici e processi di revisione tra pari.",
            "**Quadro di responsabilità:** studia le disposizioni aggiornate in materia di responsabilità, che pongono obblighi chiari in capo a fornitori di wallet, QTSP ed emittenti di EAA per i danni derivanti da carenze dei loro servizi.",
          ],
        },
        {
          t: "p",
          text: "Per una lettura operativa di questi requisiti in forma di elenco di controllo, consulta la nostra [checklist di conformità eIDAS 2.0](/eidas-2-compliance-checklist).",
        },
      ],
    },
    {
      id: "implementation-roadmap",
      label: "Percorso di attuazione",
      heading: "6. Percorso di attuazione",
      blocks: [
        {
          t: "p",
          text: "L'attuazione riesce se procede per fasi. Segue un percorso in cinque fasi ricavato da esperienze di progetto reali.",
        },
        {
          t: "phases",
          items: [
            {
              title: "Analisi degli scostamenti",
              duration: "Durata stimata: da 4 a 8 settimane",
              text: "Valuta i processi attuali di verifica dell'identità, l'uso dei servizi fiduciari e l'infrastruttura tecnica rispetto all'insieme completo dei requisiti di eIDAS 2.0. Individua i ruoli che la tua organizzazione svolge (parte facente affidamento, QTSP, emittente di EAA) e mappa ogni punto in cui entra in gioco l'identità digitale. Esamina contratti, rapporti con i fornitori e flussi di dati. Risultato: una relazione completa sugli scostamenti, con priorità.",
            },
            {
              title: "Strategia e pianificazione",
              duration: "Durata stimata: da 4 a 6 settimane",
              text: "Sulla base dell'analisi, definisci una strategia di conformità che metta al primo posto le aree di maggiore impatto. Decidi se costruire competenze interne, collaborare con QTSP o adottare soluzioni commerciali. Prepara un piano di progetto dettagliato con traguardi allineati alle scadenze normative. Assicura budget e sostegno del vertice. Istituisci strutture di governance, compreso un comitato di indirizzo e un referente designato per la conformità.",
            },
            {
              title: "Attuazione tecnica",
              duration: "Durata stimata: da 12 a 24 settimane",
              text: "Realizza le modifiche tecniche: integra i protocolli di verifica dell'EUDIW (OID4VP, mdoc), aggiorna le pipeline di rilascio degli attestati, collegati ai registri di fiducia e implementa i controlli richiesti per la minimizzazione dei dati. Adegua API, interfacce e sistemi di backend ai flussi basati sul wallet. Se sei un QTSP, implementa i nuovi tipi di servizio (archiviazione elettronica, registri) e porta i servizi esistenti agli standard rivisti. Predisponi procedure di ripiego per i casi in cui la verifica tramite wallet non sia disponibile.",
            },
            {
              title: "Test e validazione",
              duration: "Durata stimata: da 6 a 12 settimane",
              text: "Esegui test di interoperabilità con le implementazioni di riferimento e con i Large-Scale Pilots (LSP). Svolgi audit di sicurezza e test di penetrazione rispetto ai profili di protezione applicabili. Conduci test di accettazione con gli utenti, perché i flussi basati sul wallet restino chiari e non peggiorino l'esperienza. Verifica la conformità in materia di protezione dei dati con valutazioni d'impatto e audit GDPR. Documenta tutti i risultati per la valutazione di conformità.",
            },
            {
              title: "Certificazione e conformità continuativa",
              duration: "Durata stimata: da 4 a 8 settimane all'inizio, poi in via continuativa",
              text: "Incarica un organismo di valutazione della conformità accreditato della valutazione formale. Presenta la documentazione e i fascicoli di evidenze richiesti. Registrati presso l'organismo di vigilanza nazionale. Ottenuta la certificazione, avvia un programma di conformità continuativa che comprenda audit periodici, monitoraggio delle vulnerabilità, procedure di risposta agli incidenti e osservazione degli atti di esecuzione e delegati che il quadro normativo produce nel tempo.",
            },
          ],
        },
        {
          t: "p",
          text: "Dall'avvio alla prima certificazione la durata stimata complessiva va da **30 a 58 settimane**, secondo la complessità dell'organizzazione, la maturità dell'infrastruttura esistente e il numero di servizi coinvolti.",
        },
      ],
    },
    {
      id: "key-deadlines",
      label: "Scadenze e calendario",
      heading: "7. Scadenze e calendario",
      blocks: [
        {
          t: "p",
          text: "Il regolamento fissa una serie di traguardi per Stati membri, prestatori di servizi fiduciari e parti facenti affidamento. Seguono le date principali da tenere presenti.",
        },
        {
          t: "table",
          head: ["Data", "Traguardo"],
          rows: [
            ["Aprile 2024", "Il regolamento di modifica è adottato formalmente e pubblicato nella Gazzetta ufficiale dell'UE. Entrata in vigore 20 giorni dopo la pubblicazione."],
            ["Dicembre 2024", "Entrano in vigore i primi atti di esecuzione, i regolamenti di esecuzione (UE) dal 2024/2977 al 2024/2982. Disciplinano i dati di identificazione personale, i formati delle attestazioni, la certificazione del wallet e la registrazione delle parti facenti affidamento, e avviano il termine di 24 mesi dell'articolo 5 bis, paragrafo 1."],
            ["2025 e 2026", "Si concludono i Large-Scale Pilots (LSP). Le implementazioni di riferimento del wallet maturano e diventano disponibili per i test. Gli Stati membri sviluppano le proprie soluzioni nazionali."],
            ["24 dicembre 2026", "Gli Stati membri devono fornire ai cittadini e ai residenti almeno un EUDIW. Scatta la prima ondata di obblighi di accettazione."],
            ["Dal 2027", "Applicazione piena di tutti gli obblighi di accettazione per le parti facenti affidamento. Ulteriori atti di esecuzione. Riesame periodico e possibili nuove modifiche."],
          ],
        },
        {
          t: "p",
          text: "Per una panoramica più dettagliata e aggiornata di tutti i traguardi normativi, visita la pagina [Calendario eIDAS 2.0](/eidas-2-timeline).",
        },
      ],
    },
    {
      id: "common-challenges",
      label: "Difficoltà ricorrenti",
      heading: "8. Difficoltà ricorrenti",
      blocks: [
        {
          t: "p",
          text: "Queste sono le difficoltà che si incontrano più spesso nel prepararsi a eIDAS 2.0, e il modo di affrontarle.",
        },
        { t: "h3", text: "Incertezza normativa" },
        {
          t: "p",
          text: "Molti atti di esecuzione e atti delegati sono ancora in definizione, il che lascia incertezza sui requisiti tecnici esatti. **Come muoversi:** segui da vicino lo sviluppo dell'ARF, partecipa alle consultazioni di settore e costruisci architetture modulari capaci di adattarsi a specifiche che cambiano. Usa come riferimento autorevole i risultati dell'EU Toolbox Expert Group e dei Large-Scale Pilots.",
        },
        { t: "h3", text: "Integrazione dei sistemi preesistenti" },
        {
          t: "p",
          text: "Le organizzazioni con sistemi di verifica maturi costruiti su protocolli datati (SAML 2.0, API proprietarie, processi manuali) affrontano uno sforzo di integrazione rilevante. **Come muoversi:** adotta un livello di astrazione o una piattaforma di orchestrazione dell'identità che medi tra i sistemi esistenti e i nuovi flussi basati sul wallet. Prevedi un funzionamento in parallelo durante la transizione, invece di un passaggio netto.",
        },
        { t: "h3", text: "Interoperabilità transfrontaliera" },
        {
          t: "p",
          text: "Nonostante il quadro armonizzato, l'interoperabilità pratica tra 27 implementazioni nazionali richiederà tempo per maturare. **Come muoversi:** prova presto con più implementazioni di riferimento. Partecipa ai programmi pilota transfrontalieri. Progetta l'integrazione in modo indipendente dal singolo wallet, appoggiandoti ai protocolli standardizzati dell'ARF e non a una specifica soluzione nazionale.",
        },
        { t: "h3", text: "Progettazione dell'esperienza d'uso" },
        {
          t: "p",
          text: "I flussi basati sul wallet introducono schemi di interazione nuovi che, se progettati male, confondono gli utenti. Codici QR, deep link, schermate di consenso e divulgazione selettiva aggiungono passaggi a quello che prima era un semplice modulo da compilare. **Come muoversi:** investi presto in ricerca UX e prototipi. Conduci test di usabilità con utenti reali. Segui le linee guida di progettazione pubblicate dai Large-Scale Pilots.",
        },
        { t: "h3", text: "Preparazione organizzativa" },
        {
          t: "p",
          text: "La conformità a eIDAS 2.0 non è solo un progetto tecnologico: richiede analisi legale, riprogettazione dei processi, formazione e sostegno del vertice. **Come muoversi:** costituisci presto un gruppo di lavoro trasversale con legale, compliance, prodotto, ingegneria e operations. Assicura una voce di budget dedicata e uno sponsor ai vertici. Trattalo come un programma strategico, non come un progetto IT occasionale.",
        },
        { t: "h3", text: "Risorse limitate" },
        {
          t: "p",
          text: "I professionisti con esperienza su eIDAS sono pochi. L'incrocio tra standard di identità digitale, crittografia, diritto dell'Unione e sicurezza mobile è un ambito di nicchia. **Come muoversi:** valuta il ricorso a consulenze specializzate per analisi e strategia. Costruisci competenza interna con formazione mirata. Sfrutta le implementazioni di riferimento e gli strumenti open source messi a disposizione dall'UE per ridurre lo sforzo di sviluppo.",
        },
        {
          t: "p",
          text: "Hai domande su questi punti? La nostra [pagina delle domande frequenti](/faq) risponde ai quesiti più comuni sulla conformità a eIDAS 2.0.",
        },
      ],
    },
    {
      id: "how-to-start",
      label: "Da dove cominciare",
      heading: "9. Da dove cominciare",
      blocks: [
        {
          t: "p",
          text: "Se sei arrivato fin qui, hai già chiara la portata e l'urgenza di eIDAS 2.0. Questi sono i primi passi concreti che puoi compiere oggi.",
        },
        {
          t: "steps",
          items: [
            "**Fai l'analisi di preparazione.** La nostra [analisi gratuita di preparazione a eIDAS 2.0](/assessment) mostra rapidamente dove si trova oggi la tua organizzazione e produce un rapporto personalizzato con i passi consigliati.",
            "**Individua il tuo ruolo secondo il regolamento.** Stabilisci se la tua organizzazione è soprattutto una parte facente affidamento, un prestatore di servizi fiduciari, un emittente di EAA o una combinazione. Da questo dipende quali requisiti si applicano.",
            "**Mappa i punti in cui tratti l'identità.** Documenta ogni passaggio del percorso del cliente o dell'utente in cui avviene verifica dell'identità, autenticazione o firma elettronica. Questo inventario è la base dell'analisi degli scostamenti.",
            "**Metti insieme un gruppo trasversale.** Riunisci legale, compliance, prodotto, ingegneria e operations. eIDAS 2.0 non è solo una sfida tecnologica: tocca politiche, processi ed esperienza d'uso.",
            "**Passa in rassegna la checklist.** Usa la nostra [checklist di conformità eIDAS 2.0](/eidas-2-compliance-checklist) per avere una visione strutturata di ogni requisito e seguire i progressi.",
            "**Resta aggiornato.** Tieni d'occhio il [calendario eIDAS 2.0](/eidas-2-timeline) per gli aggiornamenti sulle scadenze. Segui gli atti di esecuzione appena pubblicati. Partecipa ai gruppi di lavoro di settore e ai programmi pilota.",
            "**Valuta un supporto esperto.** Se in casa manca esperienza su identità digitale e diritto dell'Unione, una consulenza specializzata può accelerare la preparazione e ridurre il rischio.",
          ],
        },
      ],
    },
  ],
  related: {
    heading: "Risorse correlate",
    items: [
      { href: "/guide/eudiw-preparation", label: "Guida alla preparazione all'EUDIW", desc: "Percorso tecnico per l'integrazione del wallet." },
      { href: "/eidas-2-timeline", label: "Calendario eIDAS 2.0", desc: "Date chiave e tappe di applicazione." },
      { href: "/eidas-2-compliance-checklist", label: "Checklist di conformità eIDAS 2.0", desc: "Segui i progressi passo per passo." },
      { href: "/assessment", label: "Analisi di preparazione", desc: "Un punteggio personalizzato e un piano d'azione." },
      { href: "/faq", label: "Domande frequenti", desc: "Risposte ai quesiti più comuni su eIDAS 2.0." },
      { href: "/glossary", label: "Glossario", desc: "Definizioni dei termini chiave di eIDAS 2.0." },
    ],
  },
  cta: {
    headline: "Pronto a iniziare il percorso verso eIDAS 2.0?",
    description:
      "Con l'analisi gratuita di preparazione capisci il tuo livello di conformità attuale e ottieni un percorso personalizzato per attuare eIDAS 2.0.",
    button: "Vai all'analisi di preparazione",
  },
};


const es: GuideContent = {
  meta: {
    title: "Cumplimiento de eIDAS 2.0: requisitos, plazos y checklist",
    description:
      "Qué exige eIDAS 2.0 a las partes usuarias, en qué fecha entra cada obligación y una hoja de ruta paso a paso para integrar la cartera europea de identidad digital.",
  },
  breadcrumb: "Guía de cumplimiento de eIDAS 2.0",
  hero: {
    eyebrow: "Guía de cumplimiento",
    h1: "La guía completa del cumplimiento de eIDAS 2.0",
    published: "Publicado el 15 de junio de 2025",
    updated: "Actualizado el 10 de diciembre de 2025",
    readTime: "15 minutos de lectura",
    standfirst:
      "El [reglamento eIDAS 2.0](/glossary/eidas-2) es la revisión más importante del marco europeo de identidad digital desde que nació. Seas una entidad financiera, un prestador de asistencia sanitaria, una administración pública o una empresa tecnológica que opera en la UE, esta guía recorre cada requisito, cada plazo y cada paso de implantación que necesitas conocer.",
  },
  sections: [
    {
      id: "what-is-eidas-2",
      label: "Qué es eIDAS 2.0",
      heading: "1. Qué es eIDAS 2.0",
      blocks: [
        {
          t: "p",
          text: "eIDAS 2.0 es el nombre con el que se conoce el reglamento revisado sobre identificación electrónica y servicios de confianza para las transacciones electrónicas en el mercado interior. Modifica el [**Reglamento (UE) n.º 910/2014**](https://eur-lex.europa.eu/eli/reg/2014/910/oj) original, conocido como eIDAS 1.0, que estableció el primer marco jurídico de la Unión para la identificación electrónica, la autenticación y los servicios de confianza como las [firmas electrónicas cualificadas](/glossary/qes), los sellos, los sellos de tiempo y los servicios de entrega electrónica certificada.",
        },
        { t: "h3", text: "Por qué hacía falta actualizarlo" },
        {
          t: "p",
          text: "Desde que eIDAS 1.0 entró en vigor en 2016, el panorama digital cambió mucho. La COVID-19 aceleró la demanda de verificación de identidad a distancia. El reconocimiento transfronterizo de los sistemas nacionales de identificación electrónica siguió fragmentado: en 2022 solo 14 de los 27 Estados miembros habían notificado un sistema, y su uso entre la ciudadanía era desigual. Al mismo tiempo, el sector privado quedó en gran medida fuera del ecosistema, y casos de uso nuevos como las declaraciones de atributos, las credenciales verificables y las carteras de identidad pensadas para el móvil no estaban previstos en el texto original.",
        },
        {
          t: "p",
          text: "La Comisión Europea presentó su propuesta legislativa en junio de 2021 y, tras negociaciones intensas entre el Parlamento Europeo y el Consejo, el reglamento modificativo se adoptó formalmente a comienzos de 2024. El marco revisado introduce una [cartera europea de identidad digital (EUDIW)](/glossary/eudiw) obligatoria, que cada Estado miembro debe ofrecer a sus ciudadanos y residentes, junto con un conjunto de servicios de confianza y de exigencias de gobernanza sensiblemente ampliado.",
        },
        {
          t: "callout",
          title: "Lo esencial",
          text: "eIDAS 2.0 convierte la identidad digital de un sistema voluntario y centrado en el Estado en un ecosistema obligatorio basado en la cartera, que abarca al sector público y al privado en los 27 Estados miembros.",
        },
      ],
    },
    {
      id: "key-changes",
      label: "Qué cambia respecto a eIDAS 1.0",
      heading: "2. Qué cambia respecto a eIDAS 1.0",
      blocks: [
        {
          t: "p",
          text: "eIDAS 1.0 puso los cimientos; eIDAS 2.0 desplaza de raíz el ámbito, la tecnología y las obligaciones. La tabla resume los cambios de mayor impacto.",
        },
        {
          t: "table",
          head: ["Ámbito", "eIDAS 1.0", "eIDAS 2.0"],
          rows: [
            ["Cartera de identidad digital", "No regulada", "EUDIW obligatoria en cada Estado miembro"],
            ["Cobertura de la identificación electrónica", "Notificación voluntaria por los Estados miembros", "Provisión obligatoria a todos los ciudadanos y residentes"],
            ["Sector privado", "Obligación limitada de aceptar la identificación electrónica", "Aceptación obligatoria por las partes usuarias en sectores clave"],
            ["Declaraciones de atributos", "No contempladas", "Se introducen la declaración electrónica de atributos (EAA) y la EAA cualificada"],
            ["Servicios de confianza", "Firmas, sellos, sellos de tiempo, entrega certificada", "Se añaden el archivo electrónico, los registros electrónicos y la gestión de dispositivos de firma a distancia"],
            ["Gobernanza", "Organismos de supervisión nacionales", "Gobernanza reforzada, grupo de cooperación, evaluaciones de conformidad, revisiones entre pares"],
            ["Interoperabilidad", "Marco de interoperabilidad voluntario", "Normas técnicas obligatorias (ARF), caja de herramientas, implementación de referencia"],
          ],
        },
        { t: "h3", text: "Nuevos servicios de confianza" },
        {
          t: "p",
          text: "eIDAS 2.0 amplía el catálogo de servicios de confianza cualificados con:",
        },
        {
          t: "list",
          items: [
            "**Servicios de archivo electrónico** conservación a largo plazo de documentos y datos electrónicos con seguridad jurídica.",
            "**Servicios de registro electrónico** registros cualificados, eventualmente basados en cadena de bloques, para consignar datos con garantías de integridad.",
            "**Gestión de dispositivos de creación de firmas y sellos electrónicos a distancia** un nuevo servicio cualificado que regula la gestión de las claves criptográficas custodiadas a distancia por los [prestadores cualificados de servicios de confianza (QTSP)](/glossary/qtsp).",
          ],
        },
        { t: "h3", text: "Aceptación universal" },
        {
          t: "p",
          text: "Uno de los cambios de mayor alcance es la obligación de determinadas partes usuarias del sector privado de aceptar la EUDIW. Con eIDAS 1.0 la aceptación transfronteriza se limitaba en buena medida a los servicios públicos. eIDAS 2.0 extiende la obligación a sectores como la banca (por la normativa de prevención del blanqueo), el transporte, la sanidad, las telecomunicaciones, la energía y cualquier prestador obligado por ley a la autenticación reforzada de clientes o a la verificación de identidad. Si tu plataforma verifica identidades hoy, con toda probabilidad tendrá que admitir la cartera mañana.",
        },
      ],
    },
    {
      id: "eudiw",
      label: "La cartera europea de identidad digital",
      heading: "3. La cartera europea de identidad digital (EUDIW)",
      blocks: [
        {
          t: "p",
          text: "La [EUDIW](/glossary/eudiw) es la pieza central de eIDAS 2.0. Es una aplicación móvil, o una combinación de elemento seguro y aplicación, expedida bajo la responsabilidad de un Estado miembro, que permite a ciudadanos y residentes:",
        },
        {
          t: "list",
          items: [
            "Guardar y presentar los **datos de identificación de la persona (PID)**, el conjunto mínimo de datos que identifica al titular (nombre, fecha de nacimiento, identificador único) y que se autentica a un nivel de seguridad alto.",
            "Guardar y divulgar de forma selectiva las **declaraciones electrónicas de atributos (EAA)**, es decir, afirmaciones verificables sobre el titular, como una cualificación profesional, un permiso de conducción, un título universitario o una prueba de domicilio.",
            "Crear [firmas electrónicas cualificadas (QES)](/glossary/qes) de forma gratuita para usos no profesionales, con lo que la firma digital jurídicamente vinculante queda al alcance de toda la ciudadanía de la UE.",
            "Autenticarse ante servicios en línea y fuera de línea, públicos y privados, con una sola aplicación de confianza.",
          ],
        },
        { t: "h3", text: "Cómo funciona la cartera" },
        {
          t: "p",
          text: "La cartera se apoya en una arquitectura descentralizada: no existe una base de datos europea única de identidades. Cada Estado miembro expide carteras conformes al **Architecture and Reference Framework (ARF)** que elaboró el EU Toolbox Expert Group. El ARF define los protocolos, los modelos de datos y los requisitos de seguridad que garantizan que todas las carteras funcionen entre países. En el plano técnico, la cartera combina un dispositivo criptográfico seguro, anclado al hardware del teléfono o a un HSM remoto, con una aplicación de cara al usuario y una infraestructura de backend que provee el Estado miembro o una entidad delegada.",
        },
        {
          t: "p",
          text: "Las partes usuarias, es decir, las organizaciones que solicitan datos de identidad, deben registrarse y autenticarse antes de poder pedir atributos a la cartera. Eso protege a las personas de la recogida no autorizada de datos y asegura que solo se comparta el mínimo necesario. El principio de **divulgación selectiva** permite, por ejemplo, demostrar que alguien es mayor de 18 años sin revelar su fecha exacta de nacimiento.",
        },
        {
          t: "callout",
          title: "¿Te estás preparando para la EUDIW?",
          text: "Nuestra [guía de preparación para la EUDIW](/guide/eudiw-preparation) entra a fondo en patrones de integración, requisitos de seguridad y decisiones de arquitectura técnica para las partes usuarias.",
        },
      ],
    },
    {
      id: "who-is-affected",
      label: "A quién afecta",
      heading: "4. A quién afecta",
      blocks: [
        {
          t: "p",
          text: "El ámbito de eIDAS 2.0 es mucho más amplio que el del reglamento anterior. Afecta a cualquier organización que preste en la UE servicios que exijan verificar la identidad, y también a los prestadores de servicios de confianza, a las autoridades de los Estados miembros y a los proveedores de tecnología. A continuación, sector por sector.",
        },
        { t: "h3", text: "Servicios financieros" },
        {
          t: "p",
          text: "Bancos, entidades de pago, empresas de servicios de inversión y aseguradoras están entre los más directamente afectados. Tendrán que aceptar la EUDIW para la diligencia debida que exige la normativa de prevención del blanqueo, para la autenticación reforzada de clientes de la PSD2 y la PSD3, y para la apertura de cuentas. Eso significa integrar la verificación de identidad con cartera en los flujos de alta, y sustituir o complementar las actuales verificaciones por vídeo, por foto o en oficina. Las entidades deben esperar además que la QES creada con la cartera se convierta en el mecanismo habitual para firmar contratos y mandatos.",
        },
        { t: "h3", text: "Sanidad" },
        {
          t: "p",
          text: "Prestadores sanitarios, aseguradoras y plataformas de salud digital tendrán que aceptar la identificación con cartera para verificar al paciente, para las recetas electrónicas y para el acceso transfronterizo a la historia clínica. Las declaraciones electrónicas de atributos permitirán a los pacientes llevar información de cobertura verificada y a los profesionales sanitarios acreditar sus cualificaciones en otros países. Se espera que el reglamento del espacio europeo de datos sanitarios (EHDS) funcione en estrecha relación con la infraestructura de la cartera.",
        },
        { t: "h3", text: "Sector público" },
        {
          t: "p",
          text: "Los organismos y administraciones públicas de todos los niveles, europeo, nacional, regional y municipal, deben aceptar la EUDIW para acceder a los servicios públicos digitales. Eso abarca desde la declaración de impuestos y las solicitudes de prestaciones sociales hasta el registro de empresas y la contratación pública. Los organismos públicos son además emisores de muchas declaraciones esenciales, como permisos de conducción, vidas laborales y permisos de residencia.",
        },
        { t: "h3", text: "Telecomunicaciones" },
        {
          t: "p",
          text: "Los operadores de telecomunicaciones están sujetos a obligaciones de verificación de identidad conforme al derecho de la Unión y nacional, por ejemplo en el registro de tarjetas SIM. La EUDIW pasará a ser un medio aceptado, y posiblemente preferido, para activar SIM, firmar contratos y verificar la edad en servicios de contenidos.",
        },
        { t: "h3", text: "Comercio electrónico y plataformas digitales" },
        {
          t: "p",
          text: "Las plataformas en línea de muy gran tamaño, según las define el Reglamento de Servicios Digitales, están obligadas a aceptar la EUDIW para autenticar usuarios cuando la ley lo exige. Las plataformas de comercio electrónico que verifican la edad, aplican KYC a los vendedores del mercado o comprueban la identidad para bienes regulados tendrán que integrar los flujos de verificación con cartera. El reglamento también afecta a las plataformas que deben verificar identidades de empresa conforme al Reglamento de Mercados Digitales.",
        },
        { t: "h3", text: "Viajes y transporte" },
        {
          t: "p",
          text: "Aerolíneas, ferrocarriles y otros operadores de transporte tendrán que admitir la verificación de identidad con cartera para la facturación, el embarque y los desplazamientos transfronterizos dentro del espacio Schengen. Empresas de alquiler de vehículos, hoteles y plataformas de movilidad como servicio deberán aceptar igualmente las declaraciones de permiso de conducción y la verificación de identidad desde la EUDIW.",
        },
        {
          t: "callout",
          title: "¿No sabes si te afecta?",
          text: "La [evaluación gratuita de preparación para eIDAS 2.0](/assessment) devuelve un análisis a medida de cómo se aplica el reglamento a tu organización.",
        },
      ],
    },
    {
      id: "compliance-requirements",
      label: "Requisitos de cumplimiento",
      heading: "5. Requisitos de cumplimiento",
      blocks: [
        {
          t: "p",
          text: "Cumplir con eIDAS 2.0 supone satisfacer requisitos en tres planos: técnico, organizativo y jurídico. Las obligaciones concretas dependen de si tu organización es un [QTSP](/glossary/qtsp), una parte usuaria, un emisor de EAA o una combinación de esos papeles.",
        },
        { t: "h3", text: "Requisitos técnicos" },
        {
          t: "list",
          items: [
            "**Soporte de protocolos:** implanta los protocolos de comunicación que define el ARF para la interacción entre cartera y parte usuaria, entre ellos OpenID for Verifiable Presentations (OID4VP) e ISO/IEC 18013-5 para los flujos de proximidad.",
            "**Formatos de credencial:** admite los formatos normalizados para PID y EAA, incluidas las credenciales verificables basadas en SD-JWT y el formato mdoc (ISO 18013-5).",
            "**Conexión a los registros de confianza:** conéctate a las listas de confianza de la UE y a la nueva infraestructura de Access Certificate Authority para validar la autenticidad de la cartera y el registro de las partes usuarias.",
            "**Normas de seguridad:** cumple los requisitos de certificación de los perfiles de protección Common Criteria pertinentes o de las evaluaciones de seguridad equivalentes que definen los actos de ejecución.",
            "**Integración de la QES:** si expides o utilizas firmas electrónicas, asegura que tu infraestructura admita la creación de QES con cartera, incluidos los protocolos de firma a distancia.",
          ],
        },
        { t: "h3", text: "Requisitos organizativos" },
        {
          t: "list",
          items: [
            "**Políticas y procedimientos:** establece políticas documentadas de verificación de identidad, tratamiento de datos, gestión de incidentes y continuidad de negocio, alineadas con eIDAS 2.0.",
            "**Formación del personal:** forma a tu equipo en los flujos de verificación con cartera, en las obligaciones de protección de datos de eIDAS 2.0 y en los procedimientos de notificación de incidentes.",
            "**Gestión de proveedores:** si dependes de terceros para servicios de identidad o infraestructura de confianza, asegura el encaje contractual y operativo con los nuevos requisitos.",
          ],
        },
        { t: "h3", text: "Requisitos jurídicos" },
        {
          t: "list",
          items: [
            "**Registro:** las partes usuarias que accedan a datos de la cartera deben registrarse ante la autoridad competente y declarar qué atributos solicitan y con qué base jurídica cada uno.",
            "**Protección de datos:** alinea el tratamiento de los datos de la cartera con el RGPD, con minimización, limitación de la finalidad y evaluaciones de impacto. eIDAS 2.0 incorpora disposiciones específicas contra el seguimiento: por ejemplo, los identificadores únicos no deben permitir por defecto la correlación entre servicios distintos.",
            "**Evaluación de la conformidad:** los QTSP y los proveedores de cartera deben someterse a evaluaciones de conformidad por organismos acreditados, con auditorías periódicas y revisiones entre pares.",
            "**Marco de responsabilidad:** conoce las disposiciones actualizadas de responsabilidad, que imponen obligaciones claras a proveedores de cartera, QTSP y emisores de EAA por los daños derivados de fallos de sus servicios.",
          ],
        },
        {
          t: "p",
          text: "Para una lectura práctica de estos requisitos en forma de lista, consulta nuestra [lista de comprobación de eIDAS 2.0](/eidas-2-compliance-checklist).",
        },
      ],
    },
    {
      id: "implementation-roadmap",
      label: "Hoja de ruta de implantación",
      heading: "6. Hoja de ruta de implantación",
      blocks: [
        {
          t: "p",
          text: "La implantación funciona por fases. Esta es una hoja de ruta en cinco fases, sacada de proyectos reales.",
        },
        {
          t: "phases",
          items: [
            {
              title: "Análisis de brechas",
              duration: "Duración estimada: de 4 a 8 semanas",
              text: "Evalúa tus procesos actuales de verificación de identidad, tu uso de servicios de confianza y tu infraestructura técnica frente al conjunto completo de requisitos de eIDAS 2.0. Determina qué papeles desempeña tu organización (parte usuaria, QTSP, emisor de EAA) y localiza cada punto en el que aparece la identidad digital. Revisa contratos, relaciones con proveedores y flujos de datos. Entregable: un informe completo de brechas con hallazgos priorizados.",
            },
            {
              title: "Estrategia y planificación",
              duration: "Duración estimada: de 4 a 6 semanas",
              text: "A partir del análisis, define una estrategia de cumplimiento que ponga delante las áreas de mayor impacto. Decide si construir capacidades internas, aliarte con QTSP o adoptar soluciones comerciales. Prepara un plan de proyecto detallado con hitos alineados con los plazos normativos. Asegura presupuesto y respaldo de la dirección. Monta estructuras de gobernanza, incluido un comité de seguimiento y un responsable de cumplimiento designado.",
            },
            {
              title: "Implantación técnica",
              duration: "Duración estimada: de 12 a 24 semanas",
              text: "Ejecuta los cambios técnicos: integra los protocolos de verificación de la EUDIW (OID4VP, mdoc), actualiza los procesos de emisión de credenciales, conéctate a los registros de confianza e implanta los controles exigidos de minimización de datos. Adapta las API, las interfaces y los sistemas de backend a los flujos con cartera. Si eres QTSP, implanta los nuevos tipos de servicio (archivo electrónico, registros) y lleva los servicios existentes a las normas revisadas. Prepara procedimientos alternativos para cuando la verificación con cartera no esté disponible.",
            },
            {
              title: "Pruebas y validación",
              duration: "Duración estimada: de 6 a 12 semanas",
              text: "Haz pruebas de interoperabilidad con las implementaciones de referencia y con los Large-Scale Pilots (LSP). Realiza auditorías de seguridad y pruebas de intrusión contra los perfiles de protección aplicables. Ejecuta pruebas de aceptación con usuarios, para que los flujos con cartera resulten claros y no empeoren la experiencia. Valida el cumplimiento en protección de datos con evaluaciones de impacto y auditorías de RGPD. Documenta todos los resultados para la evaluación de conformidad.",
            },
            {
              title: "Certificación y cumplimiento continuado",
              duration: "Duración estimada: de 4 a 8 semanas al inicio, después de forma continuada",
              text: "Encarga la evaluación formal a un organismo de evaluación de la conformidad acreditado. Presenta la documentación y los expedientes de evidencias que se requieran. Regístrate ante el organismo de supervisión nacional. Una vez certificado, monta un programa de cumplimiento continuado con auditorías periódicas, vigilancia de vulnerabilidades, procedimientos de respuesta a incidentes y seguimiento de los actos de ejecución y delegados que vaya produciendo el marco normativo.",
            },
          ],
        },
        {
          t: "p",
          text: "Desde el arranque hasta la primera certificación, la duración total estimada va de **30 a 58 semanas**, según la complejidad de la organización, la madurez de la infraestructura existente y el número de servicios afectados.",
        },
      ],
    },
    {
      id: "key-deadlines",
      label: "Plazos y calendario",
      heading: "7. Plazos y calendario",
      blocks: [
        {
          t: "p",
          text: "El reglamento fija una serie de hitos para los Estados miembros, los prestadores de servicios de confianza y las partes usuarias. Estas son las fechas principales que conviene seguir.",
        },
        {
          t: "table",
          head: ["Fecha", "Hito"],
          rows: [
            ["Abril de 2024", "El reglamento modificativo se adopta formalmente y se publica en el Diario Oficial de la UE. Entra en vigor 20 días después de la publicación."],
            ["Diciembre de 2024", "Entran en vigor los primeros actos de ejecución, los Reglamentos de Ejecución (UE) 2024/2977 a 2024/2982. Regulan los datos de identificación de la persona, los formatos de las declaraciones, la certificación de la cartera y el registro de las partes usuarias, y ponen en marcha el plazo de 24 meses del artículo 5 bis, apartado 1."],
            ["2025 y 2026", "Concluyen los Large-Scale Pilots (LSP). Las implementaciones de referencia de la cartera maduran y quedan disponibles para pruebas. Los Estados miembros desarrollan sus soluciones nacionales."],
            ["24 de diciembre de 2026", "Los Estados miembros deben proveer a sus ciudadanos y residentes al menos una EUDIW. Entra en vigor la primera oleada de obligaciones de aceptación."],
            ["2027 y en adelante", "Aplicación plena de todas las obligaciones de aceptación de las partes usuarias. Nuevos actos de ejecución. Revisión periódica y posibles modificaciones adicionales."],
          ],
        },
        {
          t: "p",
          text: "Para una visión más detallada y actualizada de todos los hitos normativos, visita nuestra página [Calendario eIDAS 2.0](/eidas-2-timeline).",
        },
      ],
    },
    {
      id: "common-challenges",
      label: "Dificultades habituales",
      heading: "8. Dificultades habituales",
      blocks: [
        {
          t: "p",
          text: "Estas son las dificultades que aparecen con más frecuencia al prepararse para eIDAS 2.0, y cómo afrontarlas.",
        },
        { t: "h3", text: "Incertidumbre normativa" },
        {
          t: "p",
          text: "Muchos actos de ejecución y delegados siguen en elaboración, lo que deja incertidumbre sobre los requisitos técnicos exactos. **Cómo afrontarlo:** sigue de cerca el desarrollo del ARF, participa en las consultas del sector y construye arquitecturas modulares capaces de adaptarse a especificaciones que cambian. Toma como referencia los resultados del EU Toolbox Expert Group y de los Large-Scale Pilots.",
        },
        { t: "h3", text: "Integración de sistemas heredados" },
        {
          t: "p",
          text: "Las organizaciones con sistemas de verificación maduros construidos sobre protocolos antiguos (SAML 2.0, API propietarias, procesos manuales) afrontan un esfuerzo de integración considerable. **Cómo afrontarlo:** adopta una capa de abstracción o una plataforma de orquestación de identidad que medie entre los sistemas existentes y los nuevos flujos con cartera. Prevé operación en paralelo durante la transición en lugar de un corte abrupto.",
        },
        { t: "h3", text: "Interoperabilidad transfronteriza" },
        {
          t: "p",
          text: "A pesar del marco armonizado, la interoperabilidad práctica entre 27 implementaciones nacionales tardará en madurar. **Cómo afrontarlo:** prueba pronto con varias implementaciones de referencia. Participa en programas piloto transfronterizos. Diseña la integración con independencia de la cartera concreta, apoyada en los protocolos normalizados del ARF y no en una solución nacional en particular.",
        },
        { t: "h3", text: "Diseño de la experiencia de uso" },
        {
          t: "p",
          text: "Los flujos con cartera introducen patrones de interacción nuevos que, mal diseñados, confunden a los usuarios. Códigos QR, enlaces profundos, pantallas de consentimiento y divulgación selectiva añaden pasos a lo que antes era un simple formulario. **Cómo afrontarlo:** invierte pronto en investigación de UX y prototipos. Haz pruebas de usabilidad con usuarios reales. Sigue las pautas de diseño que publican los Large-Scale Pilots.",
        },
        { t: "h3", text: "Preparación organizativa" },
        {
          t: "p",
          text: "El cumplimiento de eIDAS 2.0 no es solo un proyecto tecnológico: exige revisión jurídica, rediseño de procesos, formación y respaldo de la dirección. **Cómo afrontarlo:** monta pronto un grupo de trabajo transversal con jurídico, cumplimiento, producto, ingeniería y operaciones. Asegura una partida presupuestaria propia y un padrino en la dirección. Trátalo como un programa estratégico, no como un proyecto de TI puntual.",
        },
        { t: "h3", text: "Escasez de recursos" },
        {
          t: "p",
          text: "Hay pocos profesionales con experiencia en eIDAS. El cruce entre normas de identidad digital, criptografía, derecho de la Unión y seguridad móvil es un terreno de nicho. **Cómo afrontarlo:** valora recurrir a consultoras especializadas para el análisis y la estrategia. Construye conocimiento interno de forma gradual con formación dirigida. Aprovecha las implementaciones de referencia y las herramientas de código abierto que ofrece la UE para reducir el esfuerzo de desarrollo.",
        },
        {
          t: "p",
          text: "¿Tienes dudas sobre estos puntos? Nuestra [página de preguntas frecuentes](/faq) responde a las consultas más habituales sobre el cumplimiento de eIDAS 2.0.",
        },
      ],
    },
    {
      id: "how-to-start",
      label: "Por dónde empezar",
      heading: "9. Por dónde empezar",
      blocks: [
        {
          t: "p",
          text: "Si has llegado hasta aquí, ya tienes clara la magnitud y la urgencia de eIDAS 2.0. Estos son los primeros pasos concretos que puedes dar hoy.",
        },
        {
          t: "steps",
          items: [
            "**Haz la evaluación de preparación.** Nuestra [evaluación gratuita de preparación para eIDAS 2.0](/assessment) muestra rápido dónde está hoy tu organización y produce un informe personalizado con los pasos recomendados.",
            "**Identifica tu papel según el reglamento.** Determina si tu organización es sobre todo parte usuaria, prestador de servicios de confianza, emisor de EAA o una combinación. De ahí se deriva qué requisitos te aplican.",
            "**Localiza tus puntos de identidad actuales.** Documenta cada lugar del recorrido del cliente o del usuario donde haya verificación de identidad, autenticación o firma electrónica. Ese inventario es la base del análisis de brechas.",
            "**Reúne un equipo transversal.** Junta a jurídico, cumplimiento, producto, ingeniería y operaciones. eIDAS 2.0 no es solo un reto tecnológico: toca políticas, procesos y experiencia de uso.",
            "**Repasa la lista de comprobación.** Usa nuestra [lista de comprobación de eIDAS 2.0](/eidas-2-compliance-checklist) para tener una visión estructurada de cada requisito y seguir tu progreso.",
            "**Mantente al día.** Vigila el [calendario de eIDAS 2.0](/eidas-2-timeline) por si cambian los plazos. Sigue los actos de ejecución en cuanto se publiquen. Participa en grupos de trabajo del sector y en programas piloto.",
            "**Valora apoyo experto.** Si en casa falta experiencia en identidad digital y derecho de la Unión, una consultora especializada puede acelerar la preparación y reducir el riesgo.",
          ],
        },
      ],
    },
  ],
  related: {
    heading: "Recursos relacionados",
    items: [
      { href: "/guide/eudiw-preparation", label: "Guía de preparación para la EUDIW", desc: "Hoja de ruta técnica para integrar la cartera." },
      { href: "/eidas-2-timeline", label: "Calendario eIDAS 2.0", desc: "Fechas clave e hitos de aplicación." },
      { href: "/eidas-2-compliance-checklist", label: "Lista de comprobación de eIDAS 2.0", desc: "Sigue tu progreso paso a paso." },
      { href: "/assessment", label: "Evaluación de preparación", desc: "Una puntuación personalizada y un plan de acción." },
      { href: "/faq", label: "Preguntas frecuentes", desc: "Respuestas a las dudas más comunes sobre eIDAS 2.0." },
      { href: "/glossary", label: "Glosario", desc: "Definiciones de los términos clave de eIDAS 2.0." },
    ],
  },
  cta: {
    headline: "¿Listo para empezar con eIDAS 2.0?",
    description:
      "Con la evaluación gratuita de preparación entiendes tu situación de cumplimiento actual y obtienes una hoja de ruta personalizada para implantar eIDAS 2.0.",
    button: "Hacer la evaluación",
  },
};

export const GUIDE_CONTENT: Record<Locale, GuideContent> = { en, de, it, es };
