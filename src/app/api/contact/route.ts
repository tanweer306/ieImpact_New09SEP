import { NextRequest, NextResponse } from "next/server";

// Define the contact form data interface
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.company || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Get database configuration from environment variables
    const databaseUrl = process.env.DATABASE_URL;
    const databaseType = process.env.DATABASE_TYPE || "webhook";

    if (!databaseUrl) {
      console.error("DATABASE_URL not configured");
      return NextResponse.json(
        { error: "Database configuration missing" },
        { status: 500 }
      );
    }

    // Prepare contact data with timestamp
    const contactData = {
      ...body,
      timestamp: new Date().toISOString(),
      source: "website_contact_form",
      ip_address:
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown"
    };

    let result;

    // Handle different database types
    switch (databaseType.toLowerCase()) {
      case "webhook":
        result = await sendToWebhook(databaseUrl, contactData);
        break;

      case "mysql":
      case "postgresql":
      case "postgres":
        result = await sendToSQLDatabase(
          databaseUrl,
          contactData,
          databaseType
        );
        break;

      case "mongodb":
        result = await sendToMongoDB(databaseUrl, contactData);
        break;

      case "airtable":
        result = await sendToAirtable(databaseUrl, contactData);
        break;

      default:
        // Default to webhook if type not specified
        result = await sendToWebhook(databaseUrl, contactData);
    }

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: "Contact form submitted successfully",
        id: result.id
      });
    } else {
      throw new Error(result.error || "Failed to save contact data");
    }
  } catch (error) {
    console.error("Contact form API error:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        message: "Failed to process contact form submission"
      },
      { status: 500 }
    );
  }
}

// Webhook implementation
async function sendToWebhook(webhookUrl: string, data: any) {
  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.DATABASE_API_KEY && {
          Authorization: `Bearer ${process.env.DATABASE_API_KEY}`
        })
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`Webhook failed: ${response.status}`);
    }

    const result = await response.json();
    return { success: true, id: result.id || Date.now().toString() };
  } catch (error) {
    console.error("Webhook error:", error);
    return { success: false, error: error.message };
  }
}

// SQL Database implementation (MySQL/PostgreSQL)
async function sendToSQLDatabase(
connectionString: string,
data: any,
dbType: string)
{
  try {
    // This is a placeholder for SQL database integration
    // You would typically use a library like 'mysql2' or 'pg' here

    console.log(`Saving to ${dbType} database:`, data);

    // Example SQL query structure:
    const query = `
      INSERT INTO contacts (name, email, phone, company, message, timestamp, source, ip_address)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    // For now, return success (you'll need to implement actual DB connection)
    return {
      success: true,
      id: Date.now().toString(),
      note: `${dbType} integration requires additional setup - see API comments`
    };
  } catch (error) {
    console.error(`${dbType} database error:`, error);
    return { success: false, error: error.message };
  }
}

// MongoDB implementation
async function sendToMongoDB(connectionString: string, data: any) {
  try {
    // This is a placeholder for MongoDB integration
    // You would typically use 'mongodb' or 'mongoose' here

    console.log("Saving to MongoDB:", data);

    // For now, return success (you'll need to implement actual DB connection)
    return {
      success: true,
      id: Date.now().toString(),
      note: "MongoDB integration requires additional setup - see API comments"
    };
  } catch (error) {
    console.error("MongoDB error:", error);
    return { success: false, error: error.message };
  }
}

// Airtable implementation
async function sendToAirtable(baseUrl: string, data: any) {
  try {
    const airtableApiKey = process.env.AIRTABLE_API_KEY;
    if (!airtableApiKey) {
      throw new Error("Airtable API key not configured");
    }

    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${airtableApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        records: [
        {
          fields: {
            Name: data.name,
            Email: data.email,
            Phone: data.phone || "",
            Company: data.company,
            Message: data.message,
            Timestamp: data.timestamp,
            Source: data.source,
            "IP Address": data.ip_address
          }
        }]

      })
    });

    if (!response.ok) {
      throw new Error(`Airtable API failed: ${response.status}`);
    }

    const result = await response.json();
    return {
      success: true,
      id: result.records[0]?.id || Date.now().toString()
    };
  } catch (error) {
    console.error("Airtable error:", error);
    return { success: false, error: error.message };
  }
}

// GET method for health check
export async function GET() {
  return NextResponse.json({
    status: "Contact API is running",
    timestamp: new Date().toISOString(),
    endpoints: {
      POST: "/api/contact - Submit contact form"
    }
  });
}