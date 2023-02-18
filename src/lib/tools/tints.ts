import type { HEX } from "../types";
import { Filter } from "../classes/filter";
import { hslToRgb } from "../utils";

/**
 * Generate an octad of tints (8 colors) from the provided color
 * @param {HEX} color The color used to generate tints
 * @returns {[HEX, HEX, HEX, HEX, HEX, HEX, HEX, HEX]} An array of HEX colors
 */
export function tints(color: HEX): [HEX, HEX, HEX, HEX, HEX, HEX, HEX, HEX] {
  const colorMap = new Filter(color, "HEX");
  // Find the tint light to add color, to get octad
  const light = (100 - colorMap.hsl.l) / 10;

  // Remove the next tint
  colorMap.color = hslToRgb({ ...colorMap.hsl, l: colorMap.hsl.l + light });

  const colors = Array.from({ length: 8 }, () => {
    // Adjust the tint using addition instead of lighten's multiplication
    const hsl = colorMap.hsl,
      adjust = hsl.l + light;

    colorMap.color = hslToRgb({ ...hsl, l: adjust > 100 ? 100 : adjust });
    return colorMap.hex;
  });

  return colors as [HEX, HEX, HEX, HEX, HEX, HEX, HEX, HEX];
}
