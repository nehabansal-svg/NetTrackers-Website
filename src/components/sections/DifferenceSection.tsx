"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const differentiators = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinejoin="round" />
      </svg>
    ),
    title: "One Team. Everything Connected.",
    body: "Your SEO, your website, and your reputation all influence each other. We manage all three under one strategy — so every element works together, not against each other.",
    tag: "Strategic Advantage",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
    title: "We Optimise for AI Search Too.",
    body: "ChatGPT, Google AI Overviews, and Perplexity are now sending traffic. We build every campaign to be found in traditional search AND cited by AI — because that is where search is heading.",
    tag: "Future-Ready",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "No Contracts. Ever.",
    body: "Month-to-month from day one. You stay because the results justify it — not because a 12-month agreement forces you to. We earn your business every single month.",
    tag: "Zero Risk",
  },
];

export default function DifferenceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden"
      aria-labelledby="difference-heading"
    >
      {/* Parallax background element */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.04] blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/[0.03] blur-[100px] rounded-full" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <ScrollReveal delay={0.05}>
            <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-5">
              The NetTrackers Difference
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h2 id="difference-heading" className="text-display-md font-black text-white leading-tight">
              Why UK Businesses Choose Us Over{" "}
              <span className="text-gradient">Single-Service Agencies</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {differentiators.map((item, i) => (
            <ScrollReveal key={item.title} delay={0.1 + i * 0.15} direction="up">
              <motion.div
                className="group relative p-8 rounded-2xl border border-border bg-surface hover:border-accent/30 transition-all duration-500 h-full overflow-hidden"
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                {/* Tag */}
                <span className="inline-block text-xs font-semibold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full mb-6">
                  {item.tag}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                  {item.title}
                </h3>

                {/* Body */}
                <p className="text-muted-light text-sm leading-relaxed">
                  {item.body}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
