import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { ArrowRight, Mail, MapPin, Phone, socialIcons } from "@/components/ui/Icons";
import {
  external,
  navLinks,
  serviceAreaLinks,
  site,
  socials,
} from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ember-glow relative overflow-hidden bg-ink text-cream-200">
      <div className="grain absolute inset-0" aria-hidden />

      <div className="shell relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Masthead */}
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-cream-200/70">
              {site.description}
            </p>
            <div className="mt-7 flex items-center gap-3">
              {socials.map((s) => {
                const Icon = socialIcons[s.name as keyof typeof socialIcons];
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${site.name} on ${s.name}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-50/15 text-cream-200/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-flame hover:text-flame"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer" className="lg:col-span-2">
            <h2 className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-flame-200">
              Explore
            </h2>
            <ul className="mt-5 space-y-3 text-[0.9375rem]">
              <li>
                <Link href="/" className="-my-1 inline-block py-1 text-cream-200/75 transition-colors hover:text-cream-50">
                  Home
                </Link>
              </li>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="-my-1 inline-block py-1 text-cream-200/75 transition-colors hover:text-cream-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Service areas — preserved from the existing footer for SEO */}
          <nav aria-label="Service areas" className="lg:col-span-3">
            <h2 className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-flame-200">
              Where We Cater
            </h2>
            <ul className="mt-5 space-y-3 text-[0.9375rem]">
              {serviceAreaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="-my-1 inline-block py-1 text-cream-200/75 transition-colors hover:text-cream-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h2 className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-flame-200">
              Get In Touch
            </h2>
            <ul className="mt-5 space-y-4 text-[0.9375rem]">
              <li>
                <a
                  href={site.phoneHref}
                  className="group -my-1 inline-flex items-start gap-3 py-1 text-cream-200/75 transition-colors hover:text-cream-50"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="group -my-1 inline-flex items-start gap-3 break-all py-1 text-cream-200/75 transition-colors hover:text-cream-50"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
                  {site.email}
                </a>
              </li>
              <li className="inline-flex items-start gap-3 text-cream-200/75">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
                Mobile catering across {site.serviceArea}
              </li>
            </ul>

            <div className="mt-7 flex flex-col gap-3">
              <a
                href={external.book}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center justify-center gap-2 rounded-full bg-ember px-6 py-3 text-[0.9375rem] font-medium text-cream-50 transition-all duration-300 hover:-translate-y-0.5 hover:bg-flame hover:text-ink"
              >
                Book Your Event
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </a>
              <a
                href={external.order}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-50/25 px-6 py-3 text-[0.9375rem] font-medium text-cream-50 transition-all duration-300 hover:-translate-y-0.5 hover:border-cream-50 hover:bg-cream-50 hover:text-ink"
              >
                Order Online
              </a>
            </div>
          </div>
        </div>

        {/* Baseline */}
        <div className="mt-14 flex flex-col gap-5 border-t border-cream-50/12 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="tricolore" aria-hidden />
            <p className="text-[0.8125rem] text-cream-200/55">
              {site.tagline}
            </p>
          </div>
          <p className="text-[0.8125rem] text-cream-200/55">
            Pizzaiolo &copy; {year}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
