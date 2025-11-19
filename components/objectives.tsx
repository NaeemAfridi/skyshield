"use client";

import { Card } from "@/components/ui/card";
import { AlertTriangle, Radio, Network, Zap, Radar } from "lucide-react";

const objectives = [
  {
    title: "Early Threat Detection",
    description:
      "Real-time identification and analysis of potential threats before they escalate.",
    icon: AlertTriangle,
  },
  {
    title: "Signal Intelligence",
    description:
      "Advanced RF activity detection and communication monitoring for safety.",
    icon: Radio,
  },
  {
    title: "Communication Network",
    description:
      "Integrated multi-channel communication layer for coordinated response.",
    icon: Network,
  },
  {
    title: "Emergency Response",
    description:
      "Automated alerting and response coordination for rapid intervention.",
    icon: Zap,
  },
  {
    title: "RF Activity Detection",
    description: "Comprehensive spectrum monitoring and anomaly detection.",
    icon: Radar,
  },
];

export default function Objectives() {
  return (
    <section
      className="section-padding relative bg-[#111] overflow-hidden"
      id="objectives"
    >
      {/* Static warm glow backgrounds */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-amber-400/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Core{" "}
            <span className="bg-linear-to-r from-amber-300 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              Objectives
            </span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Advanced capabilities for comprehensive aerial safety and threat
            management
          </p>
        </div>

        {/* Objectives grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {objectives.map((objective, index) => {
            const Icon = objective.icon;
            return (
              <Card
                key={index}
                className="
                  bg-white/10 backdrop-blur-md 
                  border border-white/10 hover:border-amber-400/40
                  p-6 h-full
                  rounded-2xl 
                  transition-transform duration-300
                  shadow-md shadow-black/20 hover:shadow-amber-500/10
                  hover:-translate-y-1
                "
              >
                <Icon className="w-10 h-10 text-amber-300 mb-4 drop-shadow-[0_0_6px_rgba(255,200,80,0.4)]" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {objective.title}
                </h3>
                <p className="text-slate-300 text-sm">
                  {objective.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
