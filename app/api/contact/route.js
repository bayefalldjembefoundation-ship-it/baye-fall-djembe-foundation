import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Baye Fall Djembe Foundation <onboarding@resend.dev>",
      to: ["bayefalldjembefoundation@gmail.com"],
      replyTo: email,
      subject: `New message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);

    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}