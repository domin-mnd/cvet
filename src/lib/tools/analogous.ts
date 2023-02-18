import type { HEX } from "../types";
import { Filter } from "../classes/filter";

/**
 * Generate an array of analogous colors
 * @param {HEX} color The color used as the analogous definition
 * @returns {[HEX, HEX, HEX]} An array of 3 HEX analogous colors
 */
export function analogous(
  color: HEX
): [HEX, HEX, HEX] {
  const colorMap = new Filter(color, "HEX");

  return [
    color.toLowerCase() as HEX,
    colorMap.rotateHue(30).hex,
    colorMap.rotateHue(300).hex
  ];
}
