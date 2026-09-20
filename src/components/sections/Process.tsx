import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { process } from "@/data/content";
import { external } from "@/data/site";

const stepImages = [
  {
    src: "/images/gallery/pizza-service-selection.webp",
    alt: "A run of freshly boxed pizzas lined up during event service",
  },
  {
    src: "/images/hero/pizzaiolo-pizza-trailer.webp",
    alt: "The Pizzaiolo mobile woodfire pizza trailer, wrapped in black and white photography",
  },
  {
    src: "/images/story/woodfire-pizza-cheese-pull.webp",
    alt: "A slice of woodfired pizza lifted with a cheese pull",
  },
];

export function Process() {
  return (
    <section className="ember-glow relative overflow-hidden bg-ink text-cream-200">
      <div className="grain absolute inset-0" aria-hidden />

      <div className="shell relative py-20 sm:py-28 lg:py-32">
        <SectionHeading
          eyebrow={process.eyebrow}
          title={process.heading}
          tone="light"
          align="center"
          lead="From the first message to the last slice, the logistics are ours to worry about."
          className="mx-auto"
        />

        <ol className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {process.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 130}>
              <div className="group relative flex h-full flex-col">
                {/* Numbered arch image */}
                <div className="arch-sm relative aspect-5/4 w-full overflow-hidden ring-1 ring-cream-50/12">
                  <Image
                    src={stepImages[i].src}
                    alt={stepImages[i].alt}
                    fill
                    sizes="(min-width: 768px) 24rem, 88vw"
                    className="object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent"
                  />
                  <span
                    aria-hidden
                    className="absolute bottom-4 left-5 font-display text-5xl font-semibold text-cream-50/95"
                  >
                    {i + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl text-cream-50">{step.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-cream-200/70">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={260}>
          <div className="mt-14 flex justify-center">
            <ButtonLink href={external.book} size="lg">
              Book Your Event
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
