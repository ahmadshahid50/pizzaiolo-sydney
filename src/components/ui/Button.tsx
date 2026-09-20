import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "light";
type Size = "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2.5 rounded-full font-medium " +
  "transition-[transform,background-color,color,box-shadow,border-color] duration-300 ease-out " +
  // No `whitespace-nowrap`: a long label would set a min-content width that a
  // grid or flex item cannot shrink below, pushing the page into horizontal
  // scroll on 320px screens. Wrapping and centring is the safer default.
  "active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 text-center";

const variants: Record<Variant, string> = {
  primary:
    "bg-ember text-cream-50 shadow-[0_2px_18px_-4px_rgba(180,69,31,0.55)] " +
    "hover:bg-wine hover:shadow-[0_8px_28px_-6px_rgba(93,31,36,0.6)] hover:-translate-y-0.5",
  secondary:
    "border border-ink/20 bg-transparent text-ink-900 hover:border-ink hover:bg-ink hover:text-cream-50 hover:-translate-y-0.5",
  light:
    "border border-cream-50/35 bg-cream-50/8 text-cream-50 backdrop-blur-sm " +
    "hover:bg-cream-50 hover:text-ink-900 hover:border-cream-50 hover:-translate-y-0.5",
  ghost: "text-ink-900 hover:text-ember px-0",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-[0.9375rem]",
  lg: "px-8 py-4 text-base",
};

export function buttonClass(variant: Variant = "primary", size: Size = "md") {
  return `${base} ${variants[variant]} ${variant === "ghost" ? "" : sizes[size]}`;
}

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "children" | "className">;

/**
 * Renders a Next.js <Link> for internal routes and a plain <a> for external
 * ones (Square ordering, booking and contact all live off-site).
 */
export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...rest
}: ButtonLinkProps) {
  const cls = `${buttonClass(variant, size)} ${className}`;
  const isExternal = /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
