"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const results = [
  {
    client: "Stello AI",
    category: "SaaS",
    color: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/20",
    accentColor: "#3b82f6",
    stat1: { value: "270%", label: "Growth in active users in 60 days" },
    stat2: { value: "+19%", label: "Increase in organic search traffic" },
    service: "Full SEO Strategy",
    href: "/case-studies/stello-ai",
  },
  {
    client: "CalorieFriend",
    category: "Health & Wellness",
    color: "from-green-500/20 to-green-600/5",
    border: "border-green-500/20",
    accentColor: "#22c55e",
    stat1: { value: "+898%", label: "Increase in organic traffic in 12 months" },
    stat2: { value: "#1", label: "Category rankings achieved" },
    service: "Category-led SEO Rebuild",
    href: "/case-studies/caloriefriend",
  },
  {
    client: "Tempo Performance PT",
    category: "Gym / Personal Training",
    color: "from-orange-500/20 to-orange-600/5",
    border: "border-orange-500/20",
    accentColor: "#f97316",
    stat1: { value: "#3", label: "Google Business Profile rank in 90 days" },
    stat2: { value: "90", label: "Days to achieve local dominance" },
    service: "Local SEO Campaign",
    href: "/case-studies/tempo-performance-pt",
  },
  {
    client: "Hey Mary Jane",
    category: "E-Commerce",
    color: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/20",
    accentColor: "#a855f7",
    stat1: { value: "+269%", label: "Growth in organic traffic" },
    stat2: { value: "$1K/mo", label: "Revenue from £0 start" },
    service: "SEO-led Growth Strategy",
    href: "/case-studies/hey-mary-jane",
  },
];

export default function ResultsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-36 bg-surface overflow-hidden"
      aria-labelledby="results-heading"
    >
      <div className="separator" />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
      >
        <div className="absolute top-1/3 left-1/2 w-[700px] h-[400px] -translate-x-1/2 bg-accent/[0.025] blur-[150px] rounded-full" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <ScrollReveal delay={0.05}>
              <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-5">
                Proven Results
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <h2 id="results-heading" className="text-display-md font-black text-white leading-tight">
                Results We Have Delivered{" "}
                <span className="text-gradient">for UK Businesses</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.25}>
            <Link
              href="/case-studies"
              className="flex-shrink-0 inline-flex items-center gap-2 border border-white/15 text-white font-medium text-sm px-6 py-3 rounded-full hover:border-accent/50 hover:text-accent transition-all duration-300"
            >
              View all case studies
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>

        {/* Results cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {results.map((result, i) => (
            <ScrollReveal key={result.client} delay={i * 0.1} direction="up">
              <Link href={result.href} className="group block h-full">
                <motion.div
                  className={`relative h-full p-8 rounded-2xl border ${result.border} bg-gradient-to-br ${result.color} bg-bg hover:scale-[1.02] transition-all duration-500 overflow-hidden`}
                  whileHover={{ y: -4 }}
                >
                  {/* Client info */}
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-muted mb-2 block">
                        {result.category}
                      </span>
                      <h3 className="text-2xl font-black text-white">{result.client}</h3>
                    </div>
                    <span
                      className="text-xs font-semibold px-3 py-1.5 rounded-full border"
                      style={{
                        color: result.accentColor,
                        borderColor: `${result.accentColor}40`,
                        backgroundColor: `${result.accentColor}10`,
                      }}
                    >
                      {result.service}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <div className="text-3xl md:text-4xl font-black text-white mb-1">
                        {result.stat1.value}
                      </div>
                      <p className="text-muted-light text-xs leading-snug">{result.stat1.label}</p>
                    </div>
                    <div>
                      <div className="text-3xl md:text-4xl font-black text-white mb-1">
                        {result.stat2.value}
                      </div>
                      <p className="text-muted-light text-xs leading-snug">{result.stat2.label}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-300"
                    style={{ color: result.accentColor }}
                  >
                    Read case study
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Decorative blob */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-30 group-hover:opacity-50 transition-opacity"
                    style={{ background: result.accentColor }}
                  />
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <div className="separator mt-0" />
    </section>
  );
}
