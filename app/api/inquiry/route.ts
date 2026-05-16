import { NextRequest, NextResponse } from "next/server";
import { primaryEmail } from "@/lib/contact";

// --- Simple in-memory rate limiter ---
const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5; // max 5 requests per IP per minute
const MAX_ENTRIES = 10000; // prevent unbounded growth
const ipRequests = new Map<string, { count: number; resetAt: number }>();

function cleanupExpiredEntries() {
  const now = Date.now();
  for (const [ip, entry] of ipRequests) {
    if (now > entry.resetAt) {
      ipRequests.delete(ip);
    }
  }
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipRequests.get(ip);

  if (!entry || now > entry.resetAt) {
    // Periodically clean up when map grows large
    if (ipRequests.size > MAX_ENTRIES) {
      cleanupExpiredEntries();
    }
    ipRequests.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > MAX_REQUESTS;
}

// --- HTML escape to prevent XSS in email templates ---
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, company, country, phone, division, product_interest, message, source_page } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // If Resend is configured, send notification email
    const resendKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.NOTIFY_EMAIL || primaryEmail;

    if (resendKey) {
      const safeName = escapeHtml(String(name));
      const safeEmail = escapeHtml(String(email));
      const safeCompany = escapeHtml(String(company || "N/A"));
      const safeCountry = escapeHtml(String(country || "N/A"));
      const safePhone = escapeHtml(String(phone || "N/A"));
      const safeDivision = escapeHtml(String(division || "General"));
      const safeProductInterest = escapeHtml(String(product_interest || "N/A"));
      const safeSourcePage = escapeHtml(String(source_page || "N/A"));
      const safeMessage = escapeHtml(String(message));

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: `ZeYuSen Fiber <${primaryEmail}>`,
          to: [notifyEmail],
          subject: `New Inquiry from ${safeName} - ${safeDivision}`,
          html: `
            <h2>New Inquiry Received</h2>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Company:</strong> ${safeCompany}</p>
            <p><strong>Country:</strong> ${safeCountry}</p>
            <p><strong>Phone:</strong> ${safePhone}</p>
            <p><strong>Division:</strong> ${safeDivision}</p>
            <p><strong>Product Interest:</strong> ${safeProductInterest}</p>
            <p><strong>Source Page:</strong> ${safeSourcePage}</p>
            <hr />
            <p><strong>Message:</strong></p>
            <p>${safeMessage}</p>
          `,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Inquiry submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
