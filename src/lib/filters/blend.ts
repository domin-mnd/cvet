import { Amount, Hexadecimal, RGB, RGBA } from "@cvet/types";

/**
 * Blends two colors based on a given percentage.
 *
 * @param {RGB | RGBA} first - The first color to blend.
 * @param {RGB | RGBA} second - The second color to blend.
 * @param {Amount} percent - The percentage of the first element to be blended with another.
 * Should be a number between 0 and 100.
 * @return {RGB | RGBA} The blended color.
 */
export function blend(
  first: RGB | RGBA,
  second: RGB | RGBA,
  percent: Amount,
): RGB | RGBA {
  const calcChannel = (channel: keyof RGB): Hexadecimal =>
    (first[channel] * (percent / 100) +
      second[channel] * (1 - percent / 100)) as Hexadecimal;

  return {
    r: calcChannel("r"),
    g: calcChannel("g"),
    b: calcChannel("b"),
    ...("a" in first && { a: first.a }),
  };
}
