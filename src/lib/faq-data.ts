export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqCategories: string[] = [
  "General",
  "EUDIW",
  "Business Compliance",
  "Technical",
];

export const faqItems: FaqItem[] = [
  // ─── General (8 questions) ─────────────────────────────────────────────
  {
    id: "general-1",
    question: "What is eIDAS 2.0 and how does it differ from the original eIDAS regulation?",
    answer:
      "eIDAS 2.0 (Regulation (EU) 2024/1183) is the comprehensive revision of the EU's 2014 framework for electronic identification and trust services. Unlike the original eIDAS, which relied on voluntary mutual recognition of national eID schemes, eIDAS 2.0 mandates that every Member State provide a European Digital Identity Wallet (EUDIW) to all citizens and residents. It also expands the range of qualified trust services to include electronic attestation of attributes, electronic archiving, and electronic ledgers, while imposing new acceptance obligations on both public and private sector relying parties.",
    category: "General",
  },
  {
    id: "general-2",
    question: "When does eIDAS 2.0 come into effect and what are the key implementation deadlines?",
    answer:
      "eIDAS 2.0 was published in the Official Journal of the EU on 30 April 2024 and entered into force on 20 May 2024. Member States must offer at least one European Digital Identity Wallet by 2026-2027, following the adoption of implementing acts that define the detailed technical specifications. The implementing acts, Architecture Reference Framework updates, and certification requirements are being finalised in parallel with the Large-Scale Pilots that run through 2025.",
    category: "General",
  },
  {
    id: "general-3",
    question: "Who is affected by eIDAS 2.0?",
    answer:
      "eIDAS 2.0 affects a wide range of stakeholders across the EU. Member States must deploy certified wallets and update their national eID infrastructure. Very large online platforms, financial institutions, healthcare providers, and public administrations face mandatory acceptance obligations for the EUDIW. Trust service providers must adapt to expanded qualified service categories, and any organisation that verifies customer identity or attributes, from banks to employers, will need to prepare for wallet-based verification flows.",
    category: "General",
  },
  {
    id: "general-4",
    question: "What are the main benefits of eIDAS 2.0 for EU citizens?",
    answer:
      "EU citizens will receive a free, government-backed digital identity wallet that allows them to prove their identity, sign documents, and share verified attributes (such as age, qualifications, or driving licence data) across borders with full legal effect. The wallet gives users control over their data through selective disclosure, meaning they can share only the minimum information necessary. This eliminates the need to carry multiple physical documents and simplifies interactions with both public services and private sector organisations.",
    category: "General",
  },
  {
    id: "general-5",
    question: "What is the legal effect of qualified trust services under eIDAS 2.0?",
    answer:
      "Qualified trust services under eIDAS 2.0, including Qualified Electronic Signatures, Qualified Electronic Seals, Qualified Electronic Timestamps, and Qualified Electronic Attestations of Attributes, carry automatic cross-border legal effect in all EU Member States. A Qualified Electronic Signature has the legal equivalent of a handwritten signature, while Qualified Electronic Attestations of Attributes enjoy a legal presumption of accuracy. This means no additional bilateral agreements or national recognition procedures are needed for cross-border validity.",
    category: "General",
  },
  {
    id: "general-6",
    question: "How does eIDAS 2.0 relate to the EU Digital Services Act and other digital regulations?",
    answer:
      "eIDAS 2.0 is part of the EU's broader digital policy agenda and directly intersects with several other regulations. Very large online platforms defined under the Digital Services Act (DSA) must accept the EUDIW for user authentication. The Anti-Money Laundering regulation links to eIDAS 2.0 through mandatory wallet acceptance for customer due diligence. PSD2 and the upcoming PSD3 connect through strong customer authentication. Together, these regulations form an interconnected framework for Europe's digital transformation.",
    category: "General",
  },
  {
    id: "general-7",
    question: "What role do Large-Scale Pilots play in the eIDAS 2.0 rollout?",
    answer:
      "The European Commission funds four Large-Scale Pilots (LSPs), namely EWC, POTENTIAL, NOBID, and DC4EU, to test the EUDIW in real-world cross-border scenarios before full deployment. These pilots validate the technical specifications of the Architecture Reference Framework, gather user experience feedback, identify legal and organisational barriers, and engage relying parties and attribute providers in practical integration. Their findings directly inform the refinement of implementing acts, certification requirements, and the final wallet specifications.",
    category: "General",
  },
  {
    id: "general-8",
    question: "Will eIDAS 2.0 affect organisations outside the European Union?",
    answer:
      "Yes. Any organisation that provides services to EU citizens or processes their identity data may be impacted by eIDAS 2.0. Non-EU organisations operating in the EU market, particularly very large online platforms, financial service providers, and healthcare companies, may need to accept the EUDIW as a valid identity verification mechanism. Additionally, the regulation provides for mutual recognition agreements with third countries, potentially extending the wallet's acceptance beyond EU borders. Organisations worldwide should monitor eIDAS 2.0 developments as part of their international compliance strategy.",
    category: "General",
  },

  // ─── EUDIW (7 questions) ───────────────────────────────────────────────
  {
    id: "eudiw-1",
    question: "What is the European Digital Identity Wallet (EUDIW) and how does it work?",
    answer:
      "The EUDIW is a mobile application that each EU Member State must provide to its citizens and residents, free of charge for natural persons. It stores Person Identification Data (PID) and Electronic Attestations of Attributes (EAAs) as cryptographically signed digital credentials. Users can present these credentials to relying parties, both online and offline, to prove their identity or specific attributes. The wallet uses standardised protocols (OpenID4VC) and credential formats (SD-JWT and mdoc) to ensure cross-border interoperability across all Member State implementations.",
    category: "EUDIW",
  },
  {
    id: "eudiw-2",
    question: "Which organisations are legally required to accept the EUDIW?",
    answer:
      "eIDAS 2.0 establishes mandatory acceptance obligations for several categories of organisations. Very large online platforms (as defined by the Digital Services Act) must accept the wallet for user authentication. Financial institutions subject to customer due diligence under anti-money laundering rules must accept it for identity verification. Public administrations must accept it for access to digital public services. Healthcare providers must accept it when EU or national law requires patient identity verification. Additional sectors may be designated in implementing acts.",
    category: "EUDIW",
  },
  {
    id: "eudiw-3",
    question: "What credentials can be stored in the EUDIW?",
    answer:
      "The EUDIW can store Person Identification Data (PID), the core government-issued identity, as well as a broad range of Electronic Attestations of Attributes (EAAs). These include mobile driving licences, educational diplomas and professional qualifications, health credentials such as vaccination certificates, company registration data and power of representation, age verification tokens, travel documents, and bank account ownership confirmations. Both qualified (QEAA) and non-qualified attestations can be held in the wallet, with qualified attestations carrying stronger legal presumptions.",
    category: "EUDIW",
  },
  {
    id: "eudiw-4",
    question: "How does the EUDIW protect user privacy?",
    answer:
      "The EUDIW incorporates multiple privacy-by-design features mandated by eIDAS 2.0. Selective disclosure allows users to share only the specific attributes a relying party needs. For example, proving they are over 18 without revealing their date of birth. Relying parties must register and declare which attributes they will request and for what purpose. The wallet presents users with a clear consent screen showing exactly what data is being requested and by whom. The architecture also includes measures to prevent relying party collusion and cross-service tracking of wallet users.",
    category: "EUDIW",
  },
  {
    id: "eudiw-5",
    question: "Can the EUDIW be used for electronic signing?",
    answer:
      "Yes. eIDAS 2.0 mandates that the EUDIW must enable users to create Qualified Electronic Signatures (QES), which carry the legal equivalent of a handwritten signature across all EU Member States. This is achieved through integration with remote signing services operated by Qualified Trust Service Providers (QTSPs), where the wallet provides identity assurance and user authorisation while the QTSP's cloud-based infrastructure performs the cryptographic signing. At least one QES service must be available free of charge to wallet holders for non-professional use.",
    category: "EUDIW",
  },
  {
    id: "eudiw-6",
    question: "Does the EUDIW work offline and in person?",
    answer:
      "Yes. The EUDIW is designed to support both online (remote) and offline (proximity-based) verification scenarios. For in-person use, the wallet can present credentials via NFC or Bluetooth using the mdoc (ISO 18013-5) credential format, which is optimised for constrained connectivity environments. This enables use cases such as showing a digital driving licence during a traffic stop, age verification at a physical point of sale, or identity checks at border control, all without requiring an internet connection at the moment of presentation.",
    category: "EUDIW",
  },
  {
    id: "eudiw-7",
    question: "How will the EUDIW ensure interoperability across EU Member States?",
    answer:
      "Interoperability is ensured through the Architecture Reference Framework (ARF), which mandates common credential formats (SD-JWT and mdoc), standardised presentation protocols (OpenID4VC), shared trust mechanisms (Trusted Lists and wallet attestations), and consistent security certification requirements. All Member State wallet implementations must conform to these specifications and pass conformity assessment. The Large-Scale Pilots are specifically testing cross-border interoperability scenarios, and the implementing acts will formalise the exact technical requirements that all wallets must meet.",
    category: "EUDIW",
  },

  // ─── Business Compliance (7 questions) ─────────────────────────────────
  {
    id: "compliance-1",
    question: "What steps should businesses take now to prepare for eIDAS 2.0 compliance?",
    answer:
      "Businesses should begin by assessing whether they fall into a mandatory acceptance category (very large online platforms, financial institutions, healthcare providers, or public service providers). Next, they should map their current identity verification and document signing processes to identify where the EUDIW will be relevant. Technical teams should familiarise themselves with the Architecture Reference Framework, OpenID4VC protocols, and SD-JWT/mdoc credential formats. Engaging with a Large-Scale Pilot or a QTSP partner for early integration testing is highly recommended to accelerate readiness.",
    category: "Business Compliance",
  },
  {
    id: "compliance-2",
    question: "What are the penalties for non-compliance with eIDAS 2.0?",
    answer:
      "eIDAS 2.0 delegates enforcement to national supervisory bodies, which have the authority to impose penalties in accordance with national law. While the regulation does not specify harmonised fine levels (unlike GDPR), Member States are required to establish effective, proportionate, and dissuasive penalties. Organisations that refuse to accept the EUDIW when legally required, or that fail to meet their obligations as trust service providers, face enforcement action that may include fines, service suspension, or withdrawal of qualified status. The reputational risk of non-compliance should also be considered.",
    category: "Business Compliance",
  },
  {
    id: "compliance-3",
    question: "How much does it cost to integrate with the EUDIW as a relying party?",
    answer:
      "Integration costs depend on your existing infrastructure and the complexity of your use cases. Organisations with modern identity systems based on OpenID Connect will find the transition to OpenID4VC relatively straightforward, potentially requiring weeks rather than months of development. Key cost elements include: updating authentication flows to support wallet presentations, integrating SD-JWT and/or mdoc credential verification libraries, implementing relying party registration, and updating user interfaces for consent flows. Open-source reference implementations from the LSPs can significantly reduce development costs.",
    category: "Business Compliance",
  },
  {
    id: "compliance-4",
    question: "Do businesses need to register as relying parties under eIDAS 2.0?",
    answer:
      "Yes. Under eIDAS 2.0, relying parties that wish to access wallet data must register with the supervisory body of the Member State in which they are established. Registration requires declaring which attributes the organisation intends to request and for what purpose. This registration requirement is a key privacy safeguard, enabling supervisory oversight of data access patterns and preventing unauthorised data harvesting. The exact registration process and requirements will be detailed in the implementing acts, and organisations should monitor these developments to ensure timely compliance.",
    category: "Business Compliance",
  },
  {
    id: "compliance-5",
    question: "Can the EUDIW replace existing KYC and identity verification processes?",
    answer:
      "The EUDIW is positioned to streamline and in many cases replace current KYC and identity verification processes significantly. For financial institutions, receiving government-verified Person Identification Data directly from the wallet provides a higher assurance level than many existing document-based or video-ident procedures. However, organisations must ensure their AML compliance frameworks are updated to accommodate wallet-based verification and that they maintain appropriate records. During the transition period, most organisations will need to support both traditional and wallet-based verification channels.",
    category: "Business Compliance",
  },
  {
    id: "compliance-6",
    question: "How does eIDAS 2.0 affect organisations that issue credentials or certificates?",
    answer:
      "Organisations that issue credentials, such as universities, professional bodies, government agencies, and certification authorities, should evaluate becoming attribute providers under eIDAS 2.0. Public sector bodies are specifically required to make attributes from their authentic sources available for electronic attestation. This means developing the capability to issue EAAs or QEAAs in standardised formats (SD-JWT, mdoc) compatible with the EUDIW. Organisations can issue credentials directly or work with a QTSP to issue Qualified Electronic Attestations of Attributes on their behalf.",
    category: "Business Compliance",
  },
  {
    id: "compliance-7",
    question: "What data minimisation obligations apply to relying parties under eIDAS 2.0?",
    answer:
      "eIDAS 2.0 imposes strict data minimisation requirements on relying parties. Organisations may only request the attributes that are strictly necessary for the service they provide and must declare the purpose of each attribute request during relying party registration. The wallet interface will present users with a clear overview of exactly which attributes are being requested and by whom, empowering informed consent. Relying parties that request excessive data face regulatory scrutiny from supervisory bodies and potential enforcement action. These obligations complement and reinforce existing GDPR data minimisation principles.",
    category: "Business Compliance",
  },

  // ─── Technical (6 questions) ───────────────────────────────────────────
  {
    id: "technical-1",
    question: "What credential formats does the EUDIW Architecture Reference Framework mandate?",
    answer:
      "The ARF mandates support for two credential formats: SD-JWT (Selective Disclosure JSON Web Token) and mdoc (ISO 18013-5). SD-JWT extends standard JWTs with selective disclosure capabilities using salted hashes, making it ideal for web-based and API-driven interactions. mdoc uses CBOR encoding for compact binary representation, making it efficient for offline and proximity-based scenarios via NFC or Bluetooth. Both formats support selective disclosure and are credential-format options within the OpenID4VC protocol suite.",
    category: "Technical",
  },
  {
    id: "technical-2",
    question: "What protocols are used for credential issuance and presentation in the EUDIW?",
    answer:
      "The EUDIW uses the OpenID for Verifiable Credentials (OpenID4VC) protocol family. OpenID4VCI (Verifiable Credential Issuance) defines how wallets receive credentials from issuers, while OpenID4VP (Verifiable Presentations) defines how wallets present credentials to verifiers. SIOPv2 (Self-Issued OpenID Provider v2) allows the wallet to act as an identity provider. These protocols build on the widely adopted OpenID Connect framework, lowering the barrier to adoption for organisations with existing OIDC infrastructure.",
    category: "Technical",
  },
  {
    id: "technical-3",
    question: "How does wallet attestation work and why is it important?",
    answer:
      "Wallet attestation is a cryptographic mechanism that allows relying parties and issuers to verify that a wallet application is genuine, certified, and running in a secure environment. The wallet provider (typically the Member State) issues a signed attestation bound to the wallet's cryptographic keys and device security features. When verifying a credential presentation, the relying party checks this attestation to confirm the wallet has not been tampered with. This prevents cloned or modified wallets from being used to present fraudulent credentials and provides a revocation mechanism if security vulnerabilities are discovered.",
    category: "Technical",
  },
  {
    id: "technical-4",
    question: "What security requirements must EUDIW implementations meet?",
    answer:
      "EUDIW implementations must meet high Level of Assurance requirements and undergo conformity assessment and certification under the Common Criteria framework or an equivalent scheme. Key security requirements include: cryptographic key storage in a secure element or trusted execution environment; protection against device compromise and wallet cloning; secure communication channels for credential exchange; measures to prevent relying party tracking and transaction correlation; and robust authentication mechanisms for wallet access. The wallet must also implement secure backup and recovery procedures that do not compromise credential integrity.",
    category: "Technical",
  },
  {
    id: "technical-5",
    question: "How should relying parties verify credentials presented by the EUDIW?",
    answer:
      "Relying parties should implement a multi-step verification process: first, verify the wallet attestation to confirm the wallet application is genuine; second, verify the cryptographic signature on the presented credentials against the issuer's public key; third, check the issuer's qualified status via the Trusted Lists; fourth, verify that the credential has not expired or been revoked; fifth, confirm that the credential is bound to the presenting wallet through key binding verification. The OpenID4VP protocol handles the presentation flow, and libraries for SD-JWT and mdoc verification are available in multiple programming languages.",
    category: "Technical",
  },
  {
    id: "technical-6",
    question: "Can existing OpenID Connect infrastructure be reused for eIDAS 2.0 integration?",
    answer:
      "Yes, to a significant extent. The OpenID4VC protocol suite is designed as an extension of OpenID Connect, meaning organisations with existing OIDC infrastructure have a head start. Existing identity provider configurations, client libraries, and security practices provide a foundation for supporting wallet-based flows. However, key additions are required: support for verifiable presentation request and response handling (OpenID4VP), credential format parsing and verification (SD-JWT and mdoc), Trusted List integration for issuer validation, and wallet attestation verification. Many OIDC libraries are being extended to support these capabilities.",
    category: "Technical",
  },
];

export function getFaqsByCategory(category: string): FaqItem[] {
  return faqItems.filter((item) => item.category === category);
}
