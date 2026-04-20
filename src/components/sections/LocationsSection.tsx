"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const locations = [
  { city: "London", href: "/web-design-london", primary: true },
  { city: "Manchester", href: "/web-design-manchester" },
  { city: "Birmingham", href: "/web-design-birmingham" },
  { city: "Leeds", href: "/web-design-leeds" },
  { city: "Bristol", href: "/web-design-bristol" },
  { city: "Edinburgh", href: "/web-design-edinburgh" },
  { city: "Glasgow", href: "/web-design-glasgow" },
  { city: "Liverpool", href: "/web-design-liverpool" },
  { city: "Sheffield", href: "/web-design-sheffield" },
  { city: "Nottingham", href: "/web-design-nottingham" },
];

export default function LocationsSection() {
  return (
    <section
      className="relative py-24 md:py-36 bg-surface overflow-hidden"
      aria-labelledby="locations-heading"
    >
      <div className="separator" />

      {/* UK map outline (decorative) */}
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-80 h-80 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 200 300" fill="currentColor" className="text-accent">
          <path d="M100 10 C60 10, 30 30, 25 70 C20 100, 30 120, 40 140 C35 160, 25 180, 30 210 C35 240, 60 260, 90 270 C100 275, 110 275, 120 270 C150 260, 170 240, 170 210 C175 180, 165 160, 160 140 C170 120, 180 100, 175 70 C170 30, 140 10, 100 10Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <ScrollReveal delay={0.05}>
            <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-5">
              Nationwide Coverage
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h2 id="locations-heading" className="text-display-md font-black text-white">
              Serving UK Businesses From{" "}
              <span className="text-gradient">London to Glasgow</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="text-muted-light mt-4 max-w-lg mx-auto">
              Based in London. Working with ambitious businesses across the UK — all delivered remotely with the same quality and accountability.
            </p>
          </ScrollReveal>
        </div>

        {/* City grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {locations.map((location, i) => (
            <ScrollReveal key={location.city} delay={i * 0.05}>
              <Link href={location.href}>
                <motion.div
                  className={`group relative p-4 rounded-xl border text-center transition-all duration-300 ${
                    location.primary
                      ? "border-accent/40 bg-accent/5 hover:bg-accent/10"
                      : "border-border bg-bg hover:border-accent/30 hover:bg-surface"
                  }`}
                  whileHover={{ y: -3 }}
                >
                  {/* London indicator */}
                  {location.primary && (
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2">
                      <span className="bg-accent text-bg text-[9px] font-bold px-2 py-0.5 rounded-full">
                        HQ
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <div className={`w-1 h-1 rounded-full ${location.primary ? "bg-accent" : "bg-muted"} group-hover:bg-accent transition-colors`} />
                    <span className={`text-sm font-semibold ${location.primary ? "text-accent" : "text-muted-light"} group-hover:text-white transition-colors`}>
                      {location.city}
                    </span>
                  </div>
                  <p className="text-xs text-muted group-hover:text-muted-light transition-colors">
                    Web Design & SEO
                  </p>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3} className="text-center mt-8">
          <p className="text-muted text-sm">
            Don't see your city?{" "}
            <Link href="/contact" className="text-accent hover:underline">
              We work with businesses nationwide →
            </Link>
          </p>
        </ScrollReveal>
      </div>
      <div className="separator mt-0" />
    </section>
  );
}
