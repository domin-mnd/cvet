import type { HEX } from "../types";
import { Filter } from "../classes/filter";

/**
 * Generate a complementary color - a 180 degrees hue rotated color (opposite)
 * @param {HEX} color A color to find complementary opposite to.
 * @returns {[HEX, HEX]} An array of HEX colors
 */
export function complementary(color: HEX): [HEX, HEX] {
  const colorMap = new Filter(color, "HEX");

  return [color.toLowerCase() as HEX, colorMap.rotateHue(180).hex];
}
