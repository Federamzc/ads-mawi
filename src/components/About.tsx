"use client";

import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-24 relative gradient-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal animation="animate-slide-in-left">
            <span className="text-accent-400 text-sm font-medium tracking-wider uppercase">
              Why MAWI
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
              Your Growth Partner,{" "}
              <span className="text-accent-400">Not Just a Consultant</span>
            </h2>
            <p className="mt-6 text-text-secondary text-lg leading-relaxed">
              We&apos;ve been in your shoes. MAWI was founded by entrepreneurs who
              built and scaled businesses from the ground up. We know the
              challenges of wearing every hat, making tough calls with limited
              resources, and betting on yourself.
            </p>
            <p className="mt-4 text-text-secondary text-lg leading-relaxed">
              That&apos;s why we don&apos;t just hand you a report and walk away. We
              roll up our sleeves, integrate with your team, and stay until the
              results speak for themselves.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { value: "200+", label: "Businesses Served" },
                { value: "95%", label: "Client Retention" },
                { value: "3.2x", label: "Avg Revenue Growth" },
                { value: "8+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label} className="group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-accent-400 to-emerald-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-muted mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal animation="animate-slide-in-right">
            <div className="relative">
              <div className="glass rounded-2xl p-8 space-y-6">
                <h3 className="text-xl font-semibold">Our Approach</h3>
                {[
                  {
                    step: "01",
                    title: "Discover",
                    desc: "We listen deeply to understand your business, goals, and challenges.",
                  },
                  {
                    step: "02",
                    title: "Strategize",
                    desc: "We craft a tailored roadmap with clear milestones and KPIs.",
                  },
                  {
                    step: "03",
                    title: "Execute",
                    desc: "We work alongside you to implement changes and track progress.",
                  },
                  {
                    step: "04",
                    title: "Scale",
                    desc: "We ensure sustainable growth with systems that run without us.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex gap-4 group cursor-default"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-400/10 text-accent-400 flex items-center justify-center text-sm font-bold group-hover:bg-accent-400 group-hover:text-white transition-all duration-300">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold group-hover:text-accent-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-text-secondary mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Decorative glow */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent-400/5 rounded-full blur-3xl" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
