import { AssessmentQuestion } from "@/types/assessment";

export const questions: AssessmentQuestion[] = [
  {
    id: 1,
    question: "What type of identity data does your organization handle?",
    area: "technical",
    options: [
      { label: "No identity data", points: 0 },
      { label: "Basic personal data only", points: 1 },
      { label: "Government IDs and verified credentials", points: 2 },
      { label: "Full identity lifecycle including biometrics", points: 3 },
    ],
  },
  {
    id: 2,
    question: "Do you have a centralized authentication system?",
    area: "technical",
    options: [
      { label: "No centralized system", points: 0 },
      { label: "Basic SSO implementation", points: 1 },
      { label: "Multi-factor with identity provider integration", points: 2 },
      { label: "Zero-trust architecture with adaptive authentication", points: 3 },
    ],
  },
  {
    id: 3,
    question: "How familiar is your team with eIDAS 2.0 requirements?",
    area: "legal",
    options: [
      { label: "Not aware of eIDAS 2.0", points: 0 },
      { label: "Aware but haven't assessed impact", points: 1 },
      { label: "Have done initial assessment", points: 2 },
      { label: "Detailed compliance roadmap in place", points: 3 },
    ],
  },
  {
    id: 4,
    question: "What is your experience with digital identity wallets?",
    area: "integration",
    options: [
      { label: "No experience", points: 0 },
      { label: "Researching options", points: 1 },
      { label: "Pilot or proof of concept done", points: 2 },
      { label: "Production wallet integration active", points: 3 },
    ],
  },
  {
    id: 5,
    question: "What is your current GDPR compliance level?",
    area: "security",
    options: [
      { label: "Not fully compliant", points: 0 },
      { label: "Basic compliance in place", points: 1 },
      { label: "Comprehensive DPO and processes", points: 2 },
      { label: "Privacy-by-design embedded in all products", points: 3 },
    ],
  },
  {
    id: 6,
    question: "Do you handle remote identity verification?",
    area: "integration",
    options: [
      { label: "No", points: 0 },
      { label: "Manual verification only", points: 1 },
      { label: "Automated with basic checks", points: 2 },
      { label: "eIDAS-compliant remote verification", points: 3 },
    ],
  },
  {
    id: 7,
    question: "Are you integrated with external identity providers?",
    area: "integration",
    options: [
      { label: "No integrations", points: 0 },
      { label: "Social login only", points: 1 },
      { label: "National eID or bank ID integration", points: 2 },
      { label: "Multiple trust framework integrations", points: 3 },
    ],
  },
  {
    id: 8,
    question: "Does your architecture support verifiable credentials?",
    area: "technical",
    options: [
      { label: "Don't know what those are", points: 0 },
      { label: "Aware but no implementation", points: 1 },
      { label: "Experimenting with VC standards", points: 2 },
      { label: "W3C VC or ISO mDL in production", points: 3 },
    ],
  },
  {
    id: 9,
    question: "Do you have a defined digital identity roadmap?",
    area: "organizational",
    options: [
      { label: "No roadmap", points: 0 },
      { label: "Informal plans", points: 1 },
      { label: "Documented roadmap without timeline", points: 2 },
      { label: "Funded roadmap with milestones", points: 3 },
    ],
  },
  {
    id: 10,
    question: "How much time do you have to implement regulatory changes?",
    area: "legal",
    options: [
      { label: "No deadline awareness", points: 0 },
      { label: "Over 18 months", points: 1 },
      { label: "6 to 18 months", points: 2 },
      { label: "Under 6 months, urgent", points: 3 },
    ],
  },
  {
    id: 11,
    question: "Do you have internal expertise in digital identity?",
    area: "organizational",
    options: [
      { label: "No internal expertise", points: 0 },
      { label: "General IT team handles it", points: 1 },
      { label: "Dedicated security/compliance person", points: 2 },
      { label: "Specialized identity team", points: 3 },
    ],
  },
  {
    id: 12,
    question: "Have you conducted a compliance audit in the last 12 months?",
    area: "documentation",
    options: [
      { label: "Never", points: 0 },
      { label: "Over 12 months ago", points: 1 },
      { label: "Within last 12 months", points: 2 },
      { label: "Regular quarterly audits", points: 3 },
    ],
  },
];

export const MAX_SCORE = questions.length * 3; // 36
