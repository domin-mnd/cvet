import type { Color, HEX } from "@cvet/types";
import { Filter, palette } from "../classes";

/**
 * Generate a square of colors (4 colors) from the provided color
 * @param {Color} color The color used to generate a square
 * @returns {[HEX, HEX, HEX, HEX]} An array of HEX colors
 */
export function square(color: Color): [HEX, HEX, HEX, HEX] {
  const colorMap = new Filter(color);
  const colors = Array.from({ length: 3 }, () => colorMap.rotateHue(90).hex);

  return [palette(color).hex, ...colors] as [HEX, HEX, HEX, HEX];
}
