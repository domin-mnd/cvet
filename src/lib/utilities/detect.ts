import type { Color, ColorType, HEX } from "@cvet/types";

/**
 * Determines the color model based on the given color value.
 *
 * @param {Color} color - The color value to be detected.
 * @return {Exclude<ColorType, "MAP">} - The model of color detected.
 */
export function detect(color: Color): Exclude<ColorType, "MAP"> {
  if (typeof color === "string" && color.startsWith("#") && color.length < 10)
    return "HEX";
  const nonHex = color as Exclude<Color, HEX>;

  // RGB & RGBA
  if ("r" in nonHex && "g" in nonHex && "b" in nonHex) {
    if ("a" in nonHex) return "RGBA";
    return "RGB";
  }

  // HSL & HSLA
  if ("h" in nonHex && "s" in nonHex && "l" in nonHex) {
    if ("a" in nonHex) return "HSLA";
    return "HSL";
  }

  // CMYK
  if ("c" in nonHex && "m" in nonHex && "y" in nonHex && "k" in nonHex) {
    return "CMYK";
  }

  throw new Error("Invalid color");
}
