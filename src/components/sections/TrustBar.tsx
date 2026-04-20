"use client";

import Counter from "@/components/ui/Counter";
import ScrollReveal from "@/components/ui/ScrollReveal";

const stats = [
  { value: 150, suffix: "+", label: "UK & USA Businesses Helped", prefix: "" },
  { value: 98, suffix: "%", label: "Client Retention Rate", prefix: "" },
  { value: 10, suffix: "+", label: "Years in Business", prefix: "" },
  { value: 4, suffix: "×", label: "Average Client ROI", prefix: "" },
];

export default function TrustBar() {
  return (
    <section className="relative py-20 md:py-28 bg-surface border-y border-border overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/[0.03] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1} direction="up">
              <div className="relative group text-center md:text-left p-6 rounded-2xl hover:bg-white/[0.02] transition-colors duration-300">
                {/* Divider (except first on md) */}
                {i > 0 && (
                  <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-border" />
                )}

                <div className="text-4xl md:text-5xl font-black text-white mb-2 leading-none tracking-tight">
                  <Counter
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={2200}
                    className="text-gradient"
                  />
                </div>
                <p className="text-sm text-muted-light leading-snug">{stat.label}</p>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500 rounded-full" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
