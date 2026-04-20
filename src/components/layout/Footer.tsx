import Link from "next/link";

const services = [
  { label: "Web Design & Development", href: "/web-design-and-development" },
  { label: "SEO Services", href: "/seo-services" },
  { label: "ORM Services", href: "/orm-services" },
  { label: "CRM Development", href: "/crm-development" },
  { label: "ERP Development", href: "/erp-development" },
];

const locations = [
  "London", "Manchester", "Birmingham", "Leeds",
  "Bristol", "Edinburgh", "Glasgow", "Liverpool",
  "Sheffield", "Nottingham",
];

const industries = [
  "Healthcare", "Legal", "Finance", "E-Commerce",
  "Education", "Construction", "Hospitality", "Startups",
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      {/* Top bar */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 9L9 2L16 9L9 16L2 9Z" fill="#080808" />
                <circle cx="9" cy="9" r="2.5" fill="#080808" />
              </svg>
            </div>
            <span className="font-bold text-xl tracking-tight">
              Net<span className="text-accent">Trackers</span>
            </span>
          </div>
          <p className="text-muted text-sm max-w-md">
            Full-service digital agency in London. Web design, SEO, reputation management,
            and bespoke software — one team, one strategy.
          </p>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-accent text-bg text-sm font-semibold px-6 py-3 rounded-full hover:bg-accent-light transition-all duration-300"
          >
            Free Strategy Call →
          </Link>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-5">Services</h3>
          <ul className="space-y-3">
            {services.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted-light hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-5">Locations</h3>
          <ul className="space-y-3">
            {locations.map((city) => (
              <li key={city}>
                <Link
                  href={`/web-design-${city.toLowerCase()}`}
                  className="text-sm text-muted-light hover:text-white transition-colors"
                >
                  {city}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-5">Industries</h3>
          <ul className="space-y-3">
            {industries.map((ind) => (
              <li key={ind}>
                <span className="text-sm text-muted-light">{ind}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-5">Company</h3>
          <ul className="space-y-3">
            {company.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted-light hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
          <p>© {new Date().getFullYear()} NetTrackers Ltd. All rights reserved. Registered in England & Wales.</p>
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1C3.686 1 1 3.686 1 7s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z" stroke="#6B6B6B" strokeWidth="1.2" />
              <path d="M7 4.5v3L9 9" stroke="#6B6B6B" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <span>26 Bunning Way, London N7 9UN</span>
            <span className="mx-2">·</span>
            <a href="mailto:hello@nettrackers.co.uk" className="hover:text-white transition-colors">
              hello@nettrackers.co.uk
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
