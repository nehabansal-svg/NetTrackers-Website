"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  {
    number: "01",
    title: "Web Design & Development",
    description: "Websites built to convert — fast, mobile-first, and optimised for Google from the first line of code.",
    features: ["Conversion-focused design", "Core Web Vitals optimised", "Mobile-first responsive", "Built for SEO from day one"],
    href: "/web-design-and-development",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="24" height="18" rx="2" />
        <path d="M2 9h24M9 4v5M19 4v5" />
        <path d="M7 14l4 4-4 4M15 22h6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "SEO Services",
    description: "Organic rankings that compound every month. Technical SEO, content strategy, and link building done properly.",
    features: ["Technical SEO audit & fix", "Content strategy", "Link building", "AI Search (GEO) optimisation"],
    href: "/seo-services",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="8" />
        <path d="M18 18l6 6" strokeLinecap="round" />
        <path d="M12 8v8M8 12h8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Online Reputation Management",
    description: "What people find when they Google you determines whether they contact you. We make sure it works in your favour.",
    features: ["Google review strategy", "Negative result suppression", "Brand monitoring", "Review generation"],
    href: "/orm-services",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 3l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "CRM & ERP Software",
    description: "Custom-built systems that fit how your team actually works — not how someone else's does.",
    features: ["Bespoke CRM systems", "ERP development", "API integrations", "Ongoing support"],
    href: "/software-development",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="9" height="9" rx="1" />
        <rect x="16" y="3" width="9" height="9" rx="1" />
        <rect x="3" y="16" width="9" height="9" rx="1" />
        <rect x="16" y="16" width="9" height="9" rx="1" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-36 bg-surface"
      id="services"
      aria-labelledby="services-heading"
    >
      {/* Accent line top */}
      <div className="separator" />

      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <ScrollReveal delay={0.05}>
            <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-5">
              Our Services
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h2 id="services-heading" className="text-display-md font-black text-white mb-4">
              Four Services. One Strategy.{" "}
              <span className="text-gradient">Every Lead Source Covered.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="text-muted-light text-lg max-w-xl mx-auto">
              One team managing everything means no gaps, no blame-shifting, no wasted effort.
            </p>
          </ScrollReveal>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.href} delay={i * 0.12} direction="up">
              <Link href={service.href} className="group block h-full">
                <motion.div
                  className="relative h-full p-8 rounded-2xl border border-border bg-bg hover:border-accent/40 transition-all duration-500 overflow-hidden"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                  {/* Number */}
                  <div className="flex items-start justify-between mb-8">
                    <span className="text-5xl font-black text-white/5 leading-none select-none">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-bg transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-light leading-relaxed mb-6 text-sm">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-light">
                        <span className="w-1 h-1 bg-accent rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    Learn more
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-500 rounded-full" />
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
