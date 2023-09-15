import type { Degrees, HEX } from "@cvet/types";
import { randomColor } from "../utils";
import { Filter } from "../classes/filter";

/**
 * Generate a combination of colors based on a given color.
 * @param {number | undefined} combination An amount of colors to generate
 * @param {HEX | undefined} initialColor The initial color used as the first color in the combination
 * @returns {HEX[]} An array of HEX colors
 */
export function combination(
  combination: number = 2,
  initialColor: HEX = randomColor(),
): HEX[] {
  if (combination <= 0) throw new Error("Combination must be greater than 0");
  if (combination > 360) throw new Error("Combination must be less than 360");

  const degrees = (360 / combination) as Degrees;
  const colorMap = new Filter(initialColor, "HEX");
  const colors = Array.from(
    { length: combination - 1 },
    () => colorMap.rotateHue(degrees).hex,
  );

  return [initialColor.toLowerCase() as HEX, ...colors];
}
