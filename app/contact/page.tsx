import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact ZeYuSen Fiber",
  description:
    "Contact ZeYuSen Fiber for carbon fiber and glass fiber product inquiries, samples, technical support, and custom composite material solutions.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactPageContent />;
}
