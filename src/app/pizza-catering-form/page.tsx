import { PageHero } from "@/components/sections/PageHero";
import { Packages } from "@/components/sections/Packages";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { howItWorks } from "@/data/packages";

export const metadata = buildMetadata({
  title: "Pizza Catering Packages | Pizzaiolo Woodfire Pizza Sydney",
  description:
    "All-you-can-eat woodfire pizza catering packages from $27 per person. Setup, cooking and service included, cooked fresh on-site at your Sydney event.",
  path: "/pizza-catering-form",
  image: "/images/pizza/pizza-margherita.webp",
});

export default function PizzaPackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Pizza Packages"
        title="All-you-can-eat woodfire pizza catering"
        lead="Three packages, each cooked on-site and served until your guests are full. Setup, cooking and service are included in every one."
        image="/images/pizza/pizza-margherita.webp"
        alt=""
        crumb="Pizza Packages"
        focal="center 55%"
      />

      {/* How It Works — the client's own service timeline */}
      <section className="relative overflow-hidden bg-cream">
        <div className="grain absolute inset-0" aria-hidden />

        <div className="shell relative py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="How It Works"
                title="A stress-free way to entertain"
              />
              <Reveal delay={160}>
                <p className="mt-6 text-[1.0625rem] leading-relaxed text-ink-500">
                  {howItWorks.intro}
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink-500">
                  {howItWorks.speciality}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <ol className="relative space-y-8 border-l border-ink/15 pl-8 sm:pl-10">
                {howItWorks.steps.map((step, i) => (
                  <Reveal as="li" key={i} delay={i * 90}>
                    <span
                      aria-hidden
                      className="absolute -left-[0.5625rem] flex h-[1.125rem] w-[1.125rem] items-center justify-center rounded-full border-2 border-cream bg-ember"
                    />
                    <p className="text-[1.0625rem] leading-relaxed text-ink-700">
                      {step}
                    </p>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <Packages variant="full" />
      <FinalCTA />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Pizza Packages", path: "/pizza-catering-form" },
        ])}
      />
    </>
  );
}
