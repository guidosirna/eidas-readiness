export interface IndustryPage {
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
  keyRequirements: string[];
  complianceTimeline: string[];
  useCases: string[];
  relatedIndustries: string[];
  relatedRoles: string[];
}

export const industries: IndustryPage[] = [
  {
    slug: "financial-services",
    title: "Financial Services",
    shortDescription:
      "How eIDAS 2.0 and the European Digital Identity Wallet transform customer onboarding, authentication, and regulatory compliance for banks, payment providers, and fintechs.",
    metaTitle: "eIDAS 2.0 for Financial Services | Banking Compliance Guide",
    metaDescription:
      "How eIDAS 2.0 and EUDIW impact banks, payment providers, and fintechs. Customer onboarding, strong authentication, and KYC requirements explained.",
    heroTagline:
      "Transform customer onboarding and authentication in the digital identity era",
    sections: [
      {
        heading: "Impact on Banking and Finance",
        content:
          "Financial services is one of the sectors most directly affected by eIDAS 2.0. The regulation explicitly designates financial institutions performing customer due diligence under anti-money laundering rules as mandatory relying parties. This means banks, payment institutions, electronic money institutions, and investment firms must accept the European Digital Identity Wallet when customers choose to present it for identity verification. This is not a future possibility; it is a binding legal obligation with defined implementation deadlines.\n\nThe impact extends beyond compliance. The EUDIW fundamentally changes the economics of customer onboarding, identity verification, and ongoing authentication. Processes that currently cost financial institutions significant amounts per customer in manual verification and document handling can be replaced by instant, cryptographically verified wallet presentations. Institutions that adapt quickly will gain a measurable competitive advantage in customer acquisition speed and operational efficiency.",
      },
      {
        heading: "Customer Onboarding Changes",
        content:
          "Know Your Customer (KYC) processes are the most immediate area of transformation. Current onboarding flows typically require customers to upload identity documents, complete video verification or selfie matching, and wait for manual review. These processes generate friction that causes significant abandonment rates, particularly on mobile. With the EUDIW, onboarding becomes a single wallet presentation: the customer approves a request on their device, and the bank receives government-verified Person Identification Data (PID) in a cryptographically signed credential.\n\nRemote identity verification through the wallet meets the high Level of Assurance required for financial services, satisfying both eIDAS 2.0 and anti-money laundering requirements. The wallet also enables ongoing identity re-verification without repeating the full KYC process. Financial institutions can request updated attestations from the wallet at any time, supporting continuous due diligence obligations. For cross-border account opening, the wallet eliminates the complexity of verifying foreign identity documents manually.",
      },
      {
        heading: "Strong Customer Authentication",
        content:
          "The EUDIW intersects directly with PSD2 strong customer authentication (SCA) requirements. PSD2 mandates that payment service providers authenticate customers using at least two of three factors: knowledge, possession, and inherence. The wallet, as a secure application on the user's device with cryptographic key binding and biometric unlock, naturally satisfies the possession and inherence factors. Combined with a PIN or password, it provides a complete SCA mechanism.\n\nThis convergence creates an opportunity to unify identity verification and transaction authentication into a single instrument. Rather than maintaining separate systems for onboarding (KYC) and ongoing authentication (SCA), financial institutions can use the wallet for both. Several Large-Scale Pilots, notably NOBID and POTENTIAL, are testing wallet-based payment authentication flows. The practical result is reduced infrastructure complexity, lower operational costs, and a smoother customer experience that replaces multiple authentication apps and SMS codes with a single wallet interaction.",
      },
      {
        heading: "Payment Services Implications",
        content:
          "For payment service providers, the wallet opens new possibilities for payment initiation and authorization. The EUDIW can serve as a verified identity layer for payment transactions, enabling payment initiation services to rely on wallet-based authentication rather than screen scraping or redirect-based bank authentication. This aligns with the direction of PSD3 and the proposed Payment Services Regulation, which continue to strengthen requirements for secure authentication and customer identity verification.\n\nOpen banking APIs can be enhanced with wallet-based identity: third-party providers can verify customer identity through the wallet before accessing account information, adding an additional layer of trust to the open banking ecosystem. For cross-border payments, the wallet provides a standardized identity verification mechanism that works across all EU Member States, simplifying compliance for payment providers operating in multiple jurisdictions. Wallet-based identity also enables more granular consent management, where customers authorize specific payment-related data sharing through the wallet's selective disclosure capabilities.",
      },
      {
        heading: "Anti-Money Laundering Considerations",
        content:
          "The establishment of the Anti-Money Laundering Authority (AMLA) alongside eIDAS 2.0 creates a reinforcing regulatory dynamic for financial institutions. AMLA will oversee how financial entities implement customer due diligence, and the wallet's role as a mandatory acceptance instrument for identity verification directly affects AML compliance processes. Wallet-based KYC provides government-verified identity data at the highest Level of Assurance, which may reduce the residual risk in customer identification and simplify risk scoring.\n\nHowever, financial institutions must adapt their AML systems to handle wallet-based identity verification alongside traditional methods during the transition period. Transaction monitoring systems should be updated to flag anomalies in wallet-based authentication patterns. Suspicious activity reporting procedures must account for wallet-based identity scenarios. Institutions should also consider how Qualified Electronic Attestations of Attributes (QEAAs) could enhance enhanced due diligence, for example by receiving verified attestations about a customer's source of funds or employment status directly through the wallet.",
      },
      {
        heading: "Investment Services and MiFID II Intersection",
        content:
          "Investment firms and wealth management platforms subject to MiFID II face specific identity verification requirements for client onboarding, suitability assessments, and transaction reporting. The EUDIW can streamline the client identification process required under MiFID II's know-your-client rules. Verified professional qualification attestations, such as proof of accredited investor status, could be delivered through the wallet as Electronic Attestations of Attributes, reducing the administrative burden of self-certification.\n\nFor transaction reporting obligations under MiFID II and EMIR, the wallet provides a high-assurance identity anchor that can improve the accuracy of client identification in regulatory reports. Fund distribution platforms and investment platforms operating across borders benefit from a standardized identity verification mechanism that replaces the current patchwork of national document verification requirements. As the wallet ecosystem matures, attestations covering financial suitability, tax residency, and beneficial ownership could further streamline investment services compliance.",
      },
    ],
    keyRequirements: [
      "Accept EUDIW for customer due diligence and identity verification as a mandatory relying party",
      "Implement OpenID4VC protocols for receiving wallet-based identity presentations",
      "Support both SD-JWT and mdoc credential formats for PID verification",
      "Register as a relying party with the national supervisory body, declaring required attributes",
      "Align wallet-based KYC with anti-money laundering and counter-terrorism financing obligations",
      "Ensure strong customer authentication flows integrate wallet-based identity verification",
      "Maintain audit trails of all wallet-based identity verification transactions",
      "Update data protection impact assessments to cover wallet-derived personal data processing",
    ],
    complianceTimeline: [
      "2024-2025: Monitor implementing acts and participate in Large-Scale Pilot feedback cycles",
      "2025-2026: Complete technical gap analysis and begin sandbox testing with reference wallets",
      "2026: Implement relying party registration and deploy wallet acceptance in primary onboarding flows",
      "2026-2027: Full production deployment with wallet-based KYC, SCA integration, and AML system updates",
      "2027 onwards: Expand to advanced use cases including QEAA-based enhanced due diligence",
    ],
    useCases: [
      "Digital KYC for bank account opening using wallet-presented PID",
      "Wallet-based strong customer authentication for payment transactions",
      "Age verification for age-restricted financial products",
      "Cross-border account opening with standardized identity verification",
      "Qualified electronic signature for contract execution via wallet",
      "Enhanced due diligence using verified attribute attestations from the wallet",
    ],
    relatedIndustries: [
      "healthcare",
      "government-public-sector",
      "telecommunications",
      "ecommerce-platforms",
      "travel-transport",
    ],
    relatedRoles: [
      "cto-technical-lead",
      "compliance-officer",
      "product-manager",
      "legal-team",
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    shortDescription:
      "How eIDAS 2.0 and the European Digital Identity Wallet impact patient identification, health attestations, cross-border healthcare access, and electronic health record management.",
    metaTitle: "eIDAS 2.0 for Healthcare | Patient Identity Guide",
    metaDescription:
      "How eIDAS 2.0 impacts healthcare providers and insurers. Patient identity verification, health attestations, and cross-border care access.",
    heroTagline:
      "Secure patient identity and enable cross-border healthcare in the digital identity era",
    sections: [
      {
        heading: "Impact on Healthcare Organizations",
        content:
          "Healthcare providers are explicitly identified in eIDAS 2.0 as organizations that must accept the European Digital Identity Wallet when EU or national law requires patient identity verification. This makes healthcare one of the priority sectors for wallet adoption. The regulation arrives at a time when the healthcare sector is already undergoing significant digital transformation, with the European Health Data Space (EHDS) regulation creating a parallel framework for health data sharing across borders.\n\nFor healthcare organizations, the wallet addresses a persistent challenge: reliable patient identification. Misidentification and duplicate records are significant sources of medical error and administrative waste. A government-verified digital identity presented through the wallet provides a high-assurance patient identification mechanism that works consistently across providers, across regions, and across Member State borders. The operational benefits of accurate, instant patient identification are substantial.",
      },
      {
        heading: "Patient Identity Verification",
        content:
          "The EUDIW enables patients to present their Person Identification Data (PID) to healthcare providers through a simple wallet interaction, replacing the current reliance on physical ID cards, insurance cards, and manual data entry. This is particularly valuable in emergency settings, where rapid and accurate patient identification is critical and where patients may not have physical documents available. A smartphone-based wallet presentation provides verified identity data in seconds.\n\nBeyond basic identification, the wallet can carry health-related Electronic Attestations of Attributes: insurance coverage verification, vaccination records, organ donor status, allergy information, and prescription entitlements. These attestations, when issued by authorized health authorities or QTSPs, provide verifiable and tamper-proof health data that can be checked instantly at the point of care. Selective disclosure ensures patients share only the health information relevant to the specific care encounter, supporting both GDPR data minimization requirements and patient autonomy over sensitive health data.",
      },
      {
        heading: "Electronic Health Records and EHDS Alignment",
        content:
          "The European Health Data Space (EHDS) regulation creates a framework for sharing electronic health data across the EU for both primary care (direct patient treatment) and secondary use (research, policy, innovation). The EUDIW serves as a natural identity layer for EHDS: patients can authenticate themselves to access their health data using their wallet, and health data providers can verify patient identity with high assurance before sharing records.\n\nThe convergence of eIDAS 2.0 and EHDS means healthcare organizations must plan for an integrated digital identity and health data infrastructure. Wallet-based patient authentication enables secure access to patient portals, telemedicine platforms, and cross-border health data exchange services. For health data holders, the wallet provides a standardized mechanism for verifying the identity of data subjects exercising their GDPR access rights. Organizations that invest in wallet integration now will be better positioned to comply with both eIDAS 2.0 and EHDS requirements as they come into force.",
      },
      {
        heading: "Cross-Border Healthcare Access",
        content:
          "Cross-border healthcare within the EU has been hampered by the difficulty of verifying patient identity and insurance coverage across different national systems. The EUDIW provides a single, standardized mechanism for patients to prove their identity and present verified health-related attestations in any Member State. A patient traveling from Germany to Spain can present their wallet to a Spanish healthcare provider, who receives government-verified identity data and, potentially, insurance coverage attestations, without needing to process unfamiliar foreign documents.\n\nThe Single Digital Gateway regulation already requires Member States to provide cross-border access to certain public services. Combined with eIDAS 2.0, this creates a mandate for digital access to healthcare services across borders. Wallet-based identity verification simplifies the administrative processes around the European Health Insurance Card (EHIC) and the S1/S2 forms used for cross-border treatment authorization. Healthcare organizations near border regions and those serving international patients should prioritize wallet integration to streamline cross-border care delivery.",
      },
      {
        heading: "Insurance Verification and Claims",
        content:
          "Health insurance verification is a major administrative process in healthcare delivery. The EUDIW can carry attestations from insurance providers confirming coverage status, plan details, and eligibility for specific treatments. When a patient presents these attestations at a healthcare facility, the provider can instantly verify insurance coverage without manual checks against insurer databases or paper-based confirmation processes.\n\nFor health insurers, the wallet creates opportunities to issue digital insurance attestations as Electronic Attestations of Attributes, reducing the cost of card issuance and replacement while enabling real-time coverage verification. Claims processing can be streamlined when patient identity is verified through high-assurance wallet presentations, reducing fraud risk and simplifying the reconciliation of claims against patient identities. The combination of verified identity and verified insurance coverage in a single wallet interaction reduces administrative overhead for both providers and insurers.",
      },
      {
        heading: "Data Protection in Healthcare Contexts",
        content:
          "Healthcare data is classified as special category data under GDPR Article 9, requiring additional safeguards for processing. The wallet's selective disclosure capability is particularly valuable in healthcare contexts, where the principle of minimum necessary information is both a legal requirement and a clinical best practice. A pharmacy verifying a prescription need not access the patient's full medical history. An employer health check need not reveal specific diagnoses.\n\nHealthcare organizations must conduct thorough Data Protection Impact Assessments before implementing wallet-based identity and health data verification. The legal basis for processing wallet-derived health data must be carefully established, typically under GDPR Article 9(2)(h) for healthcare provision or Article 9(2)(i) for public health purposes. Retention policies for wallet verification records must be defined in accordance with both GDPR requirements and national health record retention rules. Staff training on wallet-based data handling is essential to prevent over-collection of sensitive health attributes.",
      },
    ],
    keyRequirements: [
      "Accept EUDIW for patient identity verification when required by EU or national law",
      "Implement credential verification supporting both SD-JWT and mdoc formats for health attestations",
      "Ensure selective disclosure is enforced to minimize health data sharing to clinical necessity",
      "Align wallet integration with European Health Data Space requirements for cross-border data access",
      "Maintain GDPR Article 9 compliance for all wallet-derived special category health data",
      "Register as a healthcare relying party with the national supervisory body",
      "Update patient consent management systems to accommodate wallet-based data sharing",
      "Implement audit trails for all wallet-based patient identification and attestation transactions",
    ],
    complianceTimeline: [
      "2024-2025: Assess current patient identity infrastructure and identify wallet integration touchpoints",
      "2025-2026: Align wallet integration planning with EHDS implementation timelines and conduct DPIAs",
      "2026: Deploy wallet-based patient identification in primary care settings and patient portals",
      "2026-2027: Extend to cross-border healthcare scenarios, insurance verification, and telemedicine",
      "2027 onwards: Full integration with EHDS for wallet-authenticated health data access and sharing",
    ],
    useCases: [
      "Patient identity verification at hospital admission and emergency departments",
      "Vaccination record and immunization status verification via wallet attestations",
      "Cross-border healthcare access with wallet-based identity and insurance verification",
      "Prescription verification and dispensing using wallet-presented entitlements",
      "Telemedicine patient authentication through wallet-based identity",
      "Insurance coverage verification at the point of care using wallet attestations",
    ],
    relatedIndustries: [
      "financial-services",
      "government-public-sector",
      "telecommunications",
      "ecommerce-platforms",
      "travel-transport",
    ],
    relatedRoles: [
      "cto-technical-lead",
      "compliance-officer",
      "product-manager",
      "legal-team",
    ],
  },
  {
    slug: "government-public-sector",
    title: "Government and Public Sector",
    shortDescription:
      "How eIDAS 2.0 mandates wallet acceptance for public services, requiring government agencies to transform citizen authentication, cross-border service delivery, and digital government infrastructure.",
    metaTitle: "eIDAS 2.0 for Government | Public Sector Guide",
    metaDescription:
      "How eIDAS 2.0 mandates EUDIW acceptance for public services. Citizen authentication, cross-border access, and implementation timelines.",
    heroTagline:
      "Deliver the next generation of citizen-centric digital public services",
    sections: [
      {
        heading: "The Public Sector Mandate",
        content:
          "Government and public sector organizations face the earliest and strictest obligations under eIDAS 2.0. Public administrations are the foundational use case for the European Digital Identity Wallet: every Member State must issue at least one wallet to its citizens and residents, and public services must be among the first to accept it. This is not an optional modernization initiative. It is a regulatory mandate with defined deadlines that are earlier than those for most private sector categories.\n\nThe mandate reflects a core objective of eIDAS 2.0: ensuring that every EU citizen can access public services digitally across all Member States using a single, standardized identity instrument. For government agencies, this means updating authentication systems, redesigning citizen-facing digital services, and establishing the infrastructure to verify wallet-presented credentials. Agencies that have already invested in national eID schemes must now plan for coexistence with the wallet during a transition period and eventual convergence.",
      },
      {
        heading: "Citizen Authentication Transformation",
        content:
          "Current digital government authentication varies widely across Member States, from national eID cards and mobile IDs to username-password systems. The EUDIW standardizes citizen authentication across all public services at a high Level of Assurance. Citizens will authenticate to government portals, submit applications, access records, and complete administrative procedures by presenting their wallet credentials. The wallet provides a consistent user experience regardless of which Member State's service the citizen is accessing.\n\nFor government IT teams, this means implementing OpenID4VC protocol support alongside existing authentication mechanisms. The transition must be managed carefully: existing national eID systems (connected through the eIDAS node network) will continue to operate during the transition period, and public services must support both channels. Authentication architecture must accommodate wallet-based PID verification, selective disclosure of specific attributes, and Qualified Electronic Signature creation for procedures requiring legally binding signatures.",
      },
      {
        heading: "Cross-Border Public Service Access",
        content:
          "The Single Digital Gateway (SDG) regulation already requires Member States to provide cross-border digital access to key public services. eIDAS 2.0 provides the identity layer that makes this fully operational. A citizen from any Member State can authenticate to another Member State's public services using their wallet, without needing a local eID or navigating unfamiliar national authentication systems. This covers services such as business registration, tax filing, social security claims, education enrollment, and residence permits.\n\nThe Once-Only Technical System (OOTS) under the SDG allows public administrations to exchange evidence across borders, reducing the burden on citizens to provide documents that are already held by other public authorities. The wallet complements OOTS by providing the verified identity anchor for cross-border evidence exchange. Government agencies must ensure their digital services are compatible with wallet-based cross-border authentication and can handle attribute requests and evidence exchange in a standardized, interoperable manner.",
      },
      {
        heading: "Digital Government Transformation",
        content:
          "eIDAS 2.0 is an accelerator for digital government transformation. Beyond basic authentication, the wallet enables entirely new service delivery models. Citizens can receive official attestations (such as birth certificates, residence confirmations, or social benefit entitlements) as Electronic Attestations of Attributes directly into their wallet, where they can be reused across multiple services without re-requesting them from the issuing authority. This reduces administrative duplication and processing times.\n\nGovernment agencies should also consider their role as attribute providers. Public authorities that hold authentic source data (civil registries, land registries, professional licensing bodies, educational institutions) may be required under eIDAS 2.0 to make their data available for issuance as attestations, either directly or through Qualified Trust Service Providers. This dual role, as both a relying party consuming wallet credentials and an attribute provider issuing them, requires careful planning and investment in both verification and issuance infrastructure.",
      },
      {
        heading: "Implementation Priorities and Deadlines",
        content:
          "The public sector faces the tightest implementation timelines under eIDAS 2.0. Member States must have at least one certified wallet available for citizens by the deadlines set in the regulation, and public services must be ready to accept it. Government agencies should prioritize implementation based on citizen impact and regulatory urgency. High-volume services, such as tax portals, social security systems, healthcare access, and education enrollment, should be the first to integrate wallet acceptance.\n\nImplementation requires coordination across multiple levels of government. Central government IT infrastructure must support wallet verification, but regional and local government services also fall within the mandatory acceptance scope. Standardized integration components, such as shared verification libraries, common relying party registration processes, and centralized Trusted List validation services, can reduce duplication of effort across agencies. Funding from EU programs, including the Digital Europe Programme and the Recovery and Resilience Facility, may be available to support public sector wallet integration projects.",
      },
      {
        heading: "Issuing Wallets and PID",
        content:
          "Beyond accepting wallets, Member States bear the foundational responsibility of issuing them. Each Member State must provide at least one EUDIW to its citizens and residents, free of charge for natural persons. The wallet must be certified through conformity assessment and meet the security and functionality requirements defined in the implementing acts and Architecture Reference Framework. The issuance of Person Identification Data (PID) within the wallet must meet the high Level of Assurance, requiring robust identity proofing processes.\n\nGovernment agencies responsible for wallet issuance must decide on the implementation model: develop a wallet application in-house, procure from the private sector, or adopt the EU reference wallet implementation. They must also establish the PID issuance process, connecting it to authoritative identity registries (civil registries, population databases) and implementing the identity proofing workflow. Wallet lifecycle management, including updates, revocation, and support, is an ongoing operational responsibility that requires dedicated resources and governance structures.",
      },
    ],
    keyRequirements: [
      "Issue at least one certified EUDIW to citizens and residents, free of charge for natural persons",
      "Accept the EUDIW for access to all digital public services within mandated timelines",
      "Issue Person Identification Data at high Level of Assurance from authoritative identity sources",
      "Ensure cross-border interoperability with wallets issued by all other Member States",
      "Make public sector authentic source data available for issuance as electronic attestations",
      "Support both wallet-based and legacy eID authentication during the transition period",
      "Implement OpenID4VC protocols for both credential issuance and verification",
      "Comply with conformity assessment and certification requirements for wallet solutions",
    ],
    complianceTimeline: [
      "2024-2025: Finalize national wallet implementation strategy and begin development or procurement",
      "2025: Complete wallet certification and conformity assessment processes",
      "2025-2026: Launch pilot wallet services with early-adopter public services and citizen testing",
      "2026: Deploy certified wallet and enable PID issuance to citizens and residents",
      "2026-2027: All mandated public services accept the wallet for citizen authentication and transactions",
    ],
    useCases: [
      "Citizen authentication for tax filing and social security portals",
      "Cross-border public service access via the Single Digital Gateway",
      "Digital issuance of government attestations (birth certificates, residence confirmations)",
      "Qualified electronic signatures for administrative procedures and legal filings",
      "Voter identity verification for electronic voting pilots",
      "Business registration and legal entity authentication using organizational wallets",
    ],
    relatedIndustries: [
      "financial-services",
      "healthcare",
      "telecommunications",
      "ecommerce-platforms",
      "travel-transport",
    ],
    relatedRoles: [
      "cto-technical-lead",
      "compliance-officer",
      "product-manager",
      "legal-team",
    ],
  },
  {
    slug: "telecommunications",
    title: "Telecommunications",
    shortDescription:
      "How eIDAS 2.0 impacts telecom operators through SIM registration requirements, subscriber verification, age-gated content access, and network authentication modernization.",
    metaTitle: "eIDAS 2.0 for Telecoms | Subscriber Verification",
    metaDescription:
      "How eIDAS 2.0 impacts telecom operators. SIM registration, subscriber identity verification, and compliance requirements.",
    heroTagline:
      "Modernize subscriber verification and unlock new identity services for telecom",
    sections: [
      {
        heading: "Impact on Telecommunications Operators",
        content:
          "Telecommunications operators occupy a unique position in the eIDAS 2.0 landscape. They are both regulated entities subject to subscriber identification requirements and potential infrastructure partners in the wallet ecosystem. Several EU Member States already require identity verification for SIM card registration, and this trend is strengthening under updated EU security frameworks. The EUDIW provides a standardized, high-assurance mechanism for subscriber identification that replaces the current patchwork of in-store document checks and video verification processes.\n\nThe POTENTIAL Large-Scale Pilot specifically includes SIM registration as a core use case, demonstrating the direct relevance of wallet-based identity to telecoms. Beyond subscriber registration, the wallet opens opportunities for telecom operators to participate in the identity ecosystem as attribute providers or trust service facilitators, leveraging their existing infrastructure and customer relationships.",
      },
      {
        heading: "SIM Registration and Subscriber Verification",
        content:
          "SIM card registration is one of the highest-volume identity verification processes in the telecom sector. Whether performed in-store, online, or through self-service kiosks, the process currently requires customers to present a physical identity document that is manually or semi-automatically verified. This process is costly, prone to errors, and creates friction that affects customer acquisition metrics. With the EUDIW, SIM registration becomes a wallet-based identity presentation: the customer approves the release of their PID, and the operator receives verified identity data instantly.\n\nFor online SIM activation and eSIM provisioning, the wallet eliminates the need for document upload and video verification steps that currently create significant abandonment. The wallet-based flow works consistently across all EU Member States, simplifying the process for operators serving cross-border customers or operating in multiple markets. Telecom operators should plan to accept wallet-based identity for new subscriber registration and, where applicable, for re-verification of existing subscribers under updated regulatory requirements.",
      },
      {
        heading: "Age Verification for Content and Services",
        content:
          "Telecom operators that provide content services, app stores, or act as content intermediaries face increasing age verification requirements. The Digital Services Act (DSA) and national regulations impose obligations on platforms to verify user age for access to age-restricted content. The wallet's selective disclosure capability is particularly powerful for age verification: rather than collecting and storing a customer's full identity data just to check their age, operators can request a simple over-18 (or over-16, or other threshold) attestation from the wallet.\n\nThis approach dramatically reduces the data protection burden associated with age verification. No date of birth needs to be collected, stored, or processed. The wallet provides a cryptographically verified yes-or-no answer to the age question, satisfying regulatory requirements while respecting user privacy. For parental control services, the wallet could also enable verified parent-child account linking through attestation-based relationship verification, without the operator needing to collect and cross-reference family identity documents.",
      },
      {
        heading: "Network Access Authentication",
        content:
          "Beyond subscriber registration, the EUDIW has potential implications for network access authentication. Wi-Fi access in public spaces, corporate guest networks, and carrier Wi-Fi offload scenarios all currently rely on various authentication mechanisms, from simple captive portals to RADIUS-based enterprise authentication. Wallet-based identity could provide a standardized, privacy-preserving authentication mechanism for network access, where users present a minimal credential from their wallet to gain access.\n\nFor enterprise telecom services, the wallet enables verified identity for corporate account management, authorized representative verification, and SLA-related identity requirements. Machine-to-machine identity, while not directly addressed by the EUDIW (which focuses on natural and legal persons), will evolve in the context of the broader eIDAS 2.0 trust framework. Telecom operators should monitor how organizational wallets and electronic seals develop under eIDAS 2.0, as these may be relevant for IoT and M2M identity in future regulatory phases.",
      },
      {
        heading: "Telecom as Identity Ecosystem Participant",
        content:
          "Telecom operators have a strategic opportunity to participate in the eIDAS 2.0 ecosystem beyond their role as relying parties. Operators already maintain verified subscriber identity data, extensive authentication infrastructure, and secure SIM-based credential storage capabilities. These assets position telecoms as potential attribute providers (issuing attestations about subscriber identity or account status), trust service facilitators (leveraging SIM-based secure elements for credential storage), or even Qualified Trust Service Providers.\n\nSeveral European telecom operators have already entered the trust services market, offering qualified electronic signatures and authentication services. eIDAS 2.0 expands the market for these services by creating demand for qualified attestations and wallet-compatible credential issuance. Operators should evaluate the commercial opportunity of offering identity services alongside connectivity, transforming from pure infrastructure providers into identity ecosystem participants. This requires investment in QTSP certification, credential issuance infrastructure, and integration with the EUDIW architecture.",
      },
      {
        heading: "Regulatory Compliance and Implementation",
        content:
          "Telecom operators must navigate the intersection of eIDAS 2.0 with sector-specific regulation, including the European Electronic Communications Code (EECC), national SIM registration laws, and the Digital Services Act. The compliance strategy should begin with a regulatory mapping exercise that identifies all identity verification obligations across these frameworks and determines which can be satisfied through wallet-based verification.\n\nImplementation priorities for telecoms include: wallet-based SIM registration for new subscribers, age verification for content services, and authenticated account management. Technical integration follows the same OpenID4VC protocol stack required for all relying parties, with credential verification supporting both SD-JWT and mdoc formats. Telecom operators operating in multiple Member States benefit significantly from the wallet's cross-border standardization, which replaces the need to support different national identity verification requirements in each market. Early engagement with the POTENTIAL pilot results is recommended for practical implementation guidance.",
      },
    ],
    keyRequirements: [
      "Accept EUDIW for subscriber identity verification in SIM registration and activation",
      "Implement wallet-based age verification for age-restricted content and services",
      "Support OpenID4VC credential presentation protocols for wallet-based identity flows",
      "Register as a relying party and declare attribute requirements for subscriber verification",
      "Ensure compliance with both eIDAS 2.0 and European Electronic Communications Code obligations",
      "Evaluate opportunities to participate as an attribute provider or trust service provider",
      "Maintain audit trails of wallet-based subscriber verification transactions",
    ],
    complianceTimeline: [
      "2024-2025: Review POTENTIAL pilot results and assess wallet integration requirements",
      "2025-2026: Build sandbox integration for wallet-based SIM registration and age verification",
      "2026: Deploy wallet acceptance for new subscriber registration in primary markets",
      "2026-2027: Extend to age verification for content services and cross-border subscriber verification",
      "2027 onwards: Explore advanced identity services including attribute issuance and QTSP opportunities",
    ],
    useCases: [
      "Wallet-based SIM card registration replacing document upload and in-store verification",
      "eSIM remote provisioning with instant wallet-based identity verification",
      "Privacy-preserving age verification for content services using selective disclosure",
      "Cross-border subscriber verification for roaming and multi-market operations",
      "Enterprise customer identity verification for corporate telecom contracts",
      "Wallet-based authentication for Wi-Fi access and carrier network services",
    ],
    relatedIndustries: [
      "financial-services",
      "healthcare",
      "government-public-sector",
      "ecommerce-platforms",
      "travel-transport",
    ],
    relatedRoles: [
      "cto-technical-lead",
      "compliance-officer",
      "product-manager",
      "legal-team",
    ],
  },
  {
    slug: "ecommerce-platforms",
    title: "E-commerce and Online Platforms",
    shortDescription:
      "How eIDAS 2.0 impacts online platforms and marketplaces through age verification mandates, seller identity checks, consumer protection, and platform transparency requirements.",
    metaTitle: "eIDAS 2.0 for E-commerce | Platform Compliance",
    metaDescription:
      "How eIDAS 2.0 impacts e-commerce platforms. Age verification, seller identity checks, DSA alignment, and compliance requirements.",
    heroTagline:
      "Build trust and streamline verification for the next era of online commerce",
    sections: [
      {
        heading: "Impact on E-commerce and Online Platforms",
        content:
          "E-commerce platforms and online marketplaces face significant new obligations under eIDAS 2.0, particularly when they qualify as very large online platforms (VLOPs) under the Digital Services Act. VLOPs are explicitly listed as mandatory relying parties that must accept the European Digital Identity Wallet for user authentication. Even platforms below the VLOP threshold will benefit from wallet integration, as it provides a standardized mechanism for the identity verification obligations they already face under the DSA, consumer protection directives, and national regulations.\n\nThe wallet changes the economics and user experience of identity verification in e-commerce. Current processes for verifying seller identity, checking buyer age, and authenticating users rely on a mix of document uploads, third-party verification services, and self-declaration. The wallet replaces these with instant, cryptographically verified credential presentations that are cheaper to process, harder to forge, and less intrusive for users.",
      },
      {
        heading: "Age Verification Requirements",
        content:
          "Age verification is one of the most pressing use cases for wallet integration in e-commerce. The Digital Services Act requires platforms to implement measures to protect minors, and national regulations across Member States impose age restrictions on products including alcohol, tobacco, gambling services, and adult content. Current age verification methods range from ineffective (self-declaration checkboxes) to intrusive (full identity document uploads). Neither approach is satisfactory from a compliance, privacy, or user experience perspective.\n\nThe EUDIW solves this through selective disclosure. A platform can request a simple age-threshold attestation (for example, \"Is the user over 18?\") from the wallet. The wallet returns a cryptographically verified yes or no answer without revealing the user's date of birth, name, or any other personal data. This satisfies the age verification obligation while collecting the absolute minimum personal data. For platforms, this means lower data protection liability, simpler compliance documentation, and a frictionless user experience that does not interrupt the purchase flow with document uploads or verification delays.",
      },
      {
        heading: "Seller and Trader Identity Verification",
        content:
          "The DSA and the proposed Platform Workers Directive impose obligations on platforms to verify the identity of traders and service providers operating on their marketplace. Under DSA Article 30, online marketplaces must collect and verify trader identity information before allowing them to offer products or services. The EUDIW provides a high-assurance mechanism for this verification: sellers present their wallet credentials (PID for individual traders, organizational attestations for business sellers), and the platform receives government-verified identity data.\n\nFor platforms operating cross-border marketplaces, the wallet eliminates the complexity of verifying identity documents from 27 different Member States. A Polish seller and a Portuguese seller both present standardized wallet credentials that the platform can verify using the same technical infrastructure. This reduces verification costs, accelerates seller onboarding, and increases the reliability of trader identity data. Combined with Qualified Electronic Attestations of Attributes for business registration or professional licensing, the wallet enables a comprehensive trader trust profile built on verified credentials rather than self-reported information.",
      },
      {
        heading: "Consumer Protection and Trust",
        content:
          "Consumer trust is the foundation of e-commerce, and the EUDIW strengthens it in multiple ways. Verified seller identity reduces the risk of fraudulent merchants operating on platforms. Wallet-based buyer authentication provides a more reliable identity anchor for transaction dispute resolution than email addresses or social logins. For high-value transactions, platforms can request additional verified attributes (such as delivery address confirmation) to reduce fraud and chargebacks.\n\nThe wallet also creates opportunities for enhanced consumer experiences. Verified identity enables personalization without requiring users to create accounts and provide personal data directly to each platform. Loyalty programs and cross-platform user recognition can be built on wallet-based identity rather than tracking cookies or email-based identification. For platforms subject to the Consumer Rights Directive and the Omnibus Directive, wallet-based identity verification supports compliance with requirements around trader transparency and consumer redress mechanisms.",
      },
      {
        heading: "Platform Transparency and Accountability",
        content:
          "The DSA imposes transparency and accountability requirements on platforms, including obligations around content moderation, advertising transparency, and algorithmic accountability. For VLOPs, these obligations are particularly extensive. Wallet-based authentication can support compliance with several of these requirements. Verified user identity reduces the prevalence of fake accounts and inauthentic behavior. Advertising transparency requirements can be met more easily when advertiser identity is verified through wallet credentials.\n\nPlatforms must also consider how wallet-based authentication interacts with their existing identity infrastructure. During the transition period, platforms will need to support both wallet-based and traditional authentication methods. The wallet should be integrated as an additional authentication option that provides higher assurance, with the product experience designed to encourage adoption without forcing users who do not yet have a wallet. Analytics and reporting systems should track wallet adoption rates and the impact on fraud, verification costs, and user conversion to build the business case for expanded wallet integration.",
      },
      {
        heading: "Implementation Strategy for Platforms",
        content:
          "Platform implementation should follow a phased approach. The first priority is determining whether your platform qualifies as a VLOP (over 45 million monthly active users in the EU) and therefore faces mandatory acceptance obligations. Even if you are below this threshold, voluntary wallet integration provides compliance and competitive benefits. Start with the highest-impact use case: for most platforms, this will be age verification (if you sell age-restricted products) or seller identity verification (if you operate a marketplace).\n\nTechnical implementation follows the standard relying party integration path: OpenID4VC protocol support, SD-JWT and mdoc credential verification, Trusted List validation, and relying party registration with the national supervisory body. For platforms with large existing user bases, plan a migration strategy that allows existing users to link their wallet to their existing account, providing a verified identity upgrade without requiring re-registration. Monitor the results of Large-Scale Pilots, particularly those testing e-commerce scenarios, for practical integration guidance and UX best practices.",
      },
    ],
    keyRequirements: [
      "Accept EUDIW for user authentication if classified as a very large online platform under the DSA",
      "Implement wallet-based age verification using selective disclosure for age-restricted products",
      "Verify trader and seller identity using wallet-presented credentials for marketplace compliance",
      "Support OpenID4VC protocols and both SD-JWT and mdoc credential formats",
      "Register as a relying party and declare attribute requirements for each verification use case",
      "Ensure data minimization in all wallet-based verification flows",
      "Maintain compatibility with both wallet-based and traditional authentication during transition",
    ],
    complianceTimeline: [
      "2024-2025: Assess VLOP classification and map DSA identity verification obligations to wallet capabilities",
      "2025-2026: Build sandbox integration for age verification and seller identity verification flows",
      "2026: Deploy wallet-based age verification and begin seller identity verification via wallet",
      "2026-2027: Extend wallet authentication to buyer login and account management for VLOPs",
      "2027 onwards: Expand to advanced use cases including cross-platform identity and verified reviews",
    ],
    useCases: [
      "Privacy-preserving age verification for alcohol, tobacco, and restricted product purchases",
      "Seller and trader identity verification for marketplace compliance under DSA Article 30",
      "Wallet-based user authentication replacing email and social login for VLOPs",
      "Verified delivery address confirmation for high-value transactions",
      "Cross-border seller onboarding with standardized wallet-based identity verification",
      "Advertiser identity verification for advertising transparency compliance",
    ],
    relatedIndustries: [
      "financial-services",
      "healthcare",
      "government-public-sector",
      "telecommunications",
      "travel-transport",
    ],
    relatedRoles: [
      "cto-technical-lead",
      "compliance-officer",
      "product-manager",
      "legal-team",
    ],
  },
  {
    slug: "travel-transport",
    title: "Travel and Transport",
    shortDescription:
      "How eIDAS 2.0 transforms travel and transport through digital travel credentials, mobile driving licences, streamlined hotel check-in, car rental verification, and cross-border travel simplification.",
    metaTitle: "eIDAS 2.0 for Travel & Transport | Compliance",
    metaDescription:
      "How eIDAS 2.0 impacts travel and transport. Digital travel credentials, mobile driving licences, hotel check-in, and cross-border travel.",
    heroTagline:
      "Enable seamless, secure identity verification across the European travel ecosystem",
    sections: [
      {
        heading: "Transforming Travel and Transport",
        content:
          "The travel and transport sector is one of the most compelling use cases for the European Digital Identity Wallet. Travel inherently involves repeated identity verification: at airports, borders, hotels, car rental desks, train stations, and tourist attractions. Each of these touchpoints currently requires physical document presentation, manual inspection, and often photocopying or scanning of identity documents. The EUDIW replaces this with digital credential presentations that are faster, more secure, and privacy-preserving.\n\nThe EU Digital Identity Wallet Consortium (EWC) Large-Scale Pilot specifically focuses on travel use cases, testing scenarios from airport check-in to hotel registration. The results of this pilot are directly informing how the travel industry will integrate with the wallet. For travel and transport companies, the wallet offers both operational efficiency gains (faster identity checks, reduced manual handling) and enhanced customer experiences (seamless check-in, no document photocopying).",
      },
      {
        heading: "Digital Travel Credentials",
        content:
          "Digital Travel Credentials (DTCs) are electronic representations of travel documents, such as passports and national ID cards, that can be stored in the EUDIW and presented digitally at border control and other travel checkpoints. The International Civil Aviation Organization (ICAO) is developing standards for DTCs that align with the wallet architecture, enabling a future where travelers can present their identity digitally at automated border gates without handing over a physical passport.\n\nFor airlines, the DTC enables a fully digital passenger identity verification chain: from booking (verified identity at reservation) through check-in (wallet-based identity confirmation) to boarding (digital identity presentation at the gate) and arrival (DTC presentation at border control). This continuous digital identity thread reduces manual checks, speeds up passenger processing, and improves security by replacing visual document inspection with cryptographic verification. Airlines, airports, and border agencies should monitor DTC standardization progress and plan for integration alongside EUDIW deployment.",
      },
      {
        heading: "Mobile Driving Licences",
        content:
          "The Mobile Driving Licence (mDL), standardized under ISO 18013-5, is one of the most mature wallet credentials and directly relevant to the transport sector. The mDL allows drivers to present their driving licence digitally from their wallet, with selective disclosure enabling them to prove they hold a valid licence for a specific vehicle category without revealing their home address or other unnecessary data.\n\nFor car rental companies, the mDL transforms the rental process. Instead of photocopying physical licences (a practice with significant data protection implications), rental agents verify the mDL through a digital presentation. The verification confirms licence validity, category, and any restrictions in real time. For fleet management and ride-sharing platforms, the mDL provides a standardized mechanism for driver verification that works across all EU Member States. Law enforcement can verify driving credentials through proximity-based (NFC or Bluetooth) wallet presentations during roadside checks. The mDL is expected to be among the first credentials widely available in EU wallets, making it a priority integration for transport companies.",
      },
      {
        heading: "Hotel Check-in and Accommodation",
        content:
          "Hotel guest registration is a mandatory requirement across most EU Member States, with laws requiring accommodation providers to verify and record guest identity. This currently involves guests presenting their passport or ID card at reception, where staff manually check and often photocopy the document. The process is slow, creates data protection risks (accumulated photocopies of identity documents), and is particularly cumbersome for large hotel chains processing thousands of check-ins daily.\n\nThe EUDIW enables a digital check-in experience: guests present their wallet at arrival (or remotely before arrival), the hotel system verifies the PID and any required attestations, and the guest registration requirement is satisfied without physical document handling. For the hotel, this reduces front desk processing time, eliminates the need to store physical document copies, and simplifies compliance with guest registration laws. Selective disclosure allows the hotel to receive only the attributes required by law (typically name, nationality, date of birth, and document number) without accessing the guest's full identity data. Self-service kiosks and mobile check-in apps can integrate wallet verification for a completely contactless arrival experience.",
      },
      {
        heading: "Cross-Border Travel Simplification",
        content:
          "Cross-border travel within the EU and the Schengen area involves multiple identity verification points where the wallet adds value. Train operators running cross-border services (such as Eurostar, Thalys, or night trains requiring reservation-linked identity) can verify passenger identity through wallet presentations. Ferry operators subject to passenger registration requirements can streamline boarding processes. Coach and bus companies operating international routes can use wallet-based passenger identity for manifest compliance.\n\nFor travel aggregators and online travel agencies, the wallet provides a verified identity layer that enhances booking security, reduces fraudulent reservations, and simplifies identity verification for services that require it (such as rail passes linked to a specific traveler). Tour operators organizing cross-border group travel can verify participant identity once through the wallet rather than collecting and managing passport photocopies. The standardization of the wallet across all Member States means that travel companies operating pan-European services deal with a single identity verification mechanism rather than 27 different national document types.",
      },
      {
        heading: "Implementation Priorities for Travel Companies",
        content:
          "Travel and transport companies should prioritize wallet integration based on operational volume, regulatory requirements, and customer impact. Hotels and accommodation providers should start with guest registration workflows, as this is a high-volume, legally mandated process where wallet integration delivers immediate operational benefits. Car rental companies should prioritize mDL verification, as driving licence checks are a core business process and the mDL will be among the first widely available wallet credentials.\n\nAirlines and airports should engage with the EWC pilot results and monitor DTC standardization progress, as the full digital travel credential chain (booking to border) involves dependencies on border agency readiness. Transport platforms and aggregators should implement wallet-based user authentication and passenger identity verification for services that require it. For all travel companies, the cross-border nature of their business means the wallet's standardized pan-European identity verification is particularly valuable, eliminating the need to handle dozens of different national document types and verification procedures.",
      },
    ],
    keyRequirements: [
      "Accept EUDIW for guest registration and passenger identity verification where legally required",
      "Implement mDL verification for car rental, fleet management, and driving credential checks",
      "Support both proximity-based (NFC, Bluetooth) and online wallet credential presentations",
      "Ensure selective disclosure for identity checks, requesting only legally required attributes",
      "Monitor Digital Travel Credential standardization for airline and border control integration",
      "Register as a relying party and declare attribute requirements for each travel verification scenario",
      "Maintain audit trails of wallet-based identity verifications for regulatory compliance",
    ],
    complianceTimeline: [
      "2024-2025: Engage with EWC pilot results and assess wallet integration opportunities across travel touchpoints",
      "2025-2026: Build sandbox integrations for hotel check-in, car rental mDL verification, and passenger identity",
      "2026: Deploy wallet-based guest registration for hotels and mDL verification for car rental services",
      "2026-2027: Extend to airline passenger identity verification and cross-border transport use cases",
      "2027 onwards: Integrate Digital Travel Credentials as they become available for border and airport scenarios",
    ],
    useCases: [
      "Digital hotel guest registration using wallet-presented PID",
      "Mobile driving licence verification for car rental and fleet services",
      "Airline passenger identity verification from booking through boarding",
      "Cross-border train and ferry passenger identity for manifest compliance",
      "Self-service kiosk and mobile app check-in with wallet-based identity",
      "Travel insurance verification using wallet-stored attestations",
    ],
    relatedIndustries: [
      "financial-services",
      "healthcare",
      "government-public-sector",
      "telecommunications",
      "ecommerce-platforms",
    ],
    relatedRoles: [
      "cto-technical-lead",
      "compliance-officer",
      "product-manager",
      "legal-team",
    ],
  },
];

export function getIndustryBySlug(slug: string): IndustryPage | undefined {
  return industries.find((i) => i.slug === slug);
}
