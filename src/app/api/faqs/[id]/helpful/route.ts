import { NextRequest, NextResponse } from "next/server";

// This would typically connect to your database
// For now, we'll simulate the helpful count update

export async function POST(
request: NextRequest,
{ params }: {params: {id: string;};})
{
  try {
    const faqId = parseInt(params.id);

    if (!faqId) {
      return NextResponse.json({ error: "Invalid FAQ ID" }, { status: 400 });
    }

    // In a real application, you would:
    // 1. Update the helpful count in your database
    // 2. Possibly track which users have marked it as helpful to prevent duplicates
    // 3. Return the updated count

    // For now, we'll just return a success response
    return NextResponse.json({
      message: "Helpful count updated",
      faqId,
      helpful: Math.floor(Math.random() * 100) + 1 // Simulated count
    });
  } catch (error) {
    console.error("Error updating helpful count:", error);
    return NextResponse.json(
      { error: "Failed to update helpful count" },
      { status: 500 }
    );
  }
}