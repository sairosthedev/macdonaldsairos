import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();
    console.log("Received request:", { email, subject, message });

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "Email, subject, and message are required" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email], // Send to both the from email and the user's email
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    console.log("Email sent successfully:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    // Log more details about the error
    if (error.response) {
      console.error("Resend API error:", error.response.body);
    }
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}