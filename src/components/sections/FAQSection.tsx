"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const faqs = [
  {
    q: "What does a full-service digital agency do?",
    a: "A full-service digital agency handles web design, SEO, reputation management, and software development under one roof. Rather than hiring four separate specialists, you get one team with one strategy — all focused on the same commercial goal.",
  },
  {
    q: "How much does web design cost in the UK?",
    a: "A professional business website from NetTrackers starts from £3,000. E-commerce builds typically range from £8,000 to £25,000, depending on scope. Every project is fixed-price before we start — no surprises.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "Most clients see initial ranking movement within 3 months. Meaningful lead growth typically comes between months 4 and 8. We will tell you honestly what to expect for your specific market — not what you want to hear.",
  },
  {
    q: "What is online reputation management?",
    a: "ORM is the practice of managing what people find when they search your business name online. This includes Google reviews, Trustpilot, press coverage and suppressing damaging results. It directly affects whether searchers contact you or your competitor.",
  },
  {
    q: "Do you tie clients into long-term contracts?",
    a: "No. We operate month-to-month with no minimum contract. You stay because the results are working — not because you are contractually obligated to.",
  },
  {
    q: "Can you do web design and SEO together?",
    a: "Yes — and it works significantly better when both are done by the same team. SEO built into a website from day one outperforms SEO bolted onto a site that was built without it. Our web and SEO teams work as one.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Yes. We work with startups, growing SMEs, and established companies. What matters is that you are serious about growth — not how big you already are.",
  },
  {
    q: "Can you guarantee page one Google rankings?",
    a: "No agency can guarantee specific rankings — Google's algorithm is not controllable. What we can guarantee is the quality of our work, transparent reporting, and a strategy built around your commercial goals. We will always tell you honestly what is realistic for your market.",
  },
  {
    q: "How long does a website take to build?",
    a: "Most standard business websites take 6 to 10 weeks from design sign-off. E-commerce and complex builds take 10 to 16 weeks. We give you a confirmed timeline before starting, and we keep to it.",
  },
  {
    q: "Where are you based, and do you work nationally?",
    a: "We are based in London at 26 Bunning Way, London N7 9UN. We work with businesses across the UK — London, Manchester, Birmingham, Leeds, Bristol, Edinburgh, and beyond. Most work is delivered remotely; in-person meetings are available for larger projects.",
  },
  {
    q: "What is AI SEO, and do I need it?",
    a: "AI SEO — also called GEO (Generative Engine Optimisation) — is optimising your content to appear in Google AI Overviews, ChatGPT and Perplexity answers. These tools are already influencing buying decisions. We include GEO optimisation in every SEO campaign.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollReveal delay={index * 0.04}>
      <div
        className={`border-b border-border last:border-b-0 transition-colors duration-300 ${open ? "border-accent/20" : ""}`}
      >
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-start justify-between gap-4 py-6 text-left group"
          aria-expanded={open}
        >
          <span className={`text-base font-semibold leading-snug transition-colors duration-300 ${open ? "text-accent" : "text-white group-hover:text-accent"}`}>
            {faq.q}
          </span>
          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 mt-0.5 ${
              open ? "border-accent bg-accent text-bg" : "border-border group-hover:border-accent text-muted-light"
            }`}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="overflow-hidden"
            >
              <div className="pb-6 pr-10">
                <p className="text-muted-light leading-relaxed">{faq.a}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}

export default function FAQSection() {
  const half = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, half);
  const rightFaqs = faqs.slice(half);

  return (
    <section
      className="relative py-24 md:py-36 overflow-hidden"
      id="faq"
      aria-labelledby="faq-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(232,160,32,0.04)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal delay={0.05}>
            <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-5">
              FAQ
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h2 id="faq-heading" className="text-display-md font-black text-white">
              Questions UK Businesses Ask{" "}
              <span className="text-gradient">Before Working With Us</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* FAQ columns */}
        <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-20">
          <div className="divide-y divide-border">
            {leftFaqs.map((faq, i) => (
              <FAQItem key={faq.q} faq={faq} index={i} />
            ))}
          </div>
          <div className="divide-y divide-border mt-6 md:mt-0">
            {rightFaqs.map((faq, i) => (
              <FAQItem key={faq.q} faq={faq} index={i + half} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.3} className="text-center mt-16">
          <p className="text-muted-light mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-4 transition-all duration-300"
          >
            Get a straight answer on a free call
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9H15M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
