"use client";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('hero2.jpg')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

      {/* Background decorative elements (static) */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="section-padding max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance mb-6">
            <span className="bg-linear-to-r from-yellow-300 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              SkyShield
            </span>
            <br />
            <span className="text-slate-50">Smart Eyes in the Sky</span>
          </h1>
        </div>

        <p className="text-xl text-slate-300 text-balance mb-8 max-w-2xl mx-auto">
          AI-powered drone safety and threat detection for a safer society.
          Real-time surveillance, intelligent threat analysis, and automated
          emergency response.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="btn-primary bg-linear-to-r from-yellow-300 to-orange-400">
            Learn More
          </button>
          <button className="btn-secondary text-yellow-500">
            Request Demo
          </button>
        </div>
      </div>
    </section>
  );
}
