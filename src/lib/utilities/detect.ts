import type {
  CMYK,
  Color,
  ColorType,
  HEX,
  HSL,
  HSLA,
  RGB,
  RGBA,
} from "@cvet/types";

/** Return type for detect method */
type ReturnDetect =
  | {
      model: "HEX";
      color: HEX;
    }
  | {
      model: "RGB";
      color: RGB;
    }
  | {
      model: "RGBA";
      color: RGBA;
    }
  | {
      model: "HSL";
      color: HSL;
    }
  | {
      model: "HSLA";
      color: HSLA;
    }
  | {
      model: "CMYK";
      color: CMYK;
    };

/**
 * Determines the color model based on the given color value.
 *
 * @param {Color} color - The color value to be detected.
 * @return {ReturnDetect} - The model of color detected.
 */
export function detect(color: Color): ReturnDetect {
  if (typeof color === "string" && color.startsWith("#") && color.length < 10) {
    return {
      model: "HEX",
      color: color as HEX,
    };
  }
  const nonHex = color as Exclude<Color, HEX>;

  // RGB & RGBA
  if ("r" in nonHex && "g" in nonHex && "b" in nonHex) {
    if ("a" in nonHex)
      return {
        model: "RGBA",
        color: color as RGBA,
      };
    return {
      model: "RGB",
      color: color as RGB,
    };
  }

  // HSL & HSLA
  if ("h" in nonHex && "s" in nonHex && "l" in nonHex) {
    if ("a" in nonHex)
      return {
        model: "HSLA",
        color: color as HSLA,
      };
    return {
      model: "HSL",
      color: color as HSL,
    };
  }

  // CMYK
  if ("c" in nonHex && "m" in nonHex && "y" in nonHex && "k" in nonHex) {
    return {
      model: "CMYK",
      color: color as CMYK,
    };
  }

  throw new Error("Invalid color");
}
