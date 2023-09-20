import type { Color, HEX } from "@cvet/types";
import { Filter, palette } from "../classes";

/**
 * Generate an array of analogous colors
 * @param {Color} color The color used as the analogous definition
 * @returns {[HEX, HEX, HEX]} An array of 3 HEX analogous colors
 */
export function analogous(color: Color): [HEX, HEX, HEX] {
  const colorMap = new Filter(color);

  return [
    palette(color).hex,
    colorMap.rotateHue(30).hex,
    colorMap.rotateHue(300).hex,
  ];
}
