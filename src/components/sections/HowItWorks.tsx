"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Free Strategy Call",
    body: "Tell us about your business and what is not working. No pitch, no hard sell — just an honest conversation about where you are and where you want to be.",
    duration: "~30 mins",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2 17.978 17.978 0 01-15.6-15.6 2 2 0 012-2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "We Research Your Market",
    body: "We analyse your site, your competitors, and your opportunity. You get a clear picture of what is possible — not a sales pitch, a real audit.",
    duration: "1–2 business days",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <path d="M11 7v4l3 3" strokeLinecap="round" />
        <path d="M3 11h2M17 11h2M11 3v2M11 17v2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Plain-English Proposal",
    body: "What we will do, what it costs, what you can expect. Fixed price, no jargon, no hidden extras. You know exactly what you are paying for before we start.",
    duration: "Within 48 hours",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Work Starts This Week",
    body: "Most projects have real work underway within 7 days. One named account manager who answers your calls. No outsourcing, no surprises.",
    duration: "Within 7 days",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineProgress = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden"
      aria-labelledby="how-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <ScrollReveal delay={0.05}>
            <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-5">
              How It Works
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h2 id="how-heading" className="text-display-md font-black text-white">
              Getting Started Takes{" "}
              <span className="text-gradient">Less Than 15 Minutes</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-border z-0">
            <motion.div
              className="h-full bg-accent origin-left"
              style={{ scaleX: lineProgress, transformOrigin: "left" }}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.15} direction="up">
                <div className="group text-center">
                  {/* Step number + icon circle */}
                  <div className="relative inline-flex mb-6">
                    <motion.div
                      className="w-20 h-20 rounded-full border-2 border-border group-hover:border-accent bg-surface flex items-center justify-center text-accent transition-all duration-400"
                      whileHover={{ scale: 1.1 }}
                    >
                      {step.icon}
                    </motion.div>
                    {/* Number badge */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-accent rounded-full flex items-center justify-center text-bg text-xs font-black">
                      {i + 1}
                    </div>
                  </div>

                  {/* Duration badge */}
                  <div className="inline-block text-xs font-medium text-muted border border-border px-3 py-1 rounded-full mb-4">
                    {step.duration}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-muted-light text-sm leading-relaxed">{step.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.4} className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-accent text-bg font-bold text-base px-8 py-4 rounded-full hover:bg-accent-light transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(232,160,32,0.35)]"
          >
            Book Your Free Strategy Call
            <span>→</span>
          </Link>
          <p className="text-muted text-sm mt-4">No obligation · No contract · Real answers</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
