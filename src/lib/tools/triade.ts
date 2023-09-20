import type { Color, HEX } from "@cvet/types";
import { Filter, palette } from "../classes";

/**
 * Generate a triade of colors (3 colors) from the provided color
 * @param {Color} color The color used to generate a triade
 * @returns {[HEX, HEX, HEX]} An array of HEX colors
 */
export function triade(color: Color): [HEX, HEX, HEX] {
  const colorMap = new Filter(color);
  const colors = Array.from({ length: 2 }, () => colorMap.rotateHue(120).hex);

  return [palette(color).hex, ...colors] as [HEX, HEX, HEX];
}
