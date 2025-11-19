"use client";

import { useState } from "react";
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
  const [activeTab, setActiveTab] = useState("platform");

  return (
    <section
      className="section-padding relative bg-[#111] overflow-hidden"
      id="technology"
    >
      {/* Static gradient glow backgrounds */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-amber-400/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        {/* Section heading */}
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

        {/* Tabs */}
        <div className="w-full">
          <div className="grid w-full grid-cols-2 md:grid-cols-5 backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl shadow-xl h-14">
            {techCategories.map((category) => {
              const Icon = category.icon;
              const isActive = activeTab === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center gap-2 justify-center py-3 px-4 rounded-xl transition-all duration-300
                    ${
                      isActive
                        ? "bg-yellow-600/80 text-black shadow-lg backdrop-blur-xl"
                        : "text-slate-300 hover:bg-white/10"
                    }`}
                >
                  <Icon className="w-4 h-4 hidden sm:inline" />
                  <span className="hidden sm:inline text-xs sm:text-sm">
                    {category.label}
                  </span>
                  <span className="sm:hidden text-xs">
                    {category.label.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tab content */}
          <div className="mt-8 w-full">
            {techCategories.map(
              (category) =>
                activeTab === category.id && (
                  <Card
                    key={category.id}
                    className="bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl p-8 rounded-2xl transition-all duration-300 hover:border-orange-500/30 hover:bg-white/10"
                  >
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {category.label}
                    </h3>
                    <p className="text-slate-300 mb-6">
                      {category.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {category.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2" />
                          <span className="text-slate-200">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
