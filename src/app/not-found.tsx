import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { navLinks } from "@/data/site";
import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80svh] items-center overflow-hidden bg-ink py-32">
      <Image
        src="/images/hero/woodfire-oven-flames.webp"
        alt=""
        fill
        sizes="100vw"
        quality={70}
        className="-z-20 object-cover opacity-35"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-ink/75" />
      <div className="grain absolute inset-0 -z-10" aria-hidden />

      <div className="shell relative text-center">
        <p className="eyebrow justify-center text-flame-200">Error 404</p>
        <h1 className="mt-6 text-[clamp(2.4rem,7vw,4.5rem)] text-cream-50">
          This one came out of the oven missing
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-[1.0625rem] leading-relaxed text-cream-200/75">
          The page you were after is not here. Try one of these instead.
        </p>

        <div className="mt-10 flex justify-center">
          <ButtonLink href="/" size="lg">
            Back to Home
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </ButtonLink>
        </div>

        <ul className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[0.9375rem] text-cream-200/70 underline-offset-4 transition-colors hover:text-cream-50 hover:underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
