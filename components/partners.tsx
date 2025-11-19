"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const partnerCategories = [
  {
    category: "Law Enforcement",
    partners: [
      "Police Department",
      "Federal Agency",
      "Border Patrol",
      "SWAT Units",
    ],
  },
  {
    category: "Infrastructure",
    partners: [
      "Safe City Initiative",
      "Urban Planning",
      "Smart Grids",
      "Transportation",
    ],
  },
  {
    category: "Education",
    partners: [
      "Universities",
      "Research Institutions",
      "Defense Academy",
      "Training Centers",
    ],
  },
  {
    category: "Healthcare",
    partners: [
      "Hospitals",
      "Medical Centers",
      "Emergency Services",
      "Ambulance Services",
    ],
  },
];

export default function Partners() {
  return (
    <section
      className="section-padding bg-[#111] relative overflow-hidden"
      id="partners"
    >
      {/* Static warm gradient glow backgrounds */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-amber-400/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Partners &{" "}
            <span className="bg-linear-to-r from-amber-300 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              Customers
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Trusted by leading organizations across multiple sectors
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {partnerCategories.map((category, idx) => (
            <div key={idx}>
              {/* Glassmorphism Card */}
              <Card className="bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl rounded-2xl p-6 transition-all duration-300 hover:border-orange-500/30 hover:bg-white/10">
                <h3 className="text-xl font-semibold text-yellow-600 mb-4">
                  {category.category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.partners.map((partner, pidx) => (
                    <Badge
                      key={pidx}
                      variant="outline"
                      className="border-white/20 text-slate-200 bg-white/5 backdrop-blur-md rounded-lg px-3 py-1 transition-all duration-300 hover:bg-yellow-500/20 hover:border-yellow-500/40 hover:text-orange-100 hover:shadow-lg"
                    >
                      {partner}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
