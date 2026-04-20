import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFY_EMAIL = "insonohearing@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { productSlug, productTitle, name, phone, email, address, city, state, pincode, comments } = body;

    if (!productSlug || !productTitle || !name || !phone || !address || !city || !state || !pincode) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const order = await prisma.order.create({
      data: {
        productSlug,
        productTitle,
        name,
        phone,
        email: email || null,
        address,
        city,
        state,
        pincode,
        comments: comments || null,
        paymentMethod: "COD",
        status: "pending",
      },
    });

    const orderDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    // Send notification — failure here must not block the order response
    resend.emails.send({

      from: "Insono Hearing Orders <noreply@webspecia.in>",
      to: NOTIFY_EMAIL,
      subject: `New Order: ${productTitle} — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; background: #f9fafb; padding: 24px; border-radius: 12px;">
          <div style="background: #023784; color: white; border-radius: 8px 8px 0 0; padding: 20px 24px;">
            <h1 style="margin: 0; font-size: 20px;">New Order Received</h1>
            <p style="margin: 4px 0 0; font-size: 13px; opacity: 0.85;">Order ID: ${order.id}</p>
          </div>

          <div style="background: white; border-radius: 0 0 8px 8px; padding: 24px; border: 1px solid #e5e7eb; border-top: none;">

            <!-- Product -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; background: #eff6ff; border-radius: 8px;">
              <tr>
                <td style="padding: 14px 16px;">
                  <p style="margin: 0; font-size: 11px; font-weight: bold; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Product</p>
                  <p style="margin: 4px 0 0; font-size: 16px; font-weight: 700; color: #023784;">${productTitle}</p>
                  <p style="margin: 4px 0 0; font-size: 12px; color: #3b82f6;">Payment: Cash on Delivery</p>
                </td>
              </tr>
            </table>

            <!-- Customer Details -->
            <h2 style="font-size: 14px; font-weight: 700; color: #374151; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 12px;">Customer Details</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; font-size: 13px; color: #6b7280; width: 140px;">Full Name</td>
                <td style="padding: 10px 0; font-size: 13px; font-weight: 600; color: #111827;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; font-size: 13px; color: #6b7280;">Phone</td>
                <td style="padding: 10px 0; font-size: 13px; font-weight: 600; color: #111827;">
                  <a href="tel:+91${phone}" style="color: #023784; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; font-size: 13px; color: #6b7280;">Email</td>
                <td style="padding: 10px 0; font-size: 13px; font-weight: 600; color: #111827;">${email || "—"}</td>
              </tr>
            </table>

            <!-- Delivery Address -->
            <h2 style="font-size: 14px; font-weight: 700; color: #374151; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 12px;">Delivery Address</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; font-size: 13px; color: #6b7280; width: 140px;">Street</td>
                <td style="padding: 10px 0; font-size: 13px; font-weight: 600; color: #111827;">${address}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; font-size: 13px; color: #6b7280;">City</td>
                <td style="padding: 10px 0; font-size: 13px; font-weight: 600; color: #111827;">${city}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; font-size: 13px; color: #6b7280;">State</td>
                <td style="padding: 10px 0; font-size: 13px; font-weight: 600; color: #111827;">${state}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; font-size: 13px; color: #6b7280;">Pincode</td>
                <td style="padding: 10px 0; font-size: 13px; font-weight: 600; color: #111827;">${pincode}</td>
              </tr>
            </table>

            ${comments ? `
            <!-- Comments -->
            <h2 style="font-size: 14px; font-weight: 700; color: #374151; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 8px;">Customer Comments</h2>
            <div style="background: #fef9c3; border-left: 3px solid #eab308; padding: 12px 16px; border-radius: 4px; font-size: 13px; color: #713f12; margin-bottom: 20px;">
              ${comments}
            </div>
            ` : ""}

            <!-- Footer -->
            <div style="background: #f3f4f6; border-radius: 6px; padding: 12px 16px; font-size: 12px; color: #6b7280;">
              <strong>Ordered on:</strong> ${orderDate} IST<br/>
              <strong>Order ID:</strong> ${order.id}
            </div>
          </div>
        </div>
      `,
    }).catch((emailErr) => {
      console.error("Order email notification failed:", emailErr);
    });

    return NextResponse.json({ success: true, orderId: order.id }, { status: 201 });
  } catch (error) {
    console.error("POST /api/order error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
