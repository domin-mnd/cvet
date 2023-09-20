import type { Color, Degrees, HEX } from "@cvet/types";
import { Filter, palette } from "../classes";

/**
 * Generate a rainbow of colors (7 colors) from the provided color
 * @param {Color} color The color used to generate a rainbow
 * @returns {[HEX, HEX, HEX, HEX, HEX, HEX, HEX]} An array of HEX colors
 */
export function rainbow(color: Color): [HEX, HEX, HEX, HEX, HEX, HEX, HEX] {
  const colorMap = new Filter(color);
  const degrees = (360 / 7) as Degrees;
  const colors = Array.from(
    { length: 6 },
    () => colorMap.rotateHue(degrees).hex,
  );

  return [palette(color).hex, ...colors] as [
    HEX,
    HEX,
    HEX,
    HEX,
    HEX,
    HEX,
    HEX,
  ];
}
