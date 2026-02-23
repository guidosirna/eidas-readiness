import { NextRequest, NextResponse } from "next/server";
import { LeadPayload } from "@/types/assessment";

export async function POST(request: NextRequest) {
  try {
    const body: LeadPayload = await request.json();

    const { name, company, email, source, industry, companySize, assessment_score, assessment_level, assessment_answers, area_scores } =
      body;

    if (!email || !source) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Log for local dev / Netlify function logs
    // In production, Netlify Forms handles persistence
    console.log("New lead captured:", {
      name,
      company,
      email,
      source,
      industry,
      companySize,
      assessment_score,
      assessment_level,
      assessment_answers,
      area_scores,
      created_at: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
