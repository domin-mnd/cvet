import type { Color, HEX } from "@cvet/types";

/**
 * Converts a color object to a string representation for css purposes.
 * Unlike stringifying manually, this utility rounds the decimal.
 *
 * @param {Color} color - The color object to be converted.
 * @return {string} The string representation of the color.
 */
export function stringify<T extends Color = Color>(color: T): string {
  // HEX is already a string
  if (typeof color === "string") return color.toLowerCase();
  const nonHex = color as Exclude<Color, HEX>;

  // RGB & RGBA
  if ("r" in nonHex && "g" in nonHex && "b" in nonHex) {
    // "+" removes trailing 0 if the value has no decimal
    const r = +nonHex.r.toFixed(1),
      g = +nonHex.g.toFixed(1),
      b = +nonHex.b.toFixed(1);
    if ("a" in nonHex) {
      return `rgba(${r}, ${g}, ${b}, ${nonHex.a / 100})`;
    }
    return `rgb(${r}, ${g}, ${b})`;
  }

  // HSL & HSLA
  if ("h" in nonHex && "s" in nonHex && "l" in nonHex) {
    const h = +nonHex.h.toFixed(1),
      s = +nonHex.s.toFixed(1),
      l = +nonHex.l.toFixed(1);
    if ("a" in nonHex) {
      return `hsla(${h}, ${s}%, ${l}%, ${nonHex.a / 100})`;
    }
    return `hsl(${h}, ${s}%, ${l}%)`;
  }

  // CMYK
  if ("c" in nonHex && "m" in nonHex && "y" in nonHex && "k" in nonHex) {
    const c = +nonHex.c.toFixed(1),
      m = +nonHex.m.toFixed(1),
      y = +nonHex.y.toFixed(1),
      k = +nonHex.k.toFixed(1);
    return `cmyk(${c}%, ${m}%, ${y}%, ${k}%)`;
  }

  throw new Error("Invalid color");
}
