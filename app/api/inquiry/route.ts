import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, country, phone, division, product_interest, message, source_page } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // If Supabase is configured, store the lead
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseUrl && supabaseKey) {
      await fetch(`${supabaseUrl}/rest/v1/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
        },
        body: JSON.stringify({
          name,
          email,
          company,
          country,
          phone,
          division: division || "general",
          product_interest,
          message,
          source_page,
          status: "new",
        }),
      });
    }

    // If Resend is configured, send notification email
    const resendKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.NOTIFY_EMAIL || "info@zilsonfiber.com";

    if (resendKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: "Zilson Fiber <noreply@zilsonfiber.com>",
          to: [notifyEmail],
          subject: `New Inquiry from ${name} - ${division || "General"}`,
          html: `
            <h2>New Inquiry Received</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || "N/A"}</p>
            <p><strong>Country:</strong> ${country || "N/A"}</p>
            <p><strong>Phone:</strong> ${phone || "N/A"}</p>
            <p><strong>Division:</strong> ${division || "General"}</p>
            <p><strong>Product Interest:</strong> ${product_interest || "N/A"}</p>
            <p><strong>Source Page:</strong> ${source_page || "N/A"}</p>
            <hr />
            <p><strong>Message:</strong></p>
            <p>${message}</p>
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
