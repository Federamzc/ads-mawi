"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center gradient-bg grid-pattern overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-400/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl animate-float delay-300" />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-accent-400/10 text-accent-400 border border-accent-400/20 mb-6">
              Trusted by 200+ Small Businesses
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight animate-fade-in-up">
            Grow Your Business{" "}
            <span className="bg-gradient-to-r from-accent-400 to-emerald-400 bg-clip-text text-transparent animate-gradient">
              With Confidence
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed animate-fade-in-up delay-200">
            We help small business owners cut through complexity, find clarity,
            and build sustainable growth strategies that actually work. No jargon,
            no fluff — just results.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <a
              href="#contact"
              className="btn-glow bg-accent-400 text-white px-8 py-4 rounded-xl text-base font-semibold text-center"
            >
              Book a Free Strategy Call
            </a>
            <a
              href="#services"
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-text-secondary border border-dark-500 hover:border-accent-400/50 hover:text-text-primary transition-all duration-300"
            >
              See How We Help
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center gap-8 animate-fade-in-up delay-500">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-400 to-emerald-400 border-2 border-dark-900 flex items-center justify-center text-[10px] font-bold text-white"
                  >
                    {["JM", "SK", "AR", "LP"][i]}
                  </div>
                ))}
              </div>
              <span className="text-sm text-text-secondary">
                <span className="text-text-primary font-semibold">4.9/5</span>{" "}
                from 150+ reviews
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent" />
    </section>
  );
}
