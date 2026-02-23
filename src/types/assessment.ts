export interface AssessmentOption {
  label: string;
  points: number;
}

export type AssessmentArea =
  | "legal"
  | "technical"
  | "security"
  | "organizational"
  | "documentation"
  | "integration";

export const AREA_LABELS: Record<AssessmentArea, string> = {
  legal: "Legal Framework",
  technical: "Technical Infrastructure",
  security: "Security & Privacy",
  organizational: "Organizational Readiness",
  documentation: "Documentation & Audit",
  integration: "Integration Planning",
};

export interface AssessmentQuestion {
  id: number;
  question: string;
  options: AssessmentOption[];
  area: AssessmentArea;
}

export interface AssessmentAnswers {
  [questionId: number]: number; // points scored for each question
}

export type AssessmentLevel = "ready" | "gaps" | "at_risk";

export interface AreaScore {
  area: AssessmentArea;
  label: string;
  score: number;
  maxScore: number;
  percentage: number;
}

export interface AssessmentResult {
  score: number;
  maxScore: number;
  percentage: number;
  level: AssessmentLevel;
  weakAreas: number[]; // question IDs where user scored 0 or 1
  areaScores: AreaScore[];
}

export interface LeadFormData {
  name: string;
  company: string;
  email: string;
  industry: string;
  companySize: string;
}

export interface LeadPayload extends Partial<LeadFormData> {
  email: string;
  source: "checker" | "landing" | "content_gate" | "newsletter";
  assessment_score?: number | null;
  assessment_level?: AssessmentLevel | null;
  assessment_answers?: Record<string, number> | null;
  area_scores?: Record<string, number> | null;
}
