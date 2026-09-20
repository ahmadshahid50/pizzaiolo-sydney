import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Contact } from "@/components/sections/Contact";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Reveal } from "@/components/ui/Reveal";
import { Amp } from "@/components/ui/Amp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { menuGroups, menuIntro } from "@/data/menu";

export const metadata = buildMetadata({
  title: "Catering Menu & Enquiry | Pizzaiolo Woodfire Pizza Sydney",
  description:
    "Beyond pizza — lasagna, cannelloni, arancini, meatballs, salads, cannoli and tiramisu. Family and catering sizes for events across Sydney.",
  path: "/catering-form",
  image: "/images/catering/catering-pasta-arancini-trays.webp",
});

export default function CateringMenuPage() {
  return (
    <>
      <PageHero
        eyebrow={menuIntro.eyebrow}
        title={menuIntro.heading}
        lead={menuIntro.body}
        image="/images/catering/catering-pasta-arancini-trays.webp"
        alt=""
        crumb="Catering Menu"
      />

      <section className="relative overflow-hidden bg-cream">
        <div className="grain absolute inset-0" aria-hidden />

        <div className="shell relative py-16 sm:py-20 lg:py-24">
          <Reveal>
            <p className="mx-auto max-w-3xl text-center text-[1.0625rem] leading-relaxed text-ink-500">
              {menuIntro.note}
            </p>
          </Reveal>

          <div className="mt-16 space-y-20 sm:space-y-24">
            {menuGroups.map((group, gi) => (
              <div key={group.id} id={group.id} className="scroll-mt-28">
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
                  {/* Sticky image rail, alternating side on large screens */}
                  <div
                    className={`lg:col-span-4 ${gi % 2 === 1 ? "lg:order-2" : ""}`}
                  >
                    <Reveal>
                      <div className="lg:sticky lg:top-28">
                        {group.image ? (
                          <div className="arch-sm relative aspect-4/5 w-full overflow-hidden shadow-[0_26px_60px_-34px_rgba(11,10,9,0.55)]">
                            <Image
                              src={group.image.src}
                              alt={group.image.alt}
                              fill
                              sizes="(min-width: 1024px) 24rem, 88vw"
                              loading="lazy"
                              quality={82}
                              className="object-cover object-center"
                            />
                          </div>
                        ) : null}
                        <h2 className="mt-7 text-[clamp(1.75rem,4vw,2.5rem)] text-ink-900">
                          <Amp>{group.title}</Amp>
                        </h2>
                        {group.blurb ? (
                          <p className="mt-3 text-[0.9375rem] text-ink-400">
                            {group.blurb}
                          </p>
                        ) : null}
                      </div>
                    </Reveal>
                  </div>

                  {/* Items */}
                  <div className="lg:col-span-8">
                    <ul className="divide-y divide-ink/10 border-y border-ink/10">
                      {group.items.map((item, ii) => (
                        <Reveal as="li" key={item.name} delay={ii * 60}>
                          <div className="py-6 sm:py-7">
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                              <h3 className="text-xl text-ink-900 sm:text-[1.375rem]">
                                <Amp>{item.name}</Amp>
                              </h3>
                              <ul className="flex shrink-0 flex-col gap-1 sm:items-end">
                                {item.prices.map((price) => (
                                  <li
                                    key={price}
                                    className="whitespace-nowrap text-[0.875rem] font-medium text-ember"
                                  >
                                    {price}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            {item.description ? (
                              <p className="mt-2.5 max-w-2xl text-[0.9375rem] leading-relaxed text-ink-500">
                                {item.description}
                              </p>
                            ) : null}
                          </div>
                        </Reveal>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-ink/10">
        <div className="shell pt-16 sm:pt-20">
          <SectionHeading
            eyebrow="Catering Enquiry"
            title="Tell us about your event"
            lead="Send through your date, guest numbers and the dishes you are interested in, and we will come back to you with a quote."
            align="center"
            className="mx-auto"
          />
        </div>
      </div>

      <Contact />
      <FinalCTA />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Catering Menu", path: "/catering-form" },
        ])}
      />
    </>
  );
}
