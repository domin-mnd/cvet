import type { HEX } from "@cvet/types";
import { Filter } from "../classes/filter";

/**
 * Generate a square of colors (4 colors) from the provided color
 * @param {HEX} color The color used to generate a square
 * @returns {[HEX, HEX, HEX, HEX]} An array of HEX colors
 */
export function square(color: HEX): [HEX, HEX, HEX, HEX] {
  const colorMap = new Filter(color, "HEX");
  const colors = Array.from({ length: 3 }, () => colorMap.rotateHue(90).hex);

  return [color.toLowerCase(), ...colors] as [HEX, HEX, HEX, HEX];
}
