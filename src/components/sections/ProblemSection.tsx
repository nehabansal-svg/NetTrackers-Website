"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const painPoints = [
  { icon: "⚡", text: "The site takes more than 3 seconds to load" },
  { icon: "🔍", text: "Not ranking on page one for your main service" },
  { icon: "📉", text: "Getting traffic but no enquiries" },
  { icon: "⭐", text: "Google reviews are hurting your reputation" },
  { icon: "⚙️", text: "Software that does not fit how your team works" },
];

export default function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden"
      aria-labelledby="problem-heading"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Text content */}
          <div>
            <ScrollReveal delay={0.05}>
              <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-6">
                The Problem We Solve
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <h2 id="problem-heading" className="text-display-md font-black text-white mb-6 leading-tight">
                Most UK Businesses Have a Website.{" "}
                <span className="text-muted-light">Very Few Have One That Actually Works.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="text-muted-light text-lg leading-relaxed mb-10">
                A slow site loses visitors. A poorly built site disappears from Google.
                A site built without a strategy turns traffic into nothing.
              </p>
              <p className="text-white font-semibold text-lg">
                Three problems. One agency that fixes all three.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35} className="mt-10">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-4 transition-all duration-300 group"
              >
                Diagnose your website free
                <span className="w-8 h-8 rounded-full border border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-bg transition-all duration-300">
                  →
                </span>
              </a>
            </ScrollReveal>
          </div>

          {/* Right: Pain points list */}
          <div className="space-y-4">
            {painPoints.map((point, i) => (
              <ScrollReveal key={i} delay={0.15 + i * 0.1} direction="right">
                <motion.div
                  className="group flex items-start gap-4 p-5 rounded-2xl border border-border hover:border-accent/30 bg-surface hover:bg-surface-2 transition-all duration-300"
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* X icon */}
                  <div className="flex-shrink-0 w-9 h-9 rounded-full border border-red-500/30 bg-red-500/5 flex items-center justify-center mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 2L12 12M12 2L2 12" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium leading-snug">{point.text}</p>
                    <p className="text-muted text-sm mt-1">Sound familiar? We can fix this.</p>
                  </div>
                  {/* Arrow on hover */}
                  <div className="ml-auto flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M9 4L13 8L9 12" stroke="#E8A020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
