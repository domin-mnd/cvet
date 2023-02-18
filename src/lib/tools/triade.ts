import type { HEX } from "../types";
import { Filter } from "../classes/filter";

/**
 * Generate a triade of colors (3 colors) from the provided color
 * @param {HEX} color The color used to generate a triade
 * @returns {[HEX, HEX, HEX]} An array of HEX colors
 */
export function triade(color: HEX): [HEX, HEX, HEX] {
  const colorMap = new Filter(color, "HEX");
  const colors = Array.from({ length: 2 }, () => colorMap.rotateHue(120).hex);

  return [color.toLowerCase(), ...colors] as [HEX, HEX, HEX];
}
