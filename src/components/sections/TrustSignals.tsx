"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "NetTrackers completely transformed our online presence. Within 90 days we were ranking on page one for our key services. The team genuinely care about results.",
    name: "James Mitchell",
    role: "Director, Tempo Performance PT",
    rating: 5,
  },
  {
    quote: "From £0 to consistent monthly revenue in under a year. The SEO strategy was methodical, transparent, and it worked. Couldn't recommend them more highly.",
    name: "Sarah Chen",
    role: "Founder, Hey Mary Jane",
    rating: 5,
  },
  {
    quote: "We tried three other agencies before NetTrackers. Nobody else understood how to combine SEO and web design into one coherent strategy like they do.",
    name: "David O'Brien",
    role: "CEO, Stello AI",
    rating: 5,
  },
];

export default function TrustSignals() {
  return (
    <section
      className="relative py-24 md:py-36 overflow-hidden"
      aria-labelledby="trust-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg via-surface/30 to-bg pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal delay={0.05}>
            <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-5">
              Client Reviews
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h2 id="trust-heading" className="text-display-md font-black text-white">
              Why UK Businesses{" "}
              <span className="text-gradient">Trust NetTrackers</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Rating badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {[
            { platform: "Google", rating: "4.9", reviews: "47 reviews" },
            { platform: "Clutch", rating: "5.0", reviews: "32 reviews" },
            { platform: "Trustpilot", rating: "4.8", reviews: "61 reviews" },
          ].map((badge) => (
            <ScrollReveal key={badge.platform} delay={0.1}>
              <div className="flex items-center gap-4 bg-surface border border-border rounded-2xl px-6 py-4">
                <div>
                  <p className="text-xs text-muted mb-1">{badge.platform}</p>
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#E8A020">
                        <path d="M7 1l1.6 4.8H14L9.8 8.9l1.6 4.8L7 11l-4.4 2.7 1.6-4.8L0 5.8h5.4L7 1z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white font-bold">{badge.rating} <span className="text-muted font-normal text-xs">{badge.reviews}</span></p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <ScrollReveal key={testimonial.name} delay={i * 0.12} direction="up">
              <motion.div
                className="group relative p-7 rounded-2xl border border-border bg-surface hover:border-accent/25 transition-all duration-400 h-full"
                whileHover={{ y: -4 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 14 14" fill="#E8A020">
                      <path d="M7 1l1.6 4.8H14L9.8 8.9l1.6 4.8L7 11l-4.4 2.7 1.6-4.8L0 5.8h5.4L7 1z" />
                    </svg>
                  ))}
                </div>

                {/* Quote mark */}
                <div className="text-5xl text-accent/20 font-serif leading-none mb-2 select-none">"</div>

                {/* Quote */}
                <p className="text-muted-light text-sm leading-relaxed mb-6">
                  {testimonial.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center text-accent font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-muted text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
