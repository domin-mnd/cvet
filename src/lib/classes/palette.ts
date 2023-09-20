import type {
  Color,
  ColorMap,
  ColorType,
  HEX,
  RGB,
  HSL,
  CMYK,
  HSLA,
  RGBA,
  Hexadecimal,
} from "@cvet/types";
import { cmykToRgb, detect, hexToRgb, hslToRgb, rgbToHsl } from "../utilities";

/**
 * A class that represents a color palette
 * @class Palette
 */
export class Palette {
  private _color: ColorMap;

  /**
   * Create a palette and convert types to MAP (RGB or RGBA)
   * @param {Color} color A color used to create a palette
   * @param {ColorType} [type] A color type used to convert to MAP
   */
  constructor(color: Color, type?: ColorType) {
    const { model } = detect(color);
    if (type && model !== type) throw new Error("Invalid color type provided");
    this._color = this.mapColor(color, type ?? model);
  }

  /**
   * Convert a color to MAP (RGB or RGBA).
   * @param {Color} color A color used to convert to MAP.
   * @param {ColorType} [type] Its type.
   */
  private mapColor(color: Color = this._color, type?: ColorType): ColorMap {
    switch (type) {
      case "HEX":
        return hexToRgb(color as HEX);
      case "RGB":
      case "RGBA":
        return color as ColorMap;
      case "HSL":
        return hslToRgb(color as HSL);
      case "HSLA":
        const { a } = color as HSLA;
        return {
          ...hslToRgb(color as HSL),
          a,
        } as RGBA;
      case "CMYK":
        return cmykToRgb(color as CMYK);
      case "MAP":
        return color as ColorMap;
      default:
        throw new Error("Invalid color type");
    }
  }

  /** Get mapped color. */
  get color(): ColorMap {
    return this._color;
  }

  /** Change mapped color. */
  set color(color: ColorMap) {
    this._color = this.mapColor(color, "MAP");
  }

  /** Get red part of RGB. */
  get red(): Hexadecimal {
    return this._color.r;
  }

  /** Get green part of RGB. */
  get green(): Hexadecimal {
    return this._color.g;
  }

  /** Get blue part of RGB. */
  get blue(): Hexadecimal {
    return this._color.b;
  }

  /** Get alpha opacity of RGBA, will return null if it's RGB. */
  get alpha(): number | null {
    if ("a" in this._color) return this._color.a;
    else return null;
  }

  /** Get HEX from MAP. May include alpha channel if it's MAP is RGBA. */
  get hex(): HEX {
    const r = (this.red | (1 << 8)).toString(16).slice(1);
    const g = (this.green | (1 << 8)).toString(16).slice(1);
    const b = (this.blue | (1 << 8)).toString(16).slice(1);
    const a =
      this.alpha === null
        ? ""
        : ((this.alpha * 2.55) | (1 << 8)).toString(16).slice(1);

    return `#${r}${g}${b}${a}` as HEX;
  }

  /** Get RGB. Slices alpha part if it's a thing. */
  get rgb(): RGB {
    return {
      r: this.red,
      g: this.green,
      b: this.blue,
    };
  }

  /** Get RGBA from MAP. Will return 100 for alpha if not set. */
  get rgba(): RGBA {
    const a = this.alpha === null ? 100 : this.alpha;
    return {
      ...this.color,
      a,
    };
  }

  /** Get HSL from MAP */
  get hsl(): HSL {
    const { r, g, b } = this.color;
    return rgbToHsl(r, g, b); // Can't spread because of getter type.
  }

  /** Get HSLA from MAP. Will return 100 for alpha if not set. */
  get hsla(): HSLA {
    const { r, g, b } = this.color;
    const a = this.alpha === null ? 100 : this.alpha;
    return {
      ...rgbToHsl(r, g, b),
      a,
    };
  }

  /** Get CMYK from MAP. */
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

export const palette = (color: Color, type?: ColorType) => new Palette(color, type);
