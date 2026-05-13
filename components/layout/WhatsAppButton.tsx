"use client";

import { MessageCircle } from "lucide-react";
import { whatsappPhone } from "@/lib/contact";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi, I'm interested in your fiber products. Could you provide more information?"
  );

  return (
    <a
      href={`https://wa.me/${whatsappPhone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg transition-colors animate-pulse-glow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
