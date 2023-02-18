import type { RGB } from "../types";

/**
 * Adjust the contrast of a color by a given amount.
 * @param {RGB} rgb The RGB color to adjust the contrast of.
 * @param {number} amount The amount to adjust the contrast by. 0-100%++
 * @returns {RGB} The adjusted contrast color in RGB that can be then used as map.
 */
export function contrast(rgb: RGB, amount: number): RGB {
  const c = {
    r: ((rgb.r - 128) * amount) / 100 + 128,
    g: ((rgb.g - 128) * amount) / 100 + 128,
    b: ((rgb.b - 128) * amount) / 100 + 128,
  };
  return {
    r: c.r < 0 ? 0 : c.r > 255 ? 255 : Math.round(c.r),
    g: c.g < 0 ? 0 : c.g > 255 ? 255 : Math.round(c.g),
    b: c.b < 0 ? 0 : c.b > 255 ? 255 : Math.round(c.b),
  };
}
