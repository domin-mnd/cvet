import type { Amount, Color, Hexadecimal, RGB, RGBA } from "@cvet/types";
import { Palette } from "../classes";

/**
 * Blends two colors based on a given percentage.
 *
 * @param {Color} first - The first color to blend.
 * @param {Color} second - The second color to blend.
 * @param {Amount} percent - The percentage of the first element to be blended with another.
 * Should be a number between 0 and 100.
 * @return {RGB | RGBA} The blended color.
 */
export function blend(
  first: Color,
  second: Color,
  percent: Amount,
): RGB | RGBA {
  const firstPalette = new Palette(first),
    firstColor = firstPalette.rgb;
  const secondPalette = new Palette(second),
    secondColor = secondPalette.rgb;

  const calcChannel = (channel: keyof RGB): Hexadecimal =>
    (firstColor[channel] * (percent / 100) +
      secondColor[channel] * (1 - percent / 100)) as Hexadecimal;

  return {
    r: calcChannel("r"),
    g: calcChannel("g"),
    b: calcChannel("b"),
    ...(firstPalette.alpha !== null && { a: firstPalette.alpha }),
  };
}
