import type { Amount, HEX } from "../types";
import { Filter } from "../classes/filter";

/**
 * Generate an octad of tones (8 colors) from the provided color
 * @param {HEX} color The color used to generate tones
 * @returns {[HEX, HEX, HEX, HEX, HEX, HEX, HEX, HEX]} An array of HEX colors
 */
export function tones(color: HEX): [HEX, HEX, HEX, HEX, HEX, HEX, HEX, HEX] {
  const colorMap = new Filter(color, "HEX");
  const initialColor = colorMap.color;

  // Remove the next tone
  colorMap.contrast(90);

  const colors = Array.from({ length: 8 }, (_, i) => {
    // Reset the instance so that
    // Next element in array
    // Would be contrast 10, 20, 30, ... 80
    colorMap.color = initialColor;
    return colorMap.contrast((10 * (i + 1)) as Amount).hex;
  });

  return colors.reverse() as [HEX, HEX, HEX, HEX, HEX, HEX, HEX, HEX];
}
