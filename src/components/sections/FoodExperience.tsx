import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { galleryImages } from "@/data/gallery";

/** The studio-shot pizzas lead the rail — they photograph best at scale. */
const rail = galleryImages.filter((i) => i.src.startsWith("/images/pizza/")).slice(0, 10);

export function FoodExperience() {
  return (
    <section className="ember-glow relative overflow-hidden bg-ink text-cream-200">
      <div className="grain absolute inset-0" aria-hidden />

      <div className="relative py-20 sm:py-24 lg:py-28">
        <div className="shell">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <Reveal>
                <span className="eyebrow text-flame-200">The Pizza</span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-5 text-[clamp(2rem,5vw,3.4rem)] text-cream-50">
                  Neapolitan, fired in front of you
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 text-[1.0625rem] leading-relaxed text-cream-200/75">
                  Slow-fermented dough, a blistered leopard-spotted crust, and
                  toppings that stay simple on purpose. Straight from the oven to
                  your guests.
                </p>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <div className="shrink-0 lg:pb-2">
                <ButtonLink href="/catering-form" variant="light">
                  See the Full Menu
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Edge-to-edge scroll rail: the photography does the selling */}
        <Reveal delay={160}>
          <ul className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 sm:gap-5 sm:px-8 lg:px-12">
            {rail.map((img, i) => (
              <li
                key={img.src}
                className="w-[74vw] shrink-0 snap-center sm:w-[42vw] lg:w-[26rem]"
              >
                <figure className="group relative overflow-hidden rounded-2xl ring-1 ring-cream-50/10">
                  <div className="relative aspect-5/4 w-full">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 1024px) 26rem, (min-width: 640px) 42vw, 74vw"
                      loading={i < 2 ? "eager" : "lazy"}
                      quality={80}
                      className="object-cover object-center transition-transform duration-[1000ms] ease-out group-hover:scale-105"
                    />
                  </div>
                </figure>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="shell">
          <p className="mt-4 text-[0.75rem] uppercase tracking-[0.18em] text-cream-200/60">
            Scroll for more &rarr;
          </p>
        </div>
      </div>
    </section>
  );
}
