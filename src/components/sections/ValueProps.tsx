import { Reveal } from "@/components/ui/Reveal";
import { valueProps } from "@/data/content";

export function ValueProps() {
  return (
    <section className="relative border-b border-ink/10 bg-cream-100">
      <div className="shell py-14 sm:py-16">
        {/* The design carries no visible heading here; screen readers still
            need one so the document outline does not skip from h1 to h3. */}
        <h2 className="sr-only">Why choose Pizzaiolo</h2>
        <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((prop, i) => (
            <Reveal as="li" key={prop.title} delay={i * 90}>
              <div className="flex h-full flex-col">
                <span
                  aria-hidden
                  className="font-display text-sm font-semibold text-ember/45"
                >
                  0{i + 1}
                </span>
                <span className="mt-3 h-px w-8 bg-ember/35" aria-hidden />
                <h3 className="mt-4 text-lg text-ink-900 sm:text-xl">
                  {prop.title}
                </h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-500">
                  {prop.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
