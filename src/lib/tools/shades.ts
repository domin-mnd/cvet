import type { HEX } from "../types";
import { Filter } from "../classes/filter";
import { hslToRgb } from "../utils";

/**
 * Generate an octad of shades (8 colors) from the provided color
 * @param {HEX} color The color used to generate shades
 * @returns {[HEX, HEX, HEX, HEX, HEX, HEX, HEX, HEX]} An array of HEX colors
 */
export function shades(color: HEX): [HEX, HEX, HEX, HEX, HEX, HEX, HEX, HEX] {
  const colorMap = new Filter(color, "HEX");
  // Find the shade light to subtract color, to get octad
  const light = colorMap.hsl.l / 10;

  // Remove the next shade
  colorMap.color = hslToRgb({ ...colorMap.hsl, l: colorMap.hsl.l - light });

  const colors = Array.from({ length: 8 }, () => {
    // Adjust the shade using addition instead of darken's multiplication
    const hsl = colorMap.hsl,
      adjust = hsl.l - light;

    colorMap.color = hslToRgb({ ...hsl, l: adjust < 0 ? 0 : adjust });
    return colorMap.hex;
  });

  return colors as [HEX, HEX, HEX, HEX, HEX, HEX, HEX, HEX];
}
