import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { cannoli } from "@/data/content";
import { external } from "@/data/site";

type Props = {
  /** "teaser" trims the copy for the homepage. */
  variant?: "teaser" | "full";
};

export function Cannoli({ variant = "full" }: Props) {
  const isTeaser = variant === "teaser";
  const body = isTeaser ? cannoli.body.slice(0, 1) : cannoli.body;

  return (
    <section
      id="cannoli"
      className="relative overflow-hidden bg-wine text-cream-200"
    >
      <div className="grain absolute inset-0" aria-hidden />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(65%_55%_at_18%_20%,rgba(224,135,58,0.22),transparent_70%)]"
      />

      <div className="shell relative py-20 sm:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Copy */}
          <div className="lg:col-span-6">
            <Reveal>
              <span className="eyebrow text-flame-200">{cannoli.eyebrow}</span>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-5 max-w-[16ch] text-[clamp(2rem,5vw,3.4rem)] text-cream-50">
                {cannoli.heading}
              </h2>
            </Reveal>

            <Reveal delay={130}>
              <p className="mt-6 inline-flex rounded-full border border-flame/35 bg-flame/10 px-5 py-2.5 text-[0.875rem] font-medium text-flame-200">
                {cannoli.price}
              </p>
            </Reveal>

            <div className="mt-6 space-y-4">
              {body.map((para, i) => (
                <Reveal key={i} delay={180 + i * 80}>
                  <p className="max-w-xl text-[1.0625rem] leading-[1.75] text-cream-200/80">
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>

            {/* Package facts */}
            <Reveal delay={320}>
              <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-cream-50/15 pt-7 sm:max-w-lg">
                {cannoli.highlights.map((h) => (
                  <div key={h.label}>
                    <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-cream-200/70">
                      {h.label}
                    </dt>
                    <dd className="mt-1.5 font-display text-lg text-cream-50">
                      {h.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={external.book} size="lg" className="w-full sm:w-auto">
                  Add Cannoli To Your Event
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </ButtonLink>
                {isTeaser ? (
                  <ButtonLink
                    href="/roaming-cannoli"
                    variant="light"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Learn More
                  </ButtonLink>
                ) : null}
              </div>
            </Reveal>
          </div>

          {/* Imagery */}
          <div className="lg:col-span-6">
            <Reveal delay={120}>
              <div className="grid grid-cols-5 grid-rows-6 gap-3 sm:gap-4">
                <div className="col-span-3 row-span-6 overflow-hidden rounded-2xl ring-1 ring-cream-50/12">
                  <div className="relative h-full min-h-[18rem] w-full">
                    <Image
                      src="/images/cannoli/cannoli-by-michele-board.webp"
                      alt="Sicilian cannoli filled to order and dusted with icing sugar"
                      fill
                      sizes="(min-width: 1024px) 20rem, 50vw"
                      loading="lazy"
                      quality={82}
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                <div className="col-span-2 row-span-3 overflow-hidden rounded-2xl ring-1 ring-cream-50/12">
                  <div className="relative h-full min-h-[8rem] w-full">
                    <Image
                      src="/images/cannoli/cannoli-freshly-piped.webp"
                      alt="A freshly piped cannolo held in front of the Pizzaiolo logo"
                      fill
                      sizes="(min-width: 1024px) 14rem, 36vw"
                      loading="lazy"
                      quality={80}
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                <div className="col-span-2 row-span-3 overflow-hidden rounded-2xl ring-1 ring-cream-50/12">
                  <div className="relative h-full min-h-[8rem] w-full">
                    <Image
                      src="/images/cannoli/biscoff-cannoli.webp"
                      alt="Biscoff cannoli served with Biscoff spread and biscuits"
                      fill
                      sizes="(min-width: 1024px) 14rem, 36vw"
                      loading="lazy"
                      quality={80}
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
