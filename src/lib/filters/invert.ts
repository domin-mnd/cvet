import type { Hexadecimal, RGB } from "@cvet/types";

/**
 * Invert a color.
 * @param {RGB} rgb The RGB color to invert.
 * @returns {RGB} The inverted color in RGB that can be then used as map.
 */
export function invert(rgb: RGB): RGB {
  return {
    r: 255 - rgb.r as Hexadecimal,
    g: 255 - rgb.g as Hexadecimal,
    b: 255 - rgb.b as Hexadecimal,
  };
}
