import type { Degrees, HEX } from "../types";
import { Filter } from "../classes/filter";

/**
 * Generate a rainbow of colors (7 colors) from the provided color
 * @param {HEX} color The color used to generate a rainbow
 * @returns {[HEX, HEX, HEX, HEX, HEX, HEX, HEX]} An array of HEX colors
 */
export function rainbow(color: HEX): [HEX, HEX, HEX, HEX, HEX, HEX, HEX] {
  const colorMap = new Filter(color, "HEX");
  const degrees = (360 / 7) as Degrees;
  const colors = Array.from(
    { length: 6 },
    () => colorMap.rotateHue(degrees).hex
  );

  return [color.toLowerCase(), ...colors] as [
    HEX,
    HEX,
    HEX,
    HEX,
    HEX,
    HEX,
    HEX
  ];
}
