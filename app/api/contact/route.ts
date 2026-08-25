import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

interface ContactPayload {
  name: string
  email: string
  company?: string
  phone?: string
  message: string
  type?: string // e.g. "Demo request", "Free scan", "General inquiry"
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function POST(request: Request) {
  let body: ContactPayload

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request body." }, { status: 400 })
  }

  const { name, email, company, phone, message, type } = body

  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, message: "Name, email, and message are required." },
      { status: 400 },
    )
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ success: false, message: "Please provide a valid email address." }, { status: 400 })
  }

  // Basic anti-spam: reject absurdly long payloads.
  if (message.length > 5000 || name.length > 200) {
    return NextResponse.json({ success: false, message: "Submission too large." }, { status: 400 })
  }

  const gmailUser = process.env.GMAIL_USER
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD
  const receiver = process.env.CONTACT_TO_EMAIL || gmailUser

  if (!gmailUser || !gmailAppPassword) {
    console.error("Contact form: GMAIL_USER / GMAIL_APP_PASSWORD are not configured.")
    return NextResponse.json(
      {
        success: false,
        message: "Email delivery is not configured yet. Please reach us directly at Security@digitalassetdefenders.com.",
      },
      { status: 500 },
    )
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    })

    const subjectLabel = type ? `[${type}]` : "[Website Contact]"

    await transporter.sendMail({
      from: `"Digital Asset Defenders Website" <${gmailUser}>`,
      to: receiver,
      replyTo: email,
      subject: `${subjectLabel} New message from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : null,
        phone ? `Phone: ${phone}` : null,
        type ? `Type: ${type}` : null,
        "",
        "Message:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2 style="color:#ff2b4d;">New website enquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
          ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
          ${type ? `<p><strong>Type:</strong> ${escapeHtml(type)}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    })

    return NextResponse.json({
      success: true,
      message: "Message sent successfully. Our team will reply from our official company email shortly.",
    })
  } catch (error) {
    console.error("Contact form send failed:", error)
    return NextResponse.json(
      {
        success: false,
        message: "We couldn't send your message right now. Please email Security@digitalassetdefenders.com directly.",
      },
      { status: 502 },
    )
  }
}
