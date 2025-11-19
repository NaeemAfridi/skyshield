"use client";

import { Card } from "@/components/ui/card";
import { Target, Radar, Shield, Brain } from "lucide-react";

const missions = [
  {
    title: "Project SafeSky",
    description:
      "Comprehensive aerial surveillance system for urban safety and threat prevention.",
    icon: Radar,
  },
  {
    title: "LifeGuard UAV",
    description:
      "Emergency response drones for rapid deployment and life-saving interventions.",
    icon: Target,
  },
  {
    title: "Guardian Wing",
    description:
      "Perimeter protection and critical infrastructure monitoring solutions.",
    icon: Shield,
  },
  {
    title: "DefenSight",
    description:
      "Advanced threat detection and intelligence analysis platform.",
    icon: Brain,
  },
];

export default function About() {
  return (
    <section
      className="section-padding bg-[#111] relative overflow-hidden"
      id="about"
    >
      {/* Static warm glass glow background */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-yellow-400/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-50 mb-4">
            Our{" "}
            <span className="bg-linear-to-r from-yellow-300 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              Mission
            </span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Leading the future of aerial safety through cutting-edge AI and
            drone technology
          </p>
        </div>

        {/* Mission cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {missions.map((mission, index) => {
            const Icon = mission.icon;
            return (
              <Card
                key={index}
                className="
                  h-full p-6 transition-transform duration-300 
                  bg-white/10 backdrop-blur-md 
                  border border-white/10 hover:border-yellow-400/40
                  shadow-lg shadow-black/10 hover:shadow-yellow-500/10
                  rounded-2xl
                  hover:-translate-y-1
                "
              >
                <Icon className="w-12 h-12 mb-4 text-yellow-300 drop-shadow-[0_0_8px_rgba(255,200,50,0.4)]" />
                <h3 className="text-xl font-semibold text-slate-50 mb-2">
                  {mission.title}
                </h3>
                <p className="text-slate-300 text-sm">{mission.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
