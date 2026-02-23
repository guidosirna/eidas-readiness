"use client";

import { useState, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { questions, MAX_SCORE } from "@/lib/questions";
import { trackAssessmentStart, trackAssessmentComplete, trackLeadSubmit } from "@/lib/analytics";
import type {
  AssessmentAnswers,
  AssessmentResult,
  AssessmentLevel,
  AssessmentArea,
  AreaScore,
  LeadFormData,
} from "@/types/assessment";
import { AREA_LABELS } from "@/types/assessment";

/* ------------------------------------------------------------------ */
/*  Scoring                                                            */
/* ------------------------------------------------------------------ */
function calculateResult(answers: AssessmentAnswers): AssessmentResult {
  const score = Object.values(answers).reduce((sum, pts) => sum + pts, 0);
  const percentage = Math.round((score / MAX_SCORE) * 100);

  let level: AssessmentLevel;
  if (score >= 28) level = "ready";
  else if (score >= 15) level = "gaps";
  else level = "at_risk";

  const weakAreas = Object.entries(answers)
    .filter(([, pts]) => pts <= 1)
    .map(([id]) => Number(id));

  // Per-area scores
  const areaMap: Record<AssessmentArea, { score: number; max: number }> = {
    legal: { score: 0, max: 0 },
    technical: { score: 0, max: 0 },
    security: { score: 0, max: 0 },
    organizational: { score: 0, max: 0 },
    documentation: { score: 0, max: 0 },
    integration: { score: 0, max: 0 },
  };

  for (const q of questions) {
    areaMap[q.area].max += 3;
    areaMap[q.area].score += answers[q.id] ?? 0;
  }

  const areaScores: AreaScore[] = (Object.keys(areaMap) as AssessmentArea[]).map((area) => ({
    area,
    label: AREA_LABELS[area],
    score: areaMap[area].score,
    maxScore: areaMap[area].max,
    percentage: areaMap[area].max > 0 ? Math.round((areaMap[area].score / areaMap[area].max) * 100) : 0,
  }));

  return { score, maxScore: MAX_SCORE, percentage, level, weakAreas, areaScores };
}

/* ------------------------------------------------------------------ */
/*  Netlify Forms helper                                               */
/* ------------------------------------------------------------------ */
function encodeFormData(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

/* ------------------------------------------------------------------ */
/*  Progress Bar                                                       */
/* ------------------------------------------------------------------ */
function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = ((current + 1) / total) * 100;
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between text-base mb-2" style={{ color: "#62718d" }}>
        <span>
          Question {current + 1} of {total}
        </span>
        <span>{Math.round(pct)}%</span>
      </div>
      <div className="w-full h-1.5 overflow-hidden" style={{ backgroundColor: "#e8e8e8", borderRadius: "2px" }}>
        <div
          className="h-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%`, backgroundColor: "#0033ff", borderRadius: "2px" }}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Question Card                                                      */
/* ------------------------------------------------------------------ */
function QuestionStep({
  questionIndex,
  selectedPoints,
  onSelect,
  onBack,
}: {
  questionIndex: number;
  selectedPoints: number | undefined;
  onSelect: (questionId: number, points: number) => void;
  onBack: () => void;
}) {
  const q = questions[questionIndex];

  return (
    <div className="animate-fadeIn">
      <ProgressBar current={questionIndex} total={questions.length} />

      <h2 className="text-xl md:text-2xl font-semibold mb-8 leading-snug" style={{ color: "#010f62" }}>
        {q.question}
      </h2>

      <div className="grid gap-3">
        {q.options.map((opt) => {
          const isSelected = selectedPoints === opt.points;
          return (
            <button
              key={opt.points}
              onClick={() => onSelect(q.id, opt.points)}
              className="w-full text-left px-5 py-4 text-base transition-all duration-200 cursor-pointer"
              style={{
                borderRadius: "2px",
                border: isSelected ? "1px solid #0033ff" : "1px solid #e8e8e8",
                backgroundColor: isSelected ? "#0033ff" : "#fff",
                color: isSelected ? "#fff" : "#010f62",
                fontWeight: isSelected ? 500 : 400,
                boxShadow: isSelected ? "0 0 30px rgba(0,51,255,0.15)" : "0 0 30px rgba(0,0,0,0.05)",
              }}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      {questionIndex > 0 && (
        <button onClick={onBack} className="btn-secondary mt-6">
          &larr; Back
        </button>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Industry / Company Size Options                                    */
/* ------------------------------------------------------------------ */
const INDUSTRIES = [
  "Financial Services",
  "Healthcare",
  "Government",
  "Telecom",
  "E-Commerce",
  "Travel & Transport",
  "Education",
  "Legal & Professional Services",
  "Technology / SaaS",
  "Other",
];

const COMPANY_SIZES = [
  "1-50 employees",
  "51-200 employees",
  "201-1,000 employees",
  "1,001-5,000 employees",
  "5,000+ employees",
];

/* ------------------------------------------------------------------ */
/*  Lead Form                                                          */
/* ------------------------------------------------------------------ */
function LeadForm({
  onSubmit,
  isSubmitting,
  onBack,
}: {
  onSubmit: (data: LeadFormData) => void;
  isSubmitting: boolean;
  onBack: () => void;
}) {
  const [form, setForm] = useState<LeadFormData>({
    name: "",
    company: "",
    email: "",
    industry: "",
    companySize: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  const selectStyle = {
    borderRadius: "2px",
    border: "1px solid #e8e8e8",
    color: "#010f62",
    backgroundColor: "#fff",
  };

  return (
    <div className="animate-fadeIn">
      <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3" style={{ color: "#010f62" }}>
        Almost there
      </h2>
      <p className="mb-8" style={{ color: "#62718d" }}>
        Enter your details to see your personalized readiness report.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="form-label">Full name</label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="form-input"
              placeholder="Jane Smith"
            />
          </div>
          <div>
            <label htmlFor="company" className="form-label">Company</label>
            <input
              id="company"
              type="text"
              required
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="form-input"
              placeholder="Acme Corp"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="form-label">Work email</label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="form-input"
            placeholder="jane@acme.com"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="industry" className="form-label">Industry</label>
            <select
              id="industry"
              required
              value={form.industry}
              onChange={(e) => setForm({ ...form, industry: e.target.value })}
              className="form-input w-full py-3"
              style={selectStyle}
            >
              <option value="">Select industry</option>
              {INDUSTRIES.map((ind) => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="companySize" className="form-label">Company size</label>
            <select
              id="companySize"
              required
              value={form.companySize}
              onChange={(e) => setForm({ ...form, companySize: e.target.value })}
              className="form-input w-full py-3"
              style={selectStyle}
            >
              <option value="">Select size</option>
              {COMPANY_SIZES.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full disabled:opacity-50"
        >
          {isSubmitting ? "Generating report..." : "See my results"}
        </button>
      </form>

      <button onClick={onBack} className="btn-secondary mt-4">
        &larr; Back to questions
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Area Score Bar                                                     */
/* ------------------------------------------------------------------ */
function AreaBar({ areaScore, color }: { areaScore: AreaScore; color: string }) {
  return (
    <div>
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium" style={{ color: "#010f62" }}>{areaScore.label}</span>
        <span className="text-sm font-semibold" style={{ color }}>{areaScore.percentage}%</span>
      </div>
      <div className="w-full h-2 overflow-hidden" style={{ backgroundColor: "#e8e8e8", borderRadius: "2px" }}>
        <div
          className="h-full transition-all duration-700 ease-out"
          style={{ width: `${areaScore.percentage}%`, backgroundColor: color, borderRadius: "2px" }}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Results Screen                                                     */
/* ------------------------------------------------------------------ */
function ResultsScreen({ result }: { result: AssessmentResult }) {
  const levelConfig = {
    ready: {
      bg: "#f0fdf4",
      badge: "bg-emerald-500 text-white",
      badgeLabel: "Ready",
      scoreColor: "#22c55e",
      headline: "Your organization is well-positioned for eIDAS 2.0",
      description:
        "You have a strong foundation in digital identity and compliance. Focus on optimization and staying ahead of regulatory updates.",
    },
    gaps: {
      bg: "#fffbeb",
      badge: "bg-amber-500 text-white",
      badgeLabel: "Gaps Identified",
      scoreColor: "#f59e0b",
      headline: "You have a foundation, but critical gaps need attention",
      description:
        "Your organization has made progress, but there are areas that need focused improvement before eIDAS 2.0 deadlines.",
    },
    at_risk: {
      bg: "#fef2f2",
      badge: "bg-red-500 text-white",
      badgeLabel: "At Risk",
      scoreColor: "#ef4444",
      headline: "Your organization faces significant compliance risk",
      description:
        "Immediate action is needed to address fundamental gaps in your digital identity infrastructure and compliance posture.",
    },
  };

  const config = levelConfig[result.level];

  // Sort areas by score ascending (weakest first for gaps/risk, strongest first for ready)
  const sortedAreas = [...result.areaScores].sort((a, b) =>
    result.level === "ready" ? b.percentage - a.percentage : a.percentage - b.percentage
  );

  const weakQuestions = result.weakAreas.map(
    (id) => questions.find((q) => q.id === id)!
  );

  // Color per area bar based on percentage
  const barColor = (pct: number) => {
    if (pct >= 75) return "#22c55e";
    if (pct >= 40) return "#f59e0b";
    return "#ef4444";
  };

  return (
    <div className="animate-fadeIn">
      {/* Score Header */}
      <div className="text-center mb-8">
        <div className="text-7xl font-bold mb-2" style={{ color: config.scoreColor }}>
          {result.percentage}%
        </div>
        <div className="text-lg" style={{ color: "#62718d" }}>
          {result.score} out of {result.maxScore} points
        </div>
      </div>

      {/* Level Card */}
      <div className="p-6 md:p-8 mb-8" style={{ borderRadius: "2px", border: "1px solid #e8e8e8", backgroundColor: config.bg }}>
        <span
          className={`inline-block text-base font-medium px-3 py-1 mb-4 ${config.badge}`}
          style={{ borderRadius: "2px" }}
        >
          {config.badgeLabel}
        </span>
        <h2 className="font-display text-xl md:text-2xl font-semibold mb-3" style={{ color: "#010f62" }}>
          {config.headline}
        </h2>
        <p className="leading-relaxed" style={{ color: "#62718d" }}>{config.description}</p>
      </div>

      {/* Area Breakdown */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-5" style={{ color: "#010f62" }}>
          Score by area
        </h3>
        <div className="space-y-4">
          {sortedAreas.map((as) => (
            <AreaBar key={as.area} areaScore={as} color={barColor(as.percentage)} />
          ))}
        </div>
      </div>

      {/* Weak Areas Detail (gaps / at_risk only) */}
      {result.level !== "ready" && weakQuestions.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4" style={{ color: "#010f62" }}>
            {result.level === "gaps" ? "Areas requiring attention" : "Critical risk areas"}
          </h3>
          <ul className="space-y-2">
            {weakQuestions.map((q) => (
              <li
                key={q.id}
                className="p-4"
                style={{ borderRadius: "2px", border: "1px solid #e8e8e8", borderLeft: `3px solid ${config.scoreColor}` }}
              >
                <span className="text-xs font-medium uppercase tracking-wider"
                  style={{ color: "#0033ff" }}>
                  {AREA_LABELS[q.area]}
                </span>
                <p className="text-sm mt-1" style={{ color: "#62718d" }}>{q.question}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Ready recommendations */}
      {result.level === "ready" && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4" style={{ color: "#010f62" }}>
            Optimization recommendations
          </h3>
          <ul className="space-y-3">
            {[
              "Explore advanced wallet integration patterns for cross-border interoperability",
              "Consider contributing to EU standardization efforts to shape upcoming requirements",
              "Build internal training programs to maintain your competitive advantage",
            ].map((rec, i) => (
              <li key={i} className="card-static p-4" style={{ borderLeft: "4px solid #22c55e", color: "#62718d" }}>
                {rec}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA */}
      <div className="pattern-pixels p-8 sm:p-10 text-center" style={{ backgroundColor: "#010f62", borderRadius: "2px" }}>
        <h3 className="relative text-lg sm:text-xl font-semibold text-white mb-2">What&apos;s next?</h3>
        <p className="relative text-sm text-white/60 mb-6 max-w-md mx-auto">
          We&apos;ll send a detailed breakdown of your results and recommended next steps to your inbox.
        </p>
        <a href="/guide/eidas-2-compliance" className="relative inline-flex items-center gap-2 bg-white font-semibold transition-colors hover:bg-gray-100" style={{ color: "#010f62", padding: "10px 24px", borderRadius: "2px", fontSize: "14px" }}>
          Read the full compliance guide <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Wizard                                                        */
/* ------------------------------------------------------------------ */
type Step = "questions" | "lead-form" | "results";

export default function AssessmentWizard() {
  const [step, setStep] = useState<Step>("questions");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<AssessmentAnswers>({});
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSelect = useCallback(
    (questionId: number, points: number) => {
      if (currentQuestion === 0 && Object.keys(answers).length === 0) {
        trackAssessmentStart();
      }
      const updated = { ...answers, [questionId]: points };
      setAnswers(updated);

      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion((prev) => prev + 1);
        } else {
          setStep("lead-form");
        }
      }, 250);
    },
    [answers, currentQuestion]
  );

  const handleBack = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }, [currentQuestion]);

  const handleLeadSubmit = useCallback(
    async (formData: LeadFormData) => {
      setIsSubmitting(true);
      const assessmentResult = calculateResult(answers);

      // Build area scores as flat key-value for Netlify Forms
      const areaScoresFlat: Record<string, string> = {};
      for (const as of assessmentResult.areaScores) {
        areaScoresFlat[`area_${as.area}`] = String(as.percentage);
      }

      // Build individual answers as flat key-value
      const answersFlat: Record<string, string> = {};
      for (const q of questions) {
        const pts = answers[q.id] ?? 0;
        const chosen = q.options.find((o) => o.points === pts);
        answersFlat[`q${q.id}_${q.area}`] = chosen?.label ?? "";
      }

      try {
        // Submit to Netlify Forms
        await fetch("/__forms.html", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encodeFormData({
            "form-name": "assessment",
            name: formData.name,
            company: formData.company,
            email: formData.email,
            industry: formData.industry,
            company_size: formData.companySize,
            score: String(assessmentResult.score),
            percentage: String(assessmentResult.percentage),
            level: assessmentResult.level,
            weak_areas: assessmentResult.weakAreas.join(","),
            ...areaScoresFlat,
            ...answersFlat,
          }),
        });
      } catch {
        console.error("Failed to save lead");
      }

      setResult(assessmentResult);
      setIsSubmitting(false);
      setStep("results");
      trackAssessmentComplete(assessmentResult.percentage);
      trackLeadSubmit("assessment");
    },
    [answers]
  );

  return (
    <div>
      <div className="w-full max-w-xl card-static p-6 md:p-10">
        {/* Hidden Netlify form for bot detection */}
        <form name="assessment" data-netlify="true" hidden>
          <input type="hidden" name="form-name" value="assessment" />
          <input name="name" />
          <input name="company" />
          <input name="email" />
          <input name="industry" />
          <input name="company_size" />
          <input name="score" />
          <input name="percentage" />
          <input name="level" />
          <input name="weak_areas" />
          <input name="area_legal" />
          <input name="area_technical" />
          <input name="area_security" />
          <input name="area_organizational" />
          <input name="area_documentation" />
          <input name="area_integration" />
          {questions.map((q) => (
            <input key={q.id} name={`q${q.id}_${q.area}`} />
          ))}
        </form>

        {/* Header */}
        {step === "questions" && currentQuestion === 0 && (
          <div className="mb-10 animate-fadeIn">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-3" style={{ color: "#010f62" }}>
              Start the Assessment
            </h2>
            <p className="leading-relaxed" style={{ color: "#62718d" }}>
              12 questions. 3 minutes. Find out where your organization stands
              on digital identity compliance.
            </p>
          </div>
        )}

        {step === "questions" && (
          <QuestionStep
            key={currentQuestion}
            questionIndex={currentQuestion}
            selectedPoints={answers[questions[currentQuestion].id]}
            onSelect={handleSelect}
            onBack={handleBack}
          />
        )}

        {step === "lead-form" && (
          <LeadForm
            onSubmit={handleLeadSubmit}
            isSubmitting={isSubmitting}
            onBack={() => {
              setStep("questions");
              setCurrentQuestion(questions.length - 1);
            }}
          />
        )}

        {step === "results" && result && <ResultsScreen result={result} />}
      </div>
    </div>
  );
}
