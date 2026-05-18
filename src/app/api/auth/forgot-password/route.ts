import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Only these emails can ever trigger a password reset
const SUPERADMIN_EMAILS = [
  "amirnasir0@gmail.com",
  "insonohearing@gmail.com",
  "admin@insonohearing.com",
];

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email) return NextResponse.json({ error: "Email is required" }, { status: 400 });

    // Silently succeed for non-superadmin emails (don't reveal whitelist)
    if (!SUPERADMIN_EMAILS.includes(email.toLowerCase().trim())) {
      return NextResponse.json({ message: "If that email exists, a reset link has been sent." });
    }

    const user = await prisma.adminUser.findUnique({ where: { email: email.toLowerCase().trim() } });
    if (!user) {
      return NextResponse.json({ message: "If that email exists, a reset link has been sent." });
    }

    const token = crypto.randomBytes(32).toString("hex");
    const expiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    await prisma.adminUser.update({
      where: { email: user.email },
      data: { resetToken: token, resetTokenExpiry: expiry },
    });

    const resetUrl = `${process.env.NEXTAUTH_URL}/admin/login/reset-password?token=${token}`;

    await resend.emails.send({
      from: "Insono Hearing Admin <noreply@webspecia.in>",
      to: user.email,
      subject: "Reset Your Insono Admin Password",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f8fafc;padding:32px;border-radius:12px;">
          <div style="background:#023784;padding:20px 24px;border-radius:8px;margin-bottom:24px;">
            <h1 style="color:#fff;margin:0;font-size:20px;font-weight:700;">Insono Hearing — Admin Portal</h1>
          </div>
          <h2 style="color:#0d2240;margin-top:0;">Reset Your Password</h2>
          <p style="color:#475569;">You requested a password reset for <strong>${user.email}</strong>.</p>
          <p style="color:#475569;">Click the button below to set a new password. This link expires in <strong>1 hour</strong>.</p>
          <a href="${resetUrl}"
             style="display:inline-block;margin:20px 0;padding:14px 28px;background:#023784;color:#fff;text-decoration:none;border-radius:8px;font-weight:700;font-size:15px;">
            Reset Password →
          </a>
          <p style="color:#94a3b8;font-size:12px;margin-top:24px;border-top:1px solid #e2e8f0;padding-top:16px;">
            If you didn't request this, you can safely ignore this email.<br/>
            This link will expire at ${expiry.toUTCString()}.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ message: "If that email exists, a reset link has been sent." });
  } catch (error) {
    console.error("Forgot password error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
