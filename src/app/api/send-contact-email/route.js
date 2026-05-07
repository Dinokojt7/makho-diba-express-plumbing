import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, phone, message, businessName } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${businessName}" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL || 'macho.diba@gmail.com',
      replyTo: email,
      subject: `New Enquiry from ${name} — ${businessName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #004B7A; margin-bottom: 16px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; color: #333; width: 120px;">Name</td><td style="padding: 8px 0; color: #555;">${name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #004B7A;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Phone</td><td style="padding: 8px 0; color: #555;">${phone || 'Not provided'}</td></tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f4f7fa; border-radius: 8px;">
            <p style="font-weight: bold; color: #333; margin: 0 0 8px;">Message</p>
            <p style="color: #555; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #999;">Sent from the ${businessName} website contact form.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Email send error:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
