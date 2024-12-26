import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY is not set in environment variables");
}

// Initialize SendGrid with your API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required" },
        { status: 400 }
      );
    }

    const msg = {
      to: "kartikey224252@gmail.com", // Your email
      from: "kartikey224252@gmail.com", // Your verified SendGrid sender
      replyTo: email, // The sender's email for replies
      subject: `New Portfolio Contact Form Message from ${email}`,
      text: message,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #333; margin-bottom: 20px;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0;"><strong>From:</strong> ${email}</p>
          </div>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            <p style="margin: 0;"><strong>Message:</strong></p>
            <p style="margin: 10px 0 0; white-space: pre-wrap;">${message}</p>
          </div>
          <div style="margin-top: 20px; font-size: 12px; color: #666;">
            <p>This message was sent from your portfolio contact form.</p>
          </div>
        </div>
      `,
    };

    try {
      await sgMail.send(msg);
      console.log('Email sent successfully to', msg.to);
      
      return NextResponse.json(
        { message: "Email sent successfully!" },
        { status: 200 }
      );
    } catch (sendError: any) {
      console.error('SendGrid Error:', {
        message: sendError.message,
        response: sendError.response?.body,
      });
      
      return NextResponse.json(
        { 
          error: "Failed to send email. Please try again later.",
          details: process.env.NODE_ENV === 'development' ? sendError.message : undefined
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
} 