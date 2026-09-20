import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { setupNote, setups } from "@/data/content";

type Props = {
  variant?: "teaser" | "full";
};

export function Setup({ variant = "full" }: Props) {
  const isTeaser = variant === "teaser";

  return (
    <section id="setup" className="relative bg-cream">
      <div className="shell py-20 sm:py-24 lg:py-28">
        <SectionHeading
          eyebrow="Pizzaiolo Setup"
          title={isTeaser ? "A pizzeria that travels" : "Our Setup"}
          lead="Two trailer configurations, each built around a genuine woodfire oven. Tell us your venue and we will tell you which one fits."
          align="center"
          className="mx-auto"
        />

        {/* Hero pair — the trailer in the field */}
        <Reveal delay={120}>
          <div className="mt-14 grid gap-4 sm:grid-cols-5">
            <div className="relative aspect-16/10 overflow-hidden rounded-2xl sm:col-span-3 sm:aspect-auto sm:min-h-[20rem]">
              <Image
                src="/images/hero/pizzaiolo-pizza-trailer.webp"
                alt="The Pizzaiolo mobile woodfire pizza trailer, wrapped in black and white photography"
                fill
                sizes="(min-width: 640px) 60vw, 92vw"
                loading="lazy"
                quality={82}
                className="object-cover object-center"
              />
            </div>
            <div className="relative aspect-16/10 overflow-hidden rounded-2xl sm:col-span-2 sm:aspect-auto sm:min-h-[20rem]">
              <Image
                src="/images/setup/pizzaiolo-trailer-corporate-event.webp"
                alt="The Pizzaiolo mobile pizza trailer set up at a corporate event beside a Qantas aircraft"
                fill
                sizes="(min-width: 640px) 38vw, 92vw"
                loading="lazy"
                quality={82}
                className="object-cover object-center"
              />
            </div>
          </div>
        </Reveal>

        {/* Specification cards */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {setups.map((setup, i) => (
            <Reveal key={setup.id} delay={i * 120}>
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-ink/12 bg-cream-50">
                <div className="relative aspect-2/3 w-full bg-cream-100 sm:aspect-4/5">
                  <Image
                    src={setup.image}
                    alt={setup.alt}
                    fill
                    sizes="(min-width: 1024px) 38rem, 92vw"
                    loading="lazy"
                    quality={86}
                    className="object-contain object-top"
                  />
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <h3 className="text-2xl text-ink-900">{setup.name}</h3>
                  <p className="mt-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-ember">
                    {setup.strapline}
                  </p>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-500">
                    {setup.body}
                  </p>

                  <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-ink/10 pt-6">
                    {setup.specs.map((spec) => (
                      <div key={spec.label}>
                        <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-400">
                          {spec.label}
                        </dt>
                        <dd className="mt-1 font-display text-xl text-ink-900">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  {!isTeaser && setup.notes.length ? (
                    <ul className="mt-6 space-y-3 border-t border-ink/10 pt-6">
                      {setup.notes.map((note) => (
                        <li
                          key={note}
                          className="flex gap-3 text-[0.875rem] leading-relaxed text-ink-500"
                        >
                          <span
                            aria-hidden
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember"
                          />
                          {note}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-center gap-5">
            <p className="text-[0.8125rem] italic text-ink-400">{setupNote}</p>
            {isTeaser ? (
              <ButtonLink href="/pizzaiolo-setup" variant="secondary" size="lg">
                Explore Our Setup
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </ButtonLink>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
