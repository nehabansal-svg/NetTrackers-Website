"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";

const clients = [
  "Stello AI", "Tempo Performance PT", "Quiet West", "Counting Word",
  "Yellowtom", "CropGPT", "Hey Mary Jane", "Calorie Friend",
  "IMA", "KCOMM", "CISO Share", "Innvita Partners",
  "Enso Virtual", "Wood Vendors", "DoALot", "REI Print Mail",
  "Seed Designs", "Obbard", "Startium", "Engage Works",
  "Rail Filters", "Khimjee", "The Brand Chic", "YPV London",
  "Shape On The Net", "Prestissimo", "Pink By Ruchi", "New Leaf",
  "Source Grow", "GN Global", "LocopocoKids", "After Skool",
];

const duplicated = [...clients, ...clients];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const bgY = useTransform(smoothProgress, [0, 1], ["0%", "35%"]);
  const bgScale = useTransform(smoothProgress, [0, 1], [1.08, 1.0]);
  const contentY = useTransform(smoothProgress, [0, 1], ["0%", "55%"]);
  const opacity = useTransform(smoothProgress, [0, 0.65, 1], [1, 0.8, 0]);
  const eyebrowY = useTransform(smoothProgress, [0, 0.5], ["0%", "-30%"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
      aria-label="Hero section"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 hero-gradient grid-pattern"
        style={{ y: bgY, scale: bgScale }}
      >
        {/* Ambient glow blobs */}
        <div className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] rounded-full bg-accent/[0.06] blur-[120px] float-animation" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[100px] float-animation" style={{ animationDelay: "3s" }} />
        <div className="absolute top-[40%] left-[55%] w-[300px] h-[300px] rounded-full bg-accent/[0.03] blur-[80px] float-animation" style={{ animationDelay: "1.5s" }} />

        {/* Decorative geometric lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <circle cx="720" cy="450" r="320" fill="none" stroke="#E8A020" strokeWidth="0.5" />
          <circle cx="720" cy="450" r="480" fill="none" stroke="#E8A020" strokeWidth="0.5" />
          <circle cx="720" cy="450" r="640" fill="none" stroke="#E8A020" strokeWidth="0.5" />
          <line x1="0" y1="450" x2="1440" y2="450" stroke="#E8A020" strokeWidth="0.5" />
          <line x1="720" y1="0" x2="720" y2="900" stroke="#E8A020" strokeWidth="0.5" />
        </svg>
      </motion.div>

      {/* Gradient overlay bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg to-transparent z-10 pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col justify-center min-h-screen pt-24 pb-16"
        style={{ y: contentY, opacity }}
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          {/* Eyebrow */}
          <motion.div
            style={{ y: eyebrowY }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 text-accent text-sm font-medium px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              Full-Service Digital Agency — London, UK
            </span>
          </motion.div>

          {/* H1 */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              className="text-display-xl font-black text-white leading-[0.95] tracking-tight max-w-5xl"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              The UK Digital Agency{" "}
              <span className="text-gradient">That Turns</span>{" "}
              Your Website Into a{" "}
              <span className="relative inline-block">
                Lead Machine.
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                />
              </span>
            </motion.h1>
          </div>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-muted-light max-w-2xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            Web design, SEO, reputation management, and bespoke software — all under one roof.
            One strategy. One team. One agency accountable for everything.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-4 mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-accent text-bg font-semibold text-base px-7 py-4 rounded-full hover:bg-accent-light transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_40px_rgba(232,160,32,0.4)]"
            >
              Get a Free Strategy Call
              <motion.span
                className="w-5 h-5 bg-bg/20 rounded-full flex items-center justify-center"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 border border-white/15 text-white font-medium text-base px-7 py-4 rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300"
            >
              See Our Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>

          {/* Trust line */}
          <motion.div
            className="flex flex-wrap items-center gap-3 text-sm text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#E8A020">
                  <path d="M7 1l1.6 4.8H14L9.8 8.9l1.6 4.8L7 11l-4.4 2.7 1.6-4.8L0 5.8h5.4L7 1z" />
                </svg>
              ))}
            </div>
            <span className="text-muted-light">Trusted by 150+ UK businesses</span>
            <span className="text-border">·</span>
            <span>London · Manchester · Birmingham · Leeds · Bristol and beyond</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Client logo marquee */}
      <motion.div
        className="relative z-20 pb-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <div className="separator mb-6" />
        <p className="text-center text-xs text-muted uppercase tracking-widest mb-6">
          Trusted by leading UK & US businesses
        </p>
        <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="flex gap-10 animate-marquee whitespace-nowrap">
            {duplicated.map((client, i) => (
              <span
                key={i}
                className="text-sm font-medium text-muted-light/60 hover:text-muted-light transition-colors flex-shrink-0"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        style={{ opacity }}
      >
        <span className="text-xs text-muted tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted to-transparent relative overflow-hidden">
          <motion.div
            className="absolute top-0 w-full h-4 bg-accent"
            animate={{ y: ["-100%", "400%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
