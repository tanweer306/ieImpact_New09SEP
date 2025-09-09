import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { query, context } = body;

    // Simulate API processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = {
      message:
      "We offer flexible turnaround times: Standard (24 hours), Express (12 hours), and Rush (6 hours) for an additional $1.99. Our team works 24/7 to meet your deadlines. What's your typical timeline requirement?",
      success: true,
      timestamp: new Date().toISOString()
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Turnaround API error:", error);
    return NextResponse.json(
      {
        message:
        "Error fetching turnaround information. Please contact us directly at info@ieimpact.com for timing details.",
        success: false
      },
      { status: 500 }
    );
  }
}