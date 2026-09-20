import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Amp } from "@/components/ui/Amp";

type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
  image: string;
  alt?: string;
  /** Breadcrumb trail, excluding Home. */
  crumb: string;
  /** Object-position for the backdrop, e.g. "center 35%". */
  focal?: string;
};

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  alt = "",
  crumb,
  focal = "center",
}: Props) {
  return (
    <section className="relative isolate flex min-h-[54svh] items-end overflow-hidden bg-ink pb-12 pt-36 sm:min-h-[58svh] sm:pb-16 sm:pt-40">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        quality={78}
        className="-z-20 object-cover"
        style={{ objectPosition: focal }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/78 to-ink/50"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_80%_20%,rgba(224,135,58,0.2),transparent_70%)]"
      />
      <div className="grain absolute inset-0 -z-10" aria-hidden />

      <div className="shell relative">
        {/* Breadcrumb */}
        <Reveal>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-[0.75rem] text-cream-200/55">
              <li>
                <Link
                  href="/"
                  className="-my-1 inline-block py-1 transition-colors hover:text-cream-50"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-cream-200/85" aria-current="page">
                {crumb}
              </li>
            </ol>
          </nav>
        </Reveal>

        {eyebrow ? (
          <Reveal delay={60}>
            <span className="eyebrow mt-6 text-flame-200">{eyebrow}</span>
          </Reveal>
        ) : null}

        <Reveal delay={110}>
          <h1 className="text-shadow-hero mt-5 max-w-[20ch] text-[clamp(2.3rem,6.5vw,4.5rem)] text-cream-50">
            <Amp>{title}</Amp>
          </h1>
        </Reveal>

        {lead ? (
          <Reveal delay={180}>
            <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-cream-200/80 sm:text-lg">
              {lead}
            </p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
