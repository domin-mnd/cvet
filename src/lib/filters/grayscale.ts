import type { Amount, RGB } from "../types";

/**
 * Grayscale a color by a given amount.
 * @param {RGB} rgb The RGB color to grayscale. 
 * @param {Amount} amount The amount to grayscale the color by. 0 is grayscaled, 100 is clear. 0-100%
 * @returns {RGB} The grayscaled color in RGB that can be then used as map.
 */
export function grayscale(rgb: RGB, amount: Amount): RGB {
  const { r, g, b } = rgb;
  const gray = r * 0.3 + g * 0.59 + b * 0.11;
  return {
    r: gray + (r - gray) * amount / 100,
    g: gray + (g - gray) * amount / 100,
    b: gray + (b - gray) * amount / 100,
  };
}