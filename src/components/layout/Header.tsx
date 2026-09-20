"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight, Mail, Phone, socialIcons } from "@/components/ui/Icons";
import { external, navLinks, site, socials } from "@/data/site";

/** Routes that open with a full-bleed dark hero the header can sit over. */
const TRANSPARENT_ROUTES = new Set(["/"]);

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const overHero = TRANSPARENT_ROUTES.has(pathname) && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile panel whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll and handle Escape while the panel is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const linkTone = overHero
    ? "text-cream-100/90 hover:text-cream-50"
    : "text-ink-700 hover:text-ember";

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
        overHero
          ? "bg-transparent"
          : // Opaque while the mobile panel is open, otherwise the blurred
            // hero shows through and leaves a grey seam above the panel.
            open
            ? "border-b border-ink/10 bg-cream"
            : "border-b border-ink/10 bg-cream/85 backdrop-blur-xl",
      ].join(" ")}
    >
      {/* Utility bar — collapses away as soon as the page scrolls */}
      <div
        className={[
          "hidden overflow-hidden border-b transition-all duration-500 ease-out lg:block",
          scrolled ? "max-h-0 border-transparent opacity-0" : "max-h-12 opacity-100",
          overHero ? "border-cream-50/15" : "border-ink/10",
        ].join(" ")}
      >
        <div className="shell flex h-11 items-center justify-between">
          <div className="flex items-center gap-7 text-[0.8125rem]">
            <a href={site.phoneHref} className={`inline-flex items-center gap-2 transition-colors ${linkTone}`}>
              <Phone className="h-3.5 w-3.5" />
              {site.phone}
            </a>
            <a href={site.emailHref} className={`inline-flex items-center gap-2 transition-colors ${linkTone}`}>
              <Mail className="h-3.5 w-3.5" />
              {site.email}
            </a>
          </div>

          <div className="flex items-center gap-5">
            <span
              className={`text-[0.6875rem] font-semibold uppercase tracking-[0.18em] ${
                overHero ? "text-cream-200/60" : "text-ink-400"
              }`}
            >
              {site.tagline}
            </span>
            <span className="tricolore opacity-70" aria-hidden />
            <div className="flex items-center gap-3">
              {socials.map((s) => {
                const Icon = socialIcons[s.name as keyof typeof socialIcons];
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${site.name} on ${s.name}`}
                    className={`transition-colors ${linkTone}`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={`shell flex items-center justify-between transition-all duration-500 ease-out ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Logo tone={overHero ? "light" : "dark"} />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "relative rounded-full px-3.5 py-2 text-[0.9375rem] transition-colors duration-300",
                      linkTone,
                      active ? (overHero ? "text-cream-50" : "text-ember") : "",
                    ].join(" ")}
                  >
                    {link.label}
                    <span
                      aria-hidden
                      className={[
                        "absolute inset-x-3.5 -bottom-0.5 h-px origin-left transition-transform duration-300",
                        overHero ? "bg-cream-50" : "bg-ember",
                        active ? "scale-x-100" : "scale-x-0",
                      ].join(" ")}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href={external.order} variant={overHero ? "light" : "secondary"}>
            Order Online
          </ButtonLink>
          <ButtonLink href={external.book} variant="primary">
            Book Your Event
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </ButtonLink>
        </div>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className={`relative -mr-2 flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${
            overHero ? "text-cream-50" : "text-ink-900"
          }`}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden className="relative block h-4 w-6">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="absolute left-0 block h-[1.75px] w-6 rounded-full bg-current transition-all duration-300 ease-out"
                style={{
                  top: open ? "7px" : `${i * 7}px`,
                  transform: open
                    ? i === 0
                      ? "rotate(45deg)"
                      : i === 2
                        ? "rotate(-45deg)"
                        : "scaleX(0)"
                    : "none",
                  opacity: open && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </span>
        </button>
      </div>

      {/* Mobile panel */}
      <div id="mobile-menu" hidden={!open} className="lg:hidden">
        <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-ink/10 bg-cream px-5 pb-8 pt-4">
          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center justify-between border-b border-ink/10 py-4 font-display text-2xl text-ink-900 transition-colors hover:text-ember"
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4 text-ink-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-7 flex flex-col gap-3">
            <ButtonLink href={external.book} size="lg" className="w-full">
              Book Your Event
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href={external.order} variant="secondary" size="lg" className="w-full">
              Order Online
            </ButtonLink>
          </div>

          <div className="mt-7 flex flex-col gap-3 border-t border-ink/10 pt-6 text-[0.9375rem]">
            <a href={site.phoneHref} className="inline-flex items-center gap-3 text-ink-700 transition-colors hover:text-ember">
              <Phone className="h-4 w-4 text-ember" />
              {site.phone}
            </a>
            <a href={site.emailHref} className="inline-flex items-center gap-3 break-all text-ink-700 transition-colors hover:text-ember">
              <Mail className="h-4 w-4 text-ember" />
              {site.email}
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4">
            {socials.map((s) => {
              const Icon = socialIcons[s.name as keyof typeof socialIcons];
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.name} on ${s.name}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink-700 transition-colors hover:border-ember hover:text-ember"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
