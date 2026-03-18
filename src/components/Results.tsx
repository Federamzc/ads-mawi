"use client";

import ScrollReveal from "./ScrollReveal";

const caseStudies = [
  {
    industry: "E-Commerce",
    title: "Scaled revenue from $400K to $1.8M in 14 months",
    metrics: [
      { label: "Revenue Growth", value: "350%" },
      { label: "Customer Acquisition Cost", value: "-42%" },
      { label: "Team Size", value: "4 → 18" },
    ],
    description:
      "Redesigned their go-to-market strategy, optimized ad spend, and built a repeatable sales engine.",
  },
  {
    industry: "Professional Services",
    title: "Doubled profit margins while reducing work hours by 30%",
    metrics: [
      { label: "Profit Margin", value: "+94%" },
      { label: "Hours Worked", value: "-30%" },
      { label: "Client NPS", value: "72 → 91" },
    ],
    description:
      "Restructured service offerings, implemented automation, and created a premium pricing model.",
  },
  {
    industry: "Local Retail",
    title: "Turned around a declining business into a regional leader",
    metrics: [
      { label: "Foot Traffic", value: "+180%" },
      { label: "Online Sales", value: "0 → $50K/mo" },
      { label: "Locations", value: "1 → 3" },
    ],
    description:
      "Launched an omnichannel strategy, revamped branding, and expanded to two additional locations.",
  },
];

export default function Results() {
  return (
    <section id="results" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">
            Proven Results
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            Real Impact, <span className="text-emerald-400">Real Numbers</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto text-lg">
            We measure our success by yours. Here are just a few of the
            transformations we&apos;ve helped create.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <ScrollReveal
              key={study.industry}
              delay={`delay-${(index + 1) * 100}` as string}
            >
              <div className="glass rounded-2xl p-8 hover:border-emerald-400/30 transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                <span className="text-xs font-medium tracking-wider uppercase text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full w-fit">
                  {study.industry}
                </span>
                <h3 className="text-lg font-semibold mt-4 leading-snug">
                  {study.title}
                </h3>
                <p className="text-sm text-text-secondary mt-3 flex-grow">
                  {study.description}
                </p>
                <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-dark-600">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-lg font-bold text-emerald-400">
                        {metric.value}
                      </div>
                      <div className="text-[11px] text-text-muted mt-0.5 leading-tight">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
