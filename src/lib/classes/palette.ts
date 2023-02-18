import type { Color, ColorMap, ColorType, HEX, RGB, HSL, CMYK } from "../types";
import { cmykToRgb, hexToRgb, hslToRgb, padHEX } from "../utils";

/**
 * A class that represents a color palette
 * @class Palette
 */
export class Palette {
  private _color: ColorMap;

  /**
   * Create a palette and convert types to MAP (RGB)
   * @param {Color} color A color used to create a palette
   * @param {ColorType} type A color type used to convert to MAP
   */
  constructor(color: Color, type: ColorType) {
    this._color = this.mapColor(color, type);
  }

  /**
   * Convert a color to MAP (RGB)
   * @param {Color} color A color used to convert to MAP
   * @param {ColorType} type Its type
   */
  private mapColor(color: Color = this._color, type: ColorType): ColorMap {
    switch (type) {
      case "HEX":
        return hexToRgb(color as HEX);
      case "RGB":
        return color as ColorMap;
      case "HSL":
        return hslToRgb(color as HSL);
      case "CMYK":
        return cmykToRgb(color as CMYK);
      case "MAP":
        return color as ColorMap;
      default:
        throw new Error("Invalid color type");
    }
  }

  /** Get mapped color */
  get color(): ColorMap {
    return this._color;
  }

  /** Change mapped color */
  set color(color: ColorMap) {
    this._color = this.mapColor(color, "MAP");
  }

  /** Get red part of RGB */
  get red(): number {
    return this._color.r;
  }

  /** Get green part of RGB */
  get green(): number {
    return this._color.g;
  }

  /** Get blue part of RGB */
  get blue(): number {
    return this._color.b;
  }

  /** Get HEX from MAP */
  get hex(): HEX {
    const r = padHEX(Math.round(this.color.r).toString(16));
    const g = padHEX(Math.round(this.color.g).toString(16));
    const b = padHEX(Math.round(this.color.b).toString(16));

    return `#${r}${g}${b}` as HEX;
  }

  /** Get RGB */
  get rgb(): RGB {
    return this.color;
  }

  /** Get HSL from MAP */
  get hsl(): HSL {
    const r = this.color.r / 255;
    const g = this.color.g / 255;
    const b = this.color.b / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    let l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    // Convert to percentage
    h *= 360;
    s *= 100;
    l *= 100;

    return { h, s, l };
  }

  /** Get CMYK from MAP */
  get cmyk(): CMYK {
    const r = this.color.r / 255;
    const g = this.color.g / 255;
    const b = this.color.b / 255;

    const k = (1 - Math.max(r, g, b)) * 100;
    const c = ((1 - r - k) / (1 - k)) * 100;
    const m = ((1 - g - k) / (1 - k)) * 100;
    const y = ((1 - b - k) / (1 - k)) * 100;

    return { c, m, y, k };
  }
}
