"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Objectives", href: "#objectives" },
    { label: "Solutions", href: "#use-cases" },
    { label: "Technology", href: "#technology" },
    { label: "Partners", href: "#partners" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50   transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2 z-50 relative">
            <Image
              src="/skyshield-logo.png"
              alt="SkyShield Logo"
              width={128}
              height={70}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 z-50 relative">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-xl font-medium text-slate-200 hover:text-white transition-colors rounded-md hover:bg-slate-800/40"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3 z-50 relative">
            <Button
              variant="outline"
              className="border-slate-600 text-slate-200 hover:bg-slate-800/40 hover:text-white"
            >
              Sign In
            </Button>
            <Link href="#contact">
              <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-200 hover:text-white transition-colors z-50 relative"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-slate-800 space-y-2 backdrop-blur-md bg-black/50">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-xl font-bold text-slate-200 hover:text-white hover:bg-slate-800/40 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <Button
                variant="outline"
                className="flex-1 border-slate-600 text-slate-200 hover:bg-slate-800/40 hover:text-white"
              >
                Sign In
              </Button>
              <Button className="flex-1 bg-yellow-600 hover:bg-orange-700 text-white">
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
