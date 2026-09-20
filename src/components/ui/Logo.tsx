import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

type Props = {
  /** Light text for dark backgrounds (hero, footer). */
  tone?: "dark" | "light";
  className?: string;
  /** Renders a plain block instead of a link — for use inside the footer masthead. */
  asLink?: boolean;
};

export function Logo({ tone = "dark", className = "", asLink = true }: Props) {
  const content = (
    <span className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/images/branding/pizzaiolo-logo.png"
        alt=""
        width={132}
        height={130}
        priority
        className="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-cream-50/15 sm:h-12 sm:w-12"
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-xl font-semibold tracking-tight sm:text-[1.375rem] ${
            tone === "light" ? "text-cream-50" : "text-ink-900"
          }`}
        >
          Pizzaiolo
        </span>
        <span
          className={`mt-1 text-[0.5625rem] font-semibold uppercase tracking-[0.2em] ${
            tone === "light" ? "text-cream-200/70" : "text-ink-400"
          }`}
        >
          Woodfire Pizza
        </span>
      </span>
    </span>
  );

  if (!asLink) return content;

  return (
    <Link
      href="/"
      aria-label={`${site.fullName} — home`}
      className="rounded-lg transition-opacity duration-300 hover:opacity-80"
    >
      {content}
    </Link>
  );
}
