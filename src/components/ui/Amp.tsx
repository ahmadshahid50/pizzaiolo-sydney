import { Fragment, type ReactNode } from "react";

/**
 * Renders an ampersand in the text face inside display type.
 *
 * Fraunces ships a highly stylised "et"-form ampersand. It is charming in a
 * logotype but ambiguous mid-phrase — "Spinach & Ricotta" reads as a symbol
 * rather than a word. Swapping just that glyph keeps the heading on-brand
 * while staying legible.
 */
export function Amp({ children }: { children: string }): ReactNode {
  if (!children.includes("&")) return children;

  return children.split("&").map((part, i, all) => (
    <Fragment key={i}>
      {part}
      {i < all.length - 1 ? <span className="amp">&amp;</span> : null}
    </Fragment>
  ));
}
