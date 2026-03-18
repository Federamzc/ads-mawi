"use client";

import { useState, FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <ScrollReveal animation="animate-slide-in-left">
            <span className="text-accent-400 text-sm font-medium tracking-wider uppercase">
              Let&apos;s Talk
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
              Ready to{" "}
              <span className="bg-gradient-to-r from-accent-400 to-emerald-400 bg-clip-text text-transparent">
                Transform
              </span>{" "}
              Your Business?
            </h2>
            <p className="mt-6 text-text-secondary text-lg leading-relaxed">
              Book a free 30-minute strategy call. No sales pitch, no pressure —
              just an honest conversation about where you are and where you want
              to be.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "hello@mawi-consulting.com",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "(555) 123-4567",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Serving clients nationwide, remotely",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-400/10 text-accent-400 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-text-secondary">{item.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal animation="animate-slide-in-right">
            <div className="glass rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-400/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Message Sent!</h3>
                  <p className="text-text-secondary mt-2">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm text-text-secondary mb-1.5 block">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-dark-800 border border-dark-500 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-400 transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-text-secondary mb-1.5 block">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-dark-800 border border-dark-500 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-400 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-text-secondary mb-1.5 block">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full bg-dark-800 border border-dark-500 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-400 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-text-secondary mb-1.5 block">
                      Business Type
                    </label>
                    <select className="w-full bg-dark-800 border border-dark-500 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-400 transition-colors">
                      <option value="">Select your industry</option>
                      <option>E-Commerce / Retail</option>
                      <option>Professional Services</option>
                      <option>Technology / SaaS</option>
                      <option>Healthcare</option>
                      <option>Food & Hospitality</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-text-secondary mb-1.5 block">
                      How Can We Help?
                    </label>
                    <textarea
                      rows={4}
                      required
                      className="w-full bg-dark-800 border border-dark-500 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-400 transition-colors resize-none"
                      placeholder="Tell us about your business and what challenges you're facing..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-glow w-full bg-accent-400 text-white py-4 rounded-xl font-semibold text-base"
                  >
                    Send Message
                  </button>
                  <p className="text-xs text-text-muted text-center">
                    Free consultation. No commitment required.
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
