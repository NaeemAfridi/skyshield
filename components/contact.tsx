"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      className="section-padding bg-[#111] relative overflow-hidden"
      id="contact"
    >
      {/* Static warm gradient glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-amber-400/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Contact{" "}
            <span className="bg-linear-to-r from-amber-300 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Reach out to our team for partnerships, demos, or professional
            inquiries.
          </p>
        </div>

        {/* Contact Card */}
        <Card className="bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl rounded-2xl p-10 transition-all duration-300 hover:border-orange-500/30 hover:bg-white/10">
          <div className="space-y-10">
            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-orange-500/10 rounded-xl border border-orange-500/20 transition-all duration-300 hover:bg-orange-500/20">
                <FaWhatsapp className="text-amber-300 drop-shadow-[0_0_6px_rgba(255,200,80,0.4)] w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white">WhatsApp</h4>
                <p className="text-slate-400 mt-1">+92 3169828410</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-orange-500/10 rounded-xl border border-orange-500/20 transition-all duration-300 hover:bg-orange-500/20">
                <FaEnvelope className="text-amber-300 drop-shadow-[0_0_6px_rgba(255,200,80,0.4)] w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white">Email</h4>
                <p className="text-slate-400 mt-1">support@skyshield.ai</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-orange-500/10 rounded-xl border border-orange-500/20 transition-all duration-300 hover:bg-orange-500/20">
                <FaMapMarkerAlt className="text-amber-300 drop-shadow-[0_0_6px_rgba(255,200,80,0.4)] w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white">
                  Office Address
                </h4>
                <p className="text-slate-400 mt-1">
                  SkyShield HQ, Tech Valley, Islamabad, Pakistan
                </p>
              </div>
            </div>

            {/* Office Timing */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-orange-500/10 rounded-xl border border-orange-500/20 transition-all duration-300 hover:bg-orange-500/20">
                <FaClock className="text-amber-300 drop-shadow-[0_0_6px_rgba(255,200,80,0.4)] w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white">
                  Support Hours
                </h4>
                <p className="text-slate-400 mt-1">
                  Monday - Saturday, 9:00 AM - 7:00 PM (PKT)
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex justify-center">
              <Button className="w-1/2 text-white bg-yellow-600 hover:bg-yellow-700 font-semibold py-6 text-lg rounded-xl transition-all duration-300">
                Request Demo
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
