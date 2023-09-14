import type { Hexadecimal, RGB, RGBA } from "@cvet/types";

/**
 * Invert a color.
 * @param {RGB | RGBA} rgb The RGB color to invert.
 * @returns {RGB | RGBA} The inverted color in RGB that can be then used as map.
 */
export function invert(rgb: RGB | RGBA): RGB | RGBA {
  return {
    r: (255 - rgb.r) as Hexadecimal,
    g: (255 - rgb.g) as Hexadecimal,
    b: (255 - rgb.b) as Hexadecimal,
    ...("a" in rgb && { a: rgb.a }),
  };
}
