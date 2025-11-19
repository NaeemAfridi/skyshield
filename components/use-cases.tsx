"use client";

import { Card } from "@/components/ui/card";
import { Users, AlertCircle, Building2, Flame, Droplets } from "lucide-react";

const useCases = [
  {
    title: "Event & Crowd Security",
    description:
      "Real-time monitoring and threat detection for large gatherings and public events.",
    icon: Users,
  },
  {
    title: "Roadside Safety Patrol",
    description:
      "Continuous surveillance for highway safety and incident response.",
    icon: AlertCircle,
  },
  {
    title: "School & Public Areas",
    description:
      "Dedicated monitoring for educational institutions and public spaces.",
    icon: Building2,
  },
  {
    title: "Post-Blast Mapping",
    description:
      "Rapid damage assessment and scene analysis following incidents.",
    icon: Flame,
  },
  {
    title: "Disaster Management",
    description:
      "Emergency response coordination and situation assessment during natural disasters.",
    icon: Droplets,
  },
];

export default function UseCases() {
  return (
    <section
      className="section-padding relative bg-[#111] overflow-hidden"
      id="use-cases"
    >
      {/* Static warm glow backgrounds */}
      <div className="absolute top-10 left-20 w-80 h-80 bg-amber-400/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Use Cases &{" "}
            <span className="bg-linear-to-r from-amber-300 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              Applications
            </span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            SkyShield adapts to diverse safety scenarios across multiple sectors
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card
                key={index}
                className="
                  bg-white/10 backdrop-blur-md
                  border border-white/10 hover:border-amber-400/40
                  p-6 h-full rounded-2xl
                  transition-transform duration-300
                  shadow-md shadow-black/20 hover:shadow-amber-400/10
                  hover:-translate-y-1
                "
              >
                <div
                  className="
                    w-14 h-14 rounded-xl flex items-center justify-center
                    bg-linear-to-br from-amber-300/15 via-orange-400/20 to-yellow-500/15
                    border border-white/10 mb-4 backdrop-blur-sm
                  "
                >
                  <Icon className="w-7 h-7 text-amber-300 drop-shadow-[0_0_6px_rgba(255,200,80,0.4)]" />
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {useCase.title}
                </h3>
                <p className="text-slate-300 text-sm">{useCase.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
