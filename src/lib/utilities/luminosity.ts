import type { RGB } from "@cvet/types";

/**
 * Find the luminosity of a color.
 * @param {RGB} rgb An RGB color used to find luminosity.
 * @returns {number} The luminosity of the color.
 */
export function luminosity(rgb: RGB): number {
  const a = [rgb.r, rgb.g, rgb.b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}
