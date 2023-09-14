import type { RGB, Hexadecimal, RGBA } from "@cvet/types";

/**
 * Adjust the contrast of a color by a given amount.
 * @param {RGB | RGBA} rgb The RGB or RGBA color to adjust the contrast of.
 * @param {number} amount The amount to adjust the contrast by. 0-100%++
 * @returns {RGB | RGBA} The adjusted contrast color in RGB that can be then used as map.
 */
export function contrast(rgb: RGB | RGBA, amount: number): RGB | RGBA {
  const c = {
    r: ((rgb.r - 128) * amount) / 100 + 128,
    g: ((rgb.g - 128) * amount) / 100 + 128,
    b: ((rgb.b - 128) * amount) / 100 + 128,
  };
  return {
    r: c.r < 0 ? 0 : c.r > 255 ? 255 : (Math.round(c.r) as Hexadecimal),
    g: c.g < 0 ? 0 : c.g > 255 ? 255 : (Math.round(c.g) as Hexadecimal),
    b: c.b < 0 ? 0 : c.b > 255 ? 255 : (Math.round(c.b) as Hexadecimal),
    ...("a" in rgb && { a: rgb.a }),
  };
}
