# Chatbot Webhook Integration

## Overview
The chatbot now supports multiple file uploads and sends all interactions (text messages, audio messages, and files) to your configured webhook URL.

## Environment Variables Setup

Create a `.env.local` file in your project root with the following variables:

```bash
# Required: Your webhook URL that will receive all chatbot data
NEXT_PUBLIC_CHATBOT_WEBHOOK_URL=https://your-webhook-endpoint.com/api/chatbot

# Optional: API key for webhook authentication
NEXT_PUBLIC_CHATBOT_API_KEY=your_secret_api_key
```

## Webhook Payload Formats

### 1. Text Messages
**Endpoint:** `POST {WEBHOOK_URL}`
**Content-Type:** `application/json`

```json
{
  "type": "text_message",
  "message": "User's text message",
  "context": "ieIMPACT data entry services",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "sessionId": "unique-session-id"
}
```

### 2. Audio Messages
**Endpoint:** `POST {WEBHOOK_URL}`
**Content-Type:** `multipart/form-data`

**Form Data:**
- `audio`: Audio file (WAV format)
- `type`: "audio_message"
- `message`: Optional text message accompanying the audio
- `sessionId`: Unique session identifier
- `timestamp`: ISO timestamp
- `context`: "ieIMPACT data entry services"

### 3. File Uploads (Multiple Files)
**Endpoint:** `POST {WEBHOOK_URL}`
**Content-Type:** `multipart/form-data`

**Form Data:**
- `files`: Multiple files (can be PDF, DOC, DOCX, TXT, PNG, JPG, XLS, XLSX)
- `type`: "file_upload"
- `message`: Optional text message describing the files
- `sessionId`: Unique session identifier
- `timestamp`: ISO timestamp
- `context`: "ieIMPACT data entry services"

## File Upload Enhancements

### Multiple File Support
- Users can now select multiple files at once
- Maximum 10MB per file, 50MB total per upload
- Supported formats: PDF, DOC, DOCX, TXT, PNG, JPG, JPEG, XLS, XLSX

### File Upload Modal
- Shows list of selected files
- Optional message field for context
- File validation with error messages

## Webhook Response Format

Your webhook should return a JSON response:

```json
{
  "message": "Your bot response message",
  "success": true
}
```

Alternative response format:
```json
{
  "response": "Your bot response message",
  "status": "success"
}
```

If your webhook returns a successful response with a `message` or `response` field, that will be displayed to the user. Otherwise, fallback responses are used.

## Authentication

If you set `NEXT_PUBLIC_CHATBOT_API_KEY`, it will be sent as a Bearer token:

```
Authorization: Bearer your_secret_api_key
```

## Error Handling

If the webhook fails or is not configured, the chatbot will:
1. For text messages: Use fallback responses with specific answers for pricing, turnaround, and software questions
2. For audio messages: Show a message directing users to call or type their message
3. For file uploads: Show a message directing users to the secure portal or email

## Testing Your Webhook

You can test your webhook integration using tools like:
- ngrok for local development
- RequestBin or Webhook.site for testing
- Postman for API testing

## Security Considerations

1. Always validate the API key if using authentication
2. Validate file types and sizes on your webhook endpoint
3. Scan uploaded files for malware
4. Use HTTPS for your webhook endpoint
5. Implement rate limiting to prevent abuse

## Example Webhook Implementation (Node.js/Express)

```javascript
const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({ dest: 'uploads/' });

app.post('/api/chatbot', upload.any(), (req, res) => {
  const { type, message, sessionId, timestamp } = req.body;
  
  // Authenticate
  const authHeader = req.headers.authorization;
  if (authHeader !== `Bearer ${process.env.CHATBOT_API_KEY}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  console.log('Received:', { type, message, sessionId, files: req.files });
  
  // Process based on type
  switch (type) {
    case 'text_message':
      // Handle text message
      break;
    case 'audio_message':
      // Handle audio file in req.files
      break;
    case 'file_upload':
      // Handle uploaded files in req.files
      break;
  }
  
  // Return response
  res.json({
    message: "Thanks for your message! We'll get back to you soon.",
    success: true
  });
});
```

## Session Management

Each user session has a unique `sessionId` that persists throughout their chat session. Use this to:
- Track conversation history
- Associate files with specific users
- Maintain context across multiple interactions

## File Storage Recommendations

For production use, consider:
- AWS S3 for file storage
- CloudFront for file delivery
- Database to track file metadata
- Virus scanning for uploaded files
- File encryption at rest and in transit