"use client";

import { FaWhatsapp } from "react-icons/fa"; // professional icon
import Link from "next/link";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/923169828410" // Replace with your number (country code + number)
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50 
        bg-green-500 hover:bg-green-600 
        text-white shadow-lg 
        rounded-full w-16 h-16 
        flex items-center justify-center 
        transition-all duration-300
        hover:scale-110
      "
    >
      <FaWhatsapp className="w-8 h-8" />
    </Link>
  );
}
