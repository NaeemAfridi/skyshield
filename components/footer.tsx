"use client";

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    { label: "About", href: "#" },
    { label: "Technology", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Privacy", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="bg-black relative overflow-hidden border-t border-orange-500/10 pt-20 pb-10">
      {/* Faint Glow Background */}
      <div className="absolute inset-0 bg-linear-to-t from-orange-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link href="#" className="flex items-center gap-2 z-50 relative">
              <Image
                src="/skyshield-logo.png"
                alt="SkyShield Logo"
                width={128}
                height={70}
                className="object-contain"
              />
            </Link>
            <p className="text-slate-400 text-sm mt-2">
              Smart Eyes in the Sky for a Safer Society
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-50 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-slate-50 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:info@skyshield.io"
                  className="hover:text-orange-500 transition-colors"
                >
                  info@skyshield.io
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-orange-500 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Global Operations Center</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-slate-50 mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-slate-950 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>&copy; 2025 SkyShield. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-orange-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
