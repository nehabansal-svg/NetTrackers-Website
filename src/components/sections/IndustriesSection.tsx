"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const industries = [
  { emoji: "🏥", title: "Healthcare", desc: "Patient-focused web design and CRM" },
  { emoji: "⚖️", title: "Legal & Law Firms", desc: "Reputation and lead generation" },
  { emoji: "💰", title: "Finance & FinTech", desc: "Compliant, credible digital presence" },
  { emoji: "🛒", title: "E-Commerce", desc: "SEO and conversion growth" },
  { emoji: "🏗️", title: "Construction & Property", desc: "Local SEO and lead capture" },
  { emoji: "🎓", title: "Education", desc: "Portals, CRM and enrolment systems" },
  { emoji: "🍽️", title: "Hospitality & Tourism", desc: "ORM and review management" },
  { emoji: "🚀", title: "Startups & SMEs", desc: "End-to-end digital growth" },
];

export default function IndustriesSection() {
  return (
    <section
      className="relative py-24 md:py-36 bg-surface overflow-hidden"
      aria-labelledby="industries-heading"
    >
      <div className="separator" />

      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(232,160,32,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal delay={0.05}>
            <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-5">
              Industries We Serve
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h2 id="industries-heading" className="text-display-md font-black text-white">
              We Know <span className="text-gradient">Your Industry</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="text-muted-light text-lg mt-4 max-w-xl mx-auto">
              Deep sector knowledge means faster results and strategies built for your specific market.
            </p>
          </ScrollReveal>
        </div>

        {/* Industry grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((industry, i) => (
            <ScrollReveal key={industry.title} delay={i * 0.07} direction="up">
              <motion.div
                className="group relative p-6 rounded-2xl border border-border hover:border-accent/30 bg-bg transition-all duration-400 cursor-default text-center overflow-hidden"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.25 }}
              >
                {/* Background on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                <div className="relative">
                  {/* Emoji */}
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {industry.emoji}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-accent transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <p className="text-xs text-muted leading-snug">{industry.desc}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="separator mt-0" />
    </section>
  );
}
