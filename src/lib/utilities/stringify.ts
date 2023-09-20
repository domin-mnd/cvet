import type { Color, HEX } from "@cvet/types";
import { detect } from "./detect";

/**
 * Parses the given object and returns a new object with the same properties, but with
 * the values formatted according to specific rules.
 * Will ignore alpha channel and instead divide it by 100.
 *
 * @param {T} obj - The object to be parsed.
 * @return {T} - The parsed object.
 */
function parseFixed<T extends Exclude<Color, HEX> = Exclude<Color, HEX>>(
  obj: T
): T {
  return Object.keys(obj).reduce<T>(
    (acc, key) =>
      // Ignore alpha channel
      key === "a"
        ? ({ ...acc, [key]: obj[key as keyof T] as number / 100 } as T)
        : ({ ...acc, [key]: +(obj[key as keyof T] as number).toFixed(1) } as T),
    {} as T
  );
}

/**
 * Converts a color object to a string representation for css purposes.
 * Unlike stringifying manually, this utility rounds the decimal.
 *
 * @param {Color} color - The color object to be converted.
 * @return {string} The string representation of the color.
 */
export function stringify<T extends Color = Color>(color: T): string {
  const { model, color: out } = detect(color);
  if (model === "HEX") return out.toLowerCase();

  // Using brackets to add scope to cases,
  // using parseFixed as unified method for toFixed and converting to number
  switch (model) {
    case "RGB": {
      const { r, g, b } = parseFixed(out);
      return `rgb(${r}, ${g}, ${b})`;
    }
    case "RGBA": {
      const { r, g, b, a } = parseFixed(out);
      return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
    case "HSL": {
      const { h, s, l } = parseFixed(out);
      return `hsl(${h}, ${s}%, ${l}%)`;
    }
    case "HSLA": {
      const { h, s, l, a } = parseFixed(out);
      return `hsla(${h}, ${s}%, ${l}%, ${a})`;
    }
    case "CMYK": {
      const { c, m, y, k } = parseFixed(out);
      return `cmyk(${c}%, ${m}%, ${y}%, ${k}%)`;
    }
    default: {
      throw new Error("Invalid color");
    }
  }
}
