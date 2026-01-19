"use client";

import { Icon } from "@iconify/react";

const FloatingWhatsAppButton: React.FC = () => {
  const phone = "573132814628";
  const href = `https://wa.me/${phone}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir chat de WhatsApp"
      className="fixed bottom-6 right-6 z-[60]"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-105">
        <Icon icon="ic:baseline-whatsapp" width={34} height={34} />
      </span>
    </a>
  );
};

export default FloatingWhatsAppButton;
