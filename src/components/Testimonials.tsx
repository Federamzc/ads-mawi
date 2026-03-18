"use client";

import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "MAWI didn't just give us advice — they gave us a complete transformation. Our revenue tripled and I finally feel like a CEO, not just a firefighter.",
    name: "Jessica Martinez",
    role: "Founder, Bloom Botanicals",
    initials: "JM",
  },
  {
    quote:
      "I was skeptical about consultants. MAWI proved me wrong in the first month. They understood our challenges instantly and delivered a plan that actually worked.",
    name: "Samuel Kim",
    role: "Owner, NexTech Solutions",
    initials: "SK",
  },
  {
    quote:
      "Working with MAWI was the best investment I've made in my business. Their operational insights saved us over $200K in the first year alone.",
    name: "Amara Reed",
    role: "CEO, Coastline Properties",
    initials: "AR",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative gradient-bg">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <span className="text-accent-400 text-sm font-medium tracking-wider uppercase">
            Client Stories
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            Trusted by Business Owners{" "}
            <span className="text-accent-400">Like You</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <ScrollReveal
              key={t.name}
              delay={`delay-${(index + 1) * 100}` as string}
            >
              <div className="glass rounded-2xl p-8 hover:border-accent-400/30 transition-all duration-500 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-secondary leading-relaxed flex-grow italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-dark-600">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-400 to-emerald-400 flex items-center justify-center text-xs font-bold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-text-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
