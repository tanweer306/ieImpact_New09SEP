import { NextRequest, NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: false
  }
};

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const audioFile = formData.get("audio") as File;
    const message = formData.get("message") as string;
    const sessionId = formData.get("sessionId") as string;
    const timestamp = formData.get("timestamp") as string;
    const type = formData.get("type") as string;

    if (!audioFile) {
      return NextResponse.json(
        { message: "No audio file provided" },
        { status: 400 }
      );
    }

    // Send to webhook if configured
    const webhookUrl = process.env.NEXT_PUBLIC_CHATBOT_WEBHOOK_URL;
    let webhookResponse = null;

    if (
    webhookUrl &&
    webhookUrl !== "https://your-webhook-url-here.com/api/chat")
    {
      try {
        const webhookFormData = new FormData();
        webhookFormData.append("audio", audioFile);
        webhookFormData.append("type", type || "audio_message");
        webhookFormData.append("message", message || "");
        webhookFormData.append("sessionId", sessionId || "");
        webhookFormData.append(
          "timestamp",
          timestamp || new Date().toISOString()
        );
        webhookFormData.append("context", "ieIMPACT data entry services");

        const webhookResp = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            ...(process.env.NEXT_PUBLIC_CHATBOT_API_KEY && {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_CHATBOT_API_KEY}`
            })
          },
          body: webhookFormData
        });

        if (webhookResp.ok) {
          webhookResponse = await webhookResp.json();
        }
      } catch (error) {
        console.error("Webhook error:", error);
      }
    }

    // Here you would typically:
    // 1. Save the file to storage (AWS S3, etc.)
    // 2. Process the audio (speech-to-text using services like OpenAI Whisper, Google Speech-to-Text, etc.)
    // 3. Send the transcribed text to your AI service
    // 4. Return the AI response

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    let responseMessage =
    "I received your audio message! Currently, I can process text messages for the best experience. For immediate assistance with audio queries, please call us at 408-256-0154.";

    if (message) {
      responseMessage =
      `I received your audio message with the note: "${message}". ` +
      responseMessage;
    }

    responseMessage += " How else can I help you today?";

    // Use webhook response if available
    if (
    webhookResponse && (
    webhookResponse.message || webhookResponse.response))
    {
      responseMessage = webhookResponse.message || webhookResponse.response;
    }

    const response = {
      message: responseMessage,
      success: true,
      audioSize: audioFile.size,
      timestamp: new Date().toISOString()
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Audio processing error:", error);
    return NextResponse.json(
      {
        message:
        "Error processing audio message. Please try typing your message or call us at 408-256-0154.",
        success: false
      },
      { status: 500 }
    );
  }
}