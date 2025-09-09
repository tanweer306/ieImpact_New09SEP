import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { query, context } = body;

    // Simulate API processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = {
      message:
      "Our pricing is very competitive! We offer transparent rates starting at $2.99 per report with volume discounts available. We also provide 3 free trial reports for new customers. Would you like me to send you our detailed pricing sheet?",
      success: true,
      timestamp: new Date().toISOString()
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Pricing API error:", error);
    return NextResponse.json(
      {
        message:
        "Error fetching pricing information. Please contact us directly at info@ieimpact.com for pricing details.",
        success: false
      },
      { status: 500 }
    );
  }
}