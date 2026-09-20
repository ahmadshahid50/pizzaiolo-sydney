import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "dark",
  className = "",
  as: Tag = "h2",
}: Props) {
  const centered = align === "center";

  return (
    <div
      className={`flex flex-col ${centered ? "items-center text-center" : "items-start"} ${className}`}
    >
      {eyebrow ? (
        <Reveal>
          <span
            className={`eyebrow ${tone === "light" ? "text-flame-200" : "text-ember"}`}
          >
            {eyebrow}
          </span>
        </Reveal>
      ) : null}

      <Reveal delay={80}>
        <Tag
          className={`mt-5 max-w-3xl text-[clamp(2rem,5.2vw,3.5rem)] ${
            tone === "light" ? "text-cream-50" : "text-ink-900"
          }`}
        >
          {title}
        </Tag>
      </Reveal>

      {lead ? (
        <Reveal delay={160}>
          <p
            className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${
              tone === "light" ? "text-cream-200/85" : "text-ink-500"
            }`}
          >
            {lead}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
