"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-40 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-surface to-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(232,160,32,0.12)_0%,transparent_70%)]" />

        {/* Animated orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/8 rounded-full blur-[80px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative max-w-5xl mx-auto px-6 text-center"
        style={{ opacity }}
      >
        <ScrollReveal delay={0.05}>
          <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-8">
            Ready to Grow?
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <h2 id="cta-heading" className="text-display-xl font-black text-white mb-6 leading-[0.95]">
            Ready to Turn Your Website Into Your{" "}
            <span className="text-gradient">Best Salesperson?</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <p className="text-muted-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4">
            Your competitors are investing in better websites, better SEO, and better software right now.
            Every month without a proper digital strategy is traffic going elsewhere.
          </p>
          <p className="text-white font-semibold text-lg mb-12">
            One call. No obligation. Just straight answers about what it would take to grow your business online.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.35} className="flex flex-wrap justify-center gap-4 mb-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-accent text-bg font-bold text-lg px-10 py-5 rounded-full hover:bg-accent-light transition-all duration-300 hover:shadow-[0_0_60px_rgba(232,160,32,0.5)]"
            >
              Book Your Free Strategy Call
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </ScrollReveal>

        {/* Contact info */}
        <ScrollReveal delay={0.45}>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted">
            <a
              href="mailto:hello@nettrackers.co.uk"
              className="flex items-center gap-2 hover:text-white transition-colors group"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="1" y="3" width="14" height="10" rx="1.5" />
                <path d="M1 5l7 5 7-5" strokeLinecap="round" />
              </svg>
              <span className="group-hover:text-accent transition-colors">hello@nettrackers.co.uk</span>
            </a>
            <span className="text-border hidden sm:block">·</span>
            <a
              href="tel:+44000000000"
              className="flex items-center gap-2 hover:text-white transition-colors group"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M1 3a1 1 0 011-1h3.28a.5.5 0 01.474.342l1 3a.5.5 0 01-.25.605L4.785 6.86a7.021 7.021 0 003.356 3.356l.912-.718a.5.5 0 01.605-.25l3 1a.5.5 0 01.342.474V14a1 1 0 01-1 1C6.716 15 1 9.284 1 3z" />
              </svg>
              <span className="group-hover:text-accent transition-colors">Call us now</span>
            </a>
            <span className="text-border hidden sm:block">·</span>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M8 1C5.24 1 3 3.24 3 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" />
                <circle cx="8" cy="6" r="1.5" />
              </svg>
              <span>26 Bunning Way, London N7 9UN</span>
            </div>
          </div>
        </ScrollReveal>
      </motion.div>
    </section>
  );
}
