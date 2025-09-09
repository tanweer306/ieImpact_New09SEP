import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { query, context } = body;

    // Simulate API processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = {
      message:
      "We support all major appraisal software including TOTAL (a la mode), ACI Reports, ClickFORMS (Bradford), Appraise-It (SFREP), WinTOTAL, and Aurora. Which software are you currently using? We can seamlessly integrate with your workflow.",
      success: true,
      timestamp: new Date().toISOString()
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Software API error:", error);
    return NextResponse.json(
      {
        message:
        "Error fetching software compatibility information. Please contact us directly at info@ieimpact.com for software details.",
        success: false
      },
      { status: 500 }
    );
  }
}