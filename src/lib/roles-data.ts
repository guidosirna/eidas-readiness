export interface RolePage {
  slug: string;
  title: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  sections: {
    heading: string;
    content: string;
  }[];
  keyResponsibilities: string[];
  complianceActions: string[];
  relatedRoles: string[];
  relatedIndustries: string[];
}

export const roles: RolePage[] = [
  {
    slug: "cto-technical-lead",
    title: "CTOs and Technical Leaders",
    shortDescription:
      "How eIDAS 2.0 transforms the technical landscape for CTOs, VPs of Engineering, and technical architects responsible for identity infrastructure.",
    metaTitle: "eIDAS 2.0 for CTOs and Technical Leaders | Readiness Guide",
    metaDescription:
      "How eIDAS 2.0 affects CTOs and technical leaders. EUDIW integration, protocol requirements, and infrastructure changes for compliance.",
    heroTagline:
      "Lead your organization's technical transformation for the EU Digital Identity era",
    sections: [
      {
        heading: "Why eIDAS 2.0 Matters for CTOs",
        content:
          "eIDAS 2.0 is not a minor regulatory update. It is a structural shift in how digital identity works across the European Union. For CTOs and technical leaders, this regulation creates new technical obligations that reach deep into your authentication stack, your onboarding flows, and your data verification pipelines. The European Digital Identity Wallet (EUDIW) will become the primary way EU citizens prove their identity online, and organizations in mandatory acceptance categories, including banks, large online platforms, and public services, must integrate with it.\n\nThe regulation also redefines how trust is established between systems. Rather than relying solely on federated identity providers or username-password combinations, your infrastructure must support cryptographically verifiable credentials presented directly by users from their wallets. This shift from centralized to holder-centric identity changes the architecture of every service that verifies user identity.",
      },
      {
        heading: "Technical Requirements Overview",
        content:
          "The EUDIW ecosystem is built on specific protocols and formats that your systems must support. The Architecture Reference Framework (ARF) mandates two credential formats: SD-JWT (Selective Disclosure JSON Web Token) for web-based interactions, and mdoc (ISO 18013-5) for proximity and offline verification. Presentation and issuance rely on the OpenID for Verifiable Credentials (OpenID4VC) protocol suite, including OpenID4VP for receiving credential presentations and OpenID4VCI for issuing credentials.\n\nYour technical team must also implement selective disclosure verification, where users present only the specific attributes your service requires rather than full credentials. This means your verification logic must handle partial credential payloads, validate cryptographic proofs on individual claims, and enforce data minimization at the protocol level. Support for both same-device and cross-device flows (such as QR code scanning) is required for a complete integration.",
      },
      {
        heading: "Infrastructure Changes Needed",
        content:
          "Wallet integration demands updates to your Public Key Infrastructure (PKI). Your systems must validate credentials against the EU Trusted Lists, which are machine-readable registries of Qualified Trust Service Providers. This requires implementing automated Trusted List retrieval, caching, and validation logic. You will also need to verify wallet attestations, cryptographic proofs that confirm the wallet software itself is genuine and certified by its issuing Member State.\n\nOn the device and backend side, consider how secure elements and trusted execution environments factor into your architecture. If your organization issues credentials, you must implement QTSP-grade security for signing operations. Key management, certificate lifecycle management, and revocation checking become critical components. Your identity platform must also support the registration process required for relying parties, including declaring which attributes you request and for what purpose.",
      },
      {
        heading: "Integration Roadmap",
        content:
          "A phased approach is essential. In the first phase, conduct a technical gap analysis: map your current identity infrastructure against ARF requirements and identify every integration point where wallet-based identity will replace or supplement existing flows. In the second phase, build a sandbox environment and implement OpenID4VC protocol handling using reference implementations from the Large-Scale Pilots. Test against multiple wallet providers to ensure interoperability.\n\nIn the third phase, integrate SD-JWT and mdoc parsing into your production verification pipeline. Implement Trusted List validation and wallet attestation checking. In the final phase, deploy to production with monitoring, logging, and audit trails that satisfy both technical and regulatory requirements. Plan for iterative updates, as the ARF is a living document and implementing acts will continue to evolve through 2026 and 2027.",
      },
      {
        heading: "Security Considerations",
        content:
          "The EUDIW introduces new attack surfaces that your security team must address. Wallet attestation verification prevents accepting credentials from cloned or tampered wallet applications. Replay protection through nonces and session binding is essential for all credential presentations. Your systems must also handle revocation checking for both credentials and the certificates backing them, using mechanisms defined in the ARF.\n\nData minimization is both a privacy requirement and a security best practice under eIDAS 2.0. Request only the attributes strictly necessary for your service, and ensure your systems do not store credential data beyond what is legally justified. Implement response encryption for sensitive attribute exchanges, and ensure your relying party registration accurately reflects your data processing activities. Cryptographic compliance with ETSI standards (particularly EN 319 401 and related specifications) is mandatory for organizations operating as trust service providers.",
      },
    ],
    keyResponsibilities: [
      "Evaluate current identity infrastructure against EUDIW requirements",
      "Plan wallet integration architecture across all customer-facing services",
      "Implement OpenID4VC and mDL protocols for credential issuance and verification",
      "Establish secure credential verification pipelines with Trusted List validation",
      "Coordinate with QTSPs for trust service integration and credential issuance",
      "Ensure cryptographic compliance with ETSI standards and ARF specifications",
      "Build monitoring and audit systems for wallet-based identity transactions",
      "Lead cross-functional coordination between engineering, security, and compliance teams",
    ],
    complianceActions: [
      "Conduct a technical gap analysis comparing current identity stack to ARF requirements",
      "Set up a sandbox environment with EUDIW reference wallet implementations for testing",
      "Implement SD-JWT and mdoc credential parsing and verification in your identity pipeline",
      "Integrate Trusted List validation and wallet attestation checking into production systems",
      "Register as a relying party with the relevant national supervisory body",
      "Establish a continuous monitoring process for ARF updates and implementing act changes",
    ],
    relatedRoles: ["compliance-officer", "product-manager", "legal-team"],
    relatedIndustries: [
      "financial-services",
      "healthcare",
      "government-public-sector",
      "telecommunications",
      "ecommerce-platforms",
      "travel-transport",
    ],
  },
  {
    slug: "compliance-officer",
    title: "Compliance Officers",
    shortDescription:
      "How eIDAS 2.0 creates new regulatory obligations for compliance officers managing identity verification, data protection, and relying party requirements.",
    metaTitle: "eIDAS 2.0 for Compliance Officers | Regulatory Guide",
    metaDescription:
      "Complete guide for compliance officers preparing for eIDAS 2.0. Understand mandatory acceptance rules, reporting requirements, and regulatory obligations.",
    heroTagline:
      "Navigate new regulatory obligations and mandatory acceptance requirements",
    sections: [
      {
        heading: "Regulatory Landscape Changes",
        content:
          "eIDAS 2.0 (Regulation (EU) 2024/1183) fundamentally expands the regulatory perimeter for digital identity in Europe. Unlike the original 2014 regulation, which primarily addressed trust services and voluntary eID scheme notification, eIDAS 2.0 creates binding obligations for private sector organizations. If your organization falls into a mandatory acceptance category, compliance is not optional. The regulation intersects with multiple existing regulatory frameworks, including GDPR, the Digital Services Act (DSA), PSD2, and anti-money laundering directives.\n\nFor compliance officers, this means a new layer of obligations that must be mapped against your existing compliance program. You must assess whether your organization qualifies as a mandatory relying party, understand the data protection implications of wallet-based identity verification, and establish processes for relying party registration, attribute request management, and regulatory reporting.",
      },
      {
        heading: "Mandatory Acceptance Rules",
        content:
          "eIDAS 2.0 defines specific categories of organizations that must accept the European Digital Identity Wallet when users choose to present it. Very large online platforms, as defined under the Digital Services Act, must accept the wallet for user authentication. Financial institutions performing customer due diligence under anti-money laundering regulations must accept it for identity verification. Healthcare providers must accept it when EU or national law requires patient identity verification. Public sector bodies must accept it for access to digital public services.\n\nNon-compliance carries consequences. Member States must establish penalty frameworks for organizations that fail to meet their acceptance obligations. The specific penalties will vary by Member State, but the regulation requires them to be effective, proportionate, and dissuasive. Compliance officers must monitor national transposition measures to understand the specific enforcement landscape in each jurisdiction where their organization operates.",
      },
      {
        heading: "Data Protection Alignment",
        content:
          "The intersection of eIDAS 2.0 and GDPR is one of the most critical areas for compliance officers. Every wallet-based identity transaction involves personal data processing, and GDPR obligations apply in full. The good news is that eIDAS 2.0 was designed with GDPR alignment in mind. Selective disclosure enables data minimization by allowing users to share only the specific attributes a relying party needs. The regulation explicitly requires relying parties to request only attributes that are strictly necessary for the service.\n\nHowever, new complexities arise. You must establish a valid legal basis for processing wallet-derived personal data, whether that is contractual necessity, legal obligation, or legitimate interest. Privacy impact assessments should be conducted for wallet integration projects. The user consent mechanism built into the wallet (where users approve each attribute request) complements but does not replace your GDPR obligations. Your privacy notices must be updated to cover wallet-based data collection, and your data retention policies must account for credential verification records.",
      },
      {
        heading: "Reporting and Audit Requirements",
        content:
          "eIDAS 2.0 introduces specific audit and reporting obligations for relying parties. Organizations must maintain records of their wallet-based identity verification transactions, including what attributes were requested, when, and for what purpose. These records must be available for inspection by the national supervisory body. If your organization also operates as a trust service provider or attribute provider, additional audit requirements apply, including regular conformity assessments by accredited bodies.\n\nYou should establish internal audit procedures for wallet-based identity processes. Track compliance metrics such as the ratio of attribute requests to actual service requirements (to verify data minimization), response times for supervisory body inquiries, and incident reporting completeness. Build a compliance calendar that accounts for the phased implementation timeline, with particular attention to the deadlines set in implementing acts for your sector and jurisdiction.",
      },
      {
        heading: "Relying Party Registration Process",
        content:
          "Before your organization can access EUDIW data, you must register as a relying party with the supervisory body in the Member State where you are established. The registration requires you to declare which attributes you intend to request from wallet holders and the specific purposes for which you need them. This declaration is a binding commitment: requesting attributes beyond what you have registered is a compliance violation.\n\nThe registration process serves as a privacy safeguard and an accountability mechanism. Supervisory bodies will review registrations to ensure that attribute requests are proportionate to the stated service purpose. Compliance officers should prepare by mapping every service touchpoint where wallet identity will be used, documenting the minimum necessary attributes for each use case, and drafting the registration declaration. Organizations operating across multiple Member States may need to register in each jurisdiction, depending on national transposition approaches.",
      },
      {
        heading: "Cross-Border Compliance",
        content:
          "One of the core principles of eIDAS 2.0 is cross-border recognition: a wallet issued in any Member State must be accepted across all Member States. For compliance officers at multinational organizations, this simplifies some aspects of identity verification (one wallet standard replaces 27 national approaches) but introduces coordination challenges. National transposition of the regulation will vary, penalty frameworks will differ, and supervisory body expectations may diverge.\n\nBuild a jurisdictional compliance map that tracks implementation timelines, penalty frameworks, and supervisory body requirements for each Member State where your organization operates. Establish relationships with legal counsel in key jurisdictions and participate in industry working groups that monitor national transposition. The phased rollout of implementing acts means that compliance requirements will emerge incrementally through 2026 and 2027, requiring continuous monitoring and adaptation of your compliance program.",
      },
    ],
    keyResponsibilities: [
      "Determine whether the organization falls into a mandatory wallet acceptance category",
      "Map eIDAS 2.0 obligations against existing compliance frameworks (GDPR, PSD2, AML, DSA)",
      "Oversee the relying party registration process with national supervisory bodies",
      "Ensure data minimization in attribute request configurations",
      "Establish audit trails for wallet-based identity verification transactions",
      "Monitor national transposition measures and penalty frameworks across all operating jurisdictions",
      "Conduct data protection impact assessments for wallet integration projects",
      "Coordinate with legal, IT, and business teams on compliance implementation",
    ],
    complianceActions: [
      "Complete a regulatory impact assessment to classify your organization under eIDAS 2.0 categories",
      "Map all service touchpoints requiring identity verification and define minimum attribute sets for each",
      "Update privacy notices, data processing records, and retention policies for wallet-based data",
      "Prepare and submit relying party registration declarations to relevant supervisory bodies",
      "Build a cross-jurisdictional compliance calendar tracking implementation deadlines and milestones",
      "Establish internal audit procedures and compliance metrics for wallet-based identity processes",
    ],
    relatedRoles: ["cto-technical-lead", "product-manager", "legal-team"],
    relatedIndustries: [
      "financial-services",
      "healthcare",
      "government-public-sector",
      "telecommunications",
      "ecommerce-platforms",
      "travel-transport",
    ],
  },
  {
    slug: "product-manager",
    title: "Product Managers",
    shortDescription:
      "How eIDAS 2.0 and the European Digital Identity Wallet create new product opportunities and require changes to user onboarding, verification, and authentication flows.",
    metaTitle: "eIDAS 2.0 for Product Managers | Feature Planning Guide",
    metaDescription:
      "How product managers should prepare for eIDAS 2.0 and EUDIW. Plan wallet-based identity features, user flows, and credential verification experiences.",
    heroTagline:
      "Design the next generation of identity-aware products and services",
    sections: [
      {
        heading: "How EUDIW Changes User Identity",
        content:
          "The European Digital Identity Wallet gives every EU citizen a government-backed digital identity on their smartphone. This is not another social login or federated identity provider. It is a cryptographically verifiable credential that carries the same legal weight as a physical ID document. For product managers, this means the fundamental assumptions behind user identity are changing. Users will be able to prove their identity, age, qualifications, and other attributes instantly, with high assurance, and without uploading documents or completing manual verification steps.\n\nThis shift eliminates many of the friction points that product teams have worked around for years. Identity verification that currently takes days can happen in seconds. Age checks that rely on self-declaration become cryptographically proven. KYC processes that require document uploads and manual review become automated wallet presentations. Understanding this transformation is essential for planning your product roadmap.",
      },
      {
        heading: "Product Implications",
        content:
          "The most immediate product impact is on user onboarding. If your product requires identity verification, KYC, or age checks, the wallet offers a dramatically faster and more reliable flow. Instead of asking users to upload a photo of their passport, take a selfie, and wait for manual review, you can request verified attributes directly from their wallet. The user approves the request on their device, and your system receives cryptographically signed data in milliseconds.\n\nBeyond onboarding, consider how verified attributes change your feature set. A financial product can instantly verify income or account ownership attestations. An educational platform can verify degree credentials. A marketplace can verify seller identity without manual document review. Products that previously could not justify the cost of strong identity verification can now offer it as a lightweight, user-friendly feature. This opens new possibilities for trust-dependent features, premium verification tiers, and streamlined compliance workflows.",
      },
      {
        heading: "User Experience Considerations",
        content:
          "Wallet-based identity introduces new interaction patterns that product managers must design carefully. The consent flow is central: when your service requests attributes from a user's wallet, the wallet application displays exactly what data is being requested and by whom. The user must explicitly approve or decline. This transparency is a regulatory requirement, but it is also a UX opportunity. Clear, honest attribute requests build user trust.\n\nDesign for selective disclosure. Rather than requesting a user's full identity, request only the specific attributes you need. Asking for date of birth when you only need an over-18 confirmation will feel intrusive to users who understand what selective disclosure enables. Consider cross-device flows, where users scan a QR code on a desktop screen with their phone wallet. These flows must be smooth and well-guided. Also plan for fallback scenarios: not all users will have a wallet immediately, so your product must gracefully support both wallet-based and traditional identity flows during the transition period.",
      },
      {
        heading: "Feature Prioritization Framework",
        content:
          "Prioritize wallet integration features based on three factors: regulatory urgency, user impact, and competitive differentiation. If your organization is in a mandatory acceptance category (large online platform, financial institution, healthcare provider, or public service), regulatory urgency is high and wallet acceptance is a compliance requirement with a fixed deadline. Start with the minimum viable integration: accept PID for basic identity verification in your most critical user flow.\n\nNext, assess user impact. Which verification touchpoints cause the most friction, abandonment, or support tickets? These are your highest-value wallet integration points. Finally, consider competitive advantage. Early adopters of wallet-based onboarding can offer significantly faster and more convenient experiences than competitors still relying on document-upload flows. Build a phased roadmap: basic PID acceptance first, then selective disclosure for specific attributes, then advanced use cases like qualified electronic signatures and attribute-based access control.",
      },
      {
        heading: "Competitive Advantage of Early Adoption",
        content:
          "Organizations that integrate with the EUDIW early will gain measurable advantages. Conversion rates improve when onboarding friction drops from days to seconds. Customer acquisition costs decrease when manual identity review is replaced by automated wallet verification. Trust and brand perception benefit from offering a government-backed, privacy-preserving identity experience rather than asking users to hand over document photos to a third-party verification service.\n\nEarly adoption also provides a learning advantage. The wallet ecosystem will evolve rapidly as implementing acts are finalized and Large-Scale Pilots deliver results. Organizations that begin integration early will build institutional knowledge, identify edge cases, and refine their user experience before competitors enter the market. They will also have the opportunity to shape the ecosystem by participating in pilot programs and providing feedback on the Architecture Reference Framework. In a market where trust is a differentiator, being among the first to offer wallet-based identity is a strategic asset.",
      },
    ],
    keyResponsibilities: [
      "Map all product touchpoints requiring identity verification or attribute checks",
      "Define minimum attribute sets for each verification use case to support data minimization",
      "Design wallet-based onboarding, authentication, and verification user flows",
      "Plan fallback experiences for users who do not yet have an EUDIW",
      "Coordinate with engineering on OpenID4VC integration and credential format support",
      "Develop a phased feature roadmap for wallet integration aligned with regulatory timelines",
      "Monitor Large-Scale Pilot results and ARF updates for new use cases and capabilities",
    ],
    complianceActions: [
      "Audit all current identity verification flows and map them to wallet-based alternatives",
      "Create user flow prototypes for wallet-based onboarding with selective disclosure",
      "Define attribute request specifications for each product use case (minimum necessary data)",
      "Build a transition plan supporting both traditional and wallet-based identity during rollout",
      "Establish metrics to measure wallet adoption, conversion improvement, and user satisfaction",
    ],
    relatedRoles: ["cto-technical-lead", "compliance-officer", "legal-team"],
    relatedIndustries: [
      "financial-services",
      "healthcare",
      "government-public-sector",
      "telecommunications",
      "ecommerce-platforms",
      "travel-transport",
    ],
  },
  {
    slug: "legal-team",
    title: "Legal Teams",
    shortDescription:
      "How eIDAS 2.0 changes the legal landscape for organizations, including liability frameworks, data protection obligations, and contractual considerations for wallet integration.",
    metaTitle: "eIDAS 2.0 for Legal Teams | Legal Compliance Guide",
    metaDescription:
      "Legal implications of eIDAS 2.0 for organizations. Understand liability frameworks, data protection alignment, and relying party legal obligations.",
    heroTagline:
      "Understand liability frameworks and legal obligations under the new regulation",
    sections: [
      {
        heading: "Legal Framework Changes from eIDAS 1.0",
        content:
          "eIDAS 2.0 (Regulation (EU) 2024/1183) represents a fundamental expansion of the legal obligations surrounding digital identity in the European Union. The original 2014 regulation established a framework primarily focused on trust services (electronic signatures, seals, timestamps) and voluntary mutual recognition of national eID schemes. eIDAS 2.0 goes far beyond this by creating mandatory obligations for private sector organizations, introducing the European Digital Identity Wallet as a legally recognized identity instrument, and expanding the catalogue of regulated trust services.\n\nAs a directly applicable EU regulation, eIDAS 2.0 does not require national transposition for its core provisions. However, Member States will adopt implementing measures for areas such as penalty frameworks, supervisory body designation, and sector-specific requirements. Legal teams must track both the regulation itself and the emerging national implementation landscape to provide accurate compliance guidance.",
      },
      {
        heading: "Liability Implications",
        content:
          "eIDAS 2.0 establishes a layered liability framework. Relying parties bear liability for failures in their verification processes. If your organization accepts wallet credentials but fails to properly validate them (for example, by not checking revocation status or not verifying wallet attestations), you bear responsibility for any resulting harm. Qualified Trust Service Providers bear liability for the accuracy of the qualified attestations they issue, with a presumption of liability unless they can demonstrate they acted without negligence.\n\nCross-border recognition of the wallet means that liability questions can span multiple jurisdictions. A wallet issued in one Member State, presenting credentials from a QTSP in a second Member State, to a relying party in a third Member State, creates a multi-jurisdictional liability chain. Legal teams must analyze the applicable liability rules for each link in this chain and ensure that contractual arrangements with technology vendors, trust service providers, and integration partners appropriately allocate risk.",
      },
      {
        heading: "Data Protection Alignment",
        content:
          "Every wallet-based identity transaction processes personal data, making GDPR compliance inseparable from eIDAS 2.0 implementation. Legal teams must ensure that a valid legal basis exists for each category of personal data received from wallets. For mandatory acceptance scenarios (KYC, public service access), legal obligation under Article 6(1)(c) GDPR may apply. For other scenarios, contractual necessity or legitimate interest analysis is required.\n\nThe regulation's emphasis on selective disclosure and data minimization directly supports GDPR's data minimization principle (Article 5(1)(c)). However, legal teams must ensure this is reflected in practice: attribute request configurations must be limited to what is strictly necessary, and internal processes must prevent scope creep. Privacy by design requirements under GDPR Article 25 apply to wallet integration architecture. Data Protection Impact Assessments (DPIAs) under Article 35 should be conducted for any large-scale wallet-based identity processing. Record-keeping obligations under Article 30 must cover wallet-derived data processing activities.",
      },
      {
        heading: "Contractual Considerations",
        content:
          "Wallet integration involves multiple contractual relationships that legal teams must structure carefully. Contracts with technology vendors implementing wallet integration should include clear allocation of liability for verification failures, security breach responsibilities, and compliance obligations. Service level agreements should address availability and performance requirements for credential verification services.\n\nIf your organization works with Qualified Trust Service Providers for credential issuance or verification, contractual terms must reflect the regulatory requirements applicable to QTSPs, including their liability regime and the legal presumptions attached to qualified services. Data processing agreements under GDPR Article 28 are required for any vendor that processes personal data from wallet transactions on your behalf. Review existing terms of service and user agreements to ensure they accommodate wallet-based identity verification, including disclosures about what data is collected, how it is used, and how long it is retained.",
      },
      {
        heading: "Dispute Resolution Mechanisms",
        content:
          "eIDAS 2.0 requires Member States to establish mechanisms for resolving disputes related to the regulation's application. For relying parties, this means understanding the available channels for resolving issues such as: disputed identity verifications, questions about the validity of wallet-presented credentials, disagreements about the scope of mandatory acceptance obligations, and complaints about data handling by other ecosystem participants.\n\nLegal teams should establish internal procedures for handling identity verification disputes before they escalate. Document your verification process thoroughly, maintain audit trails of all wallet transactions, and implement clear escalation paths for contested verifications. Consider how existing dispute resolution clauses in your contracts interact with the eIDAS 2.0 framework. For cross-border disputes, the regulation's principle of mutual recognition means that the legal validity of wallet credentials issued in another Member State cannot generally be challenged, but procedural questions about verification standards and liability may still arise.",
      },
      {
        heading: "Legal Risk Assessment Checklist",
        content:
          "Legal teams should conduct a structured risk assessment covering the following areas. First, classification: determine whether your organization falls into a mandatory acceptance category and which specific obligations apply. Second, liability mapping: identify all points in your identity verification flow where liability could arise and ensure appropriate controls and risk allocation. Third, data protection: verify that valid legal bases, DPIAs, processing records, and privacy notices are in place for all wallet-related data processing.\n\nFourth, contractual readiness: review all vendor, partner, and customer-facing agreements for compatibility with eIDAS 2.0 requirements. Fifth, jurisdictional analysis: for organizations operating in multiple Member States, map the national implementation landscape and identify any divergences in penalty frameworks or sector-specific requirements. Sixth, regulatory monitoring: establish a process for tracking implementing acts, delegated acts, and national transposition measures as they are published. The regulation's phased implementation means new obligations will emerge throughout 2026 and 2027.",
      },
    ],
    keyResponsibilities: [
      "Classify the organization's obligations under eIDAS 2.0 mandatory acceptance rules",
      "Analyze liability exposure across the wallet credential verification chain",
      "Ensure GDPR alignment for all wallet-based personal data processing activities",
      "Review and update contracts with vendors, QTSPs, and integration partners",
      "Advise on relying party registration declarations and attribute request scope",
      "Monitor implementing acts, delegated acts, and national transposition measures",
      "Establish internal dispute resolution procedures for wallet-related identity issues",
    ],
    complianceActions: [
      "Conduct a legal classification analysis to determine mandatory acceptance obligations",
      "Perform a liability mapping exercise covering all wallet interaction points",
      "Complete Data Protection Impact Assessments for wallet integration projects",
      "Review and update all relevant contracts, terms of service, and data processing agreements",
      "Prepare a jurisdictional compliance matrix for all Member States where the organization operates",
      "Establish a regulatory monitoring process for eIDAS 2.0 implementing acts and national measures",
    ],
    relatedRoles: ["cto-technical-lead", "compliance-officer", "product-manager"],
    relatedIndustries: [
      "financial-services",
      "healthcare",
      "government-public-sector",
      "telecommunications",
      "ecommerce-platforms",
      "travel-transport",
    ],
  },
];

export function getRoleBySlug(slug: string): RolePage | undefined {
  return roles.find((r) => r.slug === slug);
}
