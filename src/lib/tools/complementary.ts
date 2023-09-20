import type { Color, HEX } from "@cvet/types";
import { Filter, palette } from "../classes";

/**
 * Generate a complementary color - a 180 degrees hue rotated color (opposite)
 * @param {Color} color A color to find complementary opposite to.
 * @returns {[HEX, HEX]} An array of HEX colors
 */
export function complementary(color: Color): [HEX, HEX] {
  const colorMap = new Filter(color);

  return [palette(color).hex, colorMap.rotateHue(180).hex];
}
