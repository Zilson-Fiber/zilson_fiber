import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { primaryEmail } from "@/lib/contact";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Read how ZeYuSen Fiber handles inquiry information, contact details, and business communication data submitted through this website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="pt-36 pb-24">
      <div className="container-wide max-w-3xl">
        <p className="type-caption text-neutral-400">Legal</p>
        <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mt-3">
          Privacy Policy
        </h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-neutral-600">
          <p>
            ZeYuSen Fiber collects only the information needed to respond to product
            inquiries, quotation requests, technical questions, and business
            communication submitted through this website.
          </p>
          <h2 className="text-lg font-semibold text-neutral-900">Information We Collect</h2>
          <p>
            Inquiry forms may ask for your name, email address, company, country,
            phone number, product interests, and project requirements. We use this
            information to provide relevant material recommendations and follow-up
            support.
          </p>
          <h2 className="text-lg font-semibold text-neutral-900">How We Use Information</h2>
          <p>
            Submitted information is used for customer service, quotation handling,
            technical communication, and order-related follow-up. We do not sell
            personal information to third parties.
          </p>
          <h2 className="text-lg font-semibold text-neutral-900">Contact</h2>
          <p>
            For privacy questions or data requests, contact us at
            <a className="ml-1 text-carbon-accent hover:text-neutral-900" href={`mailto:${primaryEmail}`}>
              {primaryEmail}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}