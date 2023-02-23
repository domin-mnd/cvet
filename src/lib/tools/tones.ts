import type { Amount, HEX } from "@cvet/types";
import { Filter } from "../classes/filter";

/**
 * Generate an array of tones from the provided color
 * @param {HEX} color The color used to generate tones
 * @param {number} quantity Amount of tones to generate (includes initial color)
 * @returns {HEX[]} An array of HEX colors
 */
export function tones(color: HEX, quantity: number = 8): HEX[] {
  const colorMap = new Filter(color, "HEX");
  const initialColor = colorMap.color;
  // Find the tone contrast to add color, to get an array, 100 - initial color
  const contrasts = 100 / quantity;

  // Remove the next tone
  // colorMap.contrast(90);

  const colors = Array.from({ length: quantity }, (_, i) => {
    // Reset the instance so that
    // Next element in array
    // Would be contrast 1*n, 2*n, 3*n, ... 100
    colorMap.color = initialColor;
    return colorMap.contrast((contrasts * (i + 1)) as Amount).hex;
  });

  return colors.reverse() as HEX[];
}
