import type { Color, HEX } from "@cvet/types";
import { hslToRgb } from "../utilities";
import { Filter, palette } from "../classes";

/**
 * Generate an array of tints from the provided color
 * @param {Color} color The color used to generate tints
 * @param {number} quantity Amount of tints to generate (includes initial color)
 * @returns {HEX[]} An array of HEX colors
 */
export function tints(color: Color, quantity: number = 8): HEX[] {
  const colorMap = new Filter(color);
  // Find the tint light to add color, to get an array
  // Remove 1 from quantity to not get complete white color
  // That shifts palette to center
  const light = (100 - colorMap.hsl.l) / (quantity + 1);

  // Remove the next tint
  // colorMap.color = hslToRgb({ ...colorMap.hsl, l: colorMap.hsl.l + light });

  const colors = Array.from({ length: quantity - 1 }, () => {
    // Adjust the tint using addition instead of lighten's multiplication
    const hsl = colorMap.hsl,
      adjust = hsl.l + light;

    colorMap.color = {
      ...hslToRgb({ ...hsl, l: adjust > 100 ? 100 : adjust }),
      ...(colorMap.alpha !== null && { a: colorMap.alpha }),
    };
    return colorMap.hex;
  });

  return [palette(color).hex, ...colors] as HEX[];
}
