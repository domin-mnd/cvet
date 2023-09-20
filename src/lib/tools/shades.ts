import type { Color, HEX } from "@cvet/types";
import { hslToRgb } from "../utilities";
import { Filter, palette } from "../classes";

/**
 * Generate an array of shades from the provided color
 * @param {Color} color The color used to generate shades
 * @param {number} quantity Amount of shades to generate (includes initial color)
 * @returns {HEX[]} An array of HEX colors
 */
export function shades(color: Color, quantity: number = 8): HEX[] {
  const colorMap = new Filter(color);
  // Find the shade light to subtract color, to get octad
  const light = colorMap.hsl.l / (quantity + 1);

  // Remove the next shade
  // colorMap.color = hslToRgb({ ...colorMap.hsl, l: colorMap.hsl.l - light });

  const colors = Array.from({ length: quantity - 1 }, () => {
    // Adjust the shade using addition instead of darken's multiplication
    const hsl = colorMap.hsl,
      adjust = hsl.l - light;

    colorMap.color = {
      ...hslToRgb({ ...hsl, l: adjust < 0 ? 0 : adjust }),
      ...(colorMap.alpha !== null && { a: colorMap.alpha }),
    };
    return colorMap.hex;
  });

  return [palette(color).hex, ...colors] as HEX[];
}
