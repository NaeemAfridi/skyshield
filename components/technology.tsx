"use client";

import { Card } from "@/components/ui/card";
import { Brain, Monitor, Radio, Zap } from "lucide-react";
import { FaBrain } from "react-icons/fa";

const techCategories = [
  {
    id: "platform",
    label: "Drone Platform",
    icon: FaBrain,
    description:
      "Advanced autonomous UAV platform with AI-driven flight systems and real-time data processing.",
    features: [
      "Autonomous flight control",
      "Multi-sensor integration",
      "Extended flight time",
      "Weather resilience",
    ],
  },
  {
    id: "ai",
    label: "AI Detection",
    icon: Brain,
    description:
      "Machine learning engine for threat identification, pattern recognition, and predictive analysis.",
    features: [
      "Real-time threat analysis",
      "ML-powered detection",
      "Pattern recognition",
      "Behavioral analysis",
    ],
  },
  {
    id: "dashboard",
    label: "Ground Dashboard",
    icon: Monitor,
    description:
      "Comprehensive control center with live feeds, analytics, and command interface.",
    features: [
      "Live video streams",
      "Real-time analytics",
      "Command interface",
      "Data visualization",
    ],
  },
  {
    id: "communication",
    label: "Communication Layer",
    icon: Radio,
    description:
      "Secure, multi-channel communication network for coordinated response.",
    features: [
      "Encrypted comms",
      "Multi-channel support",
      "Emergency alerting",
      "Integration API",
    ],
  },
  {
    id: "modules",
    label: "Optional Modules",
    icon: Zap,
    description: "Extensible modules for specialized deployment scenarios.",
    features: [
      "Thermal imaging",
      "RF detection",
      "Signal jamming",
      "Custom integrations",
    ],
  },
];

export default function Technology() {
  return (
    <section
      className="section-padding relative bg-[#111] overflow-hidden"
      id="technology"
    >
      {/* Background glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-amber-400/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technology &{" "}
            <span className="bg-linear-to-r from-amber-300 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Cutting-edge systems powering aerial surveillance and threat
            detection
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-6 w-full">
          {techCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.id}
                className="bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl p-6 rounded-2xl transition-transform duration-300 hover:scale-105 hover:border-orange-500/40 hover:bg-white/10 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-amber-400" />
                  <h3 className="text-lg font-bold text-white">
                    {category.label}
                  </h3>
                </div>
                <p className="text-slate-300 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-slate-200"
                    >
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
