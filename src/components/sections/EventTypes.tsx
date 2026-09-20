import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Amp } from "@/components/ui/Amp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { eventTypes } from "@/data/events";

export function EventTypes() {
  return (
    <section className="relative bg-cream-100">
      <div className="shell py-20 sm:py-24 lg:py-28">
        <SectionHeading
          eyebrow="Events We Cater"
          title="Built for the occasions that matter"
          lead="Weddings, corporate functions, milestone birthdays and community days — the setup adapts to your venue, your timing and your crowd."
          align="center"
          className="mx-auto"
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {eventTypes.map((event, i) => (
            <Reveal as="li" key={event.title} delay={i * 90}>
              <article className="group relative h-full overflow-hidden rounded-2xl bg-ink">
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.alt}
                    fill
                    sizes="(min-width: 1024px) 26rem, (min-width: 640px) 45vw, 90vw"
                    loading="lazy"
                    quality={78}
                    className="object-cover object-center transition-transform duration-[1000ms] ease-out group-hover:scale-[1.07]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent transition-opacity duration-500 group-hover:from-ink/95"
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl text-cream-50">
                    <Amp>{event.title}</Amp>
                  </h3>
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-cream-200/75">
                    {event.blurb}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
