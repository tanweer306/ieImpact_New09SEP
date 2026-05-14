import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const uploadedFiles = formData.getAll("files") as File[];
    const message = formData.get("message") as string;
    const sessionId = formData.get("sessionId") as string;
    const timestamp = formData.get("timestamp") as string;
    const type = formData.get("type") as string;

    if (!uploadedFiles || uploadedFiles.length === 0) {
      return NextResponse.json(
        { message: "No files provided" },
        { status: 400 }
      );
    }

    // File validation for all files
    const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "text/plain",
    "image/png",
    "image/jpeg",
    "image/jpg",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"];


    const maxSize = 10 * 1024 * 1024; // 10MB per file
    const maxTotalSize = 50 * 1024 * 1024; // 50MB total
    let totalSize = 0;

    // Validate each file
    for (const file of uploadedFiles) {
      if (!allowedTypes.includes(file.type)) {
        return NextResponse.json(
          {
            message: `File "${file.name}" type not supported. Please upload PDF, DOC, DOCX, TXT, PNG, JPG, XLS, or XLSX files.`
          },
          { status: 400 }
        );
      }

      if (file.size > maxSize) {
        return NextResponse.json(
          {
            message: `File "${file.name}" is too large. Please upload files smaller than 10MB.`
          },
          { status: 400 }
        );
      }

      totalSize += file.size;
    }

    if (totalSize > maxTotalSize) {
      return NextResponse.json(
        {
          message:
          "Total file size too large. Please keep total uploads under 50MB."
        },
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

        // Add all files to webhook
        uploadedFiles.forEach((file, index) => {
          webhookFormData.append(`files`, file);
        });

        webhookFormData.append("type", type || "file_upload");
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

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const fileNames = uploadedFiles.map((f) => f.name).join(", ");
    const fileCount = uploadedFiles.length;

    let responseMessage = `I received your ${fileCount} file${fileCount > 1 ? "s" : ""}: ${fileNames}.`;

    if (message) {
      responseMessage += ` Your message: "${message}".`;
    }

    responseMessage +=
    " For document review and data entry services, please submit your files through our secure portal at secure.ieimpact.com or email them to info@ieimpact.com. Our team will process your documents and get back to you within 24 hours. How else can I assist you?";

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
      files: uploadedFiles.map((file) => ({
        name: file.name,
        size: file.size,
        type: file.type
      })),
      fileCount: fileCount,
      totalSize: totalSize,
      timestamp: new Date().toISOString()
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("File processing error:", error);
    return NextResponse.json(
      {
        message:
        "Error processing file. Please try again or email your documents to info@ieimpact.com.",
        success: false
      },
      { status: 500 }
    );
  }
}