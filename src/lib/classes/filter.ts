import { Amount, Color, ColorType, Degrees } from "@cvet/types";
import {
  contrast,
  grayscale,
  lighten,
  invert,
  rotateHue,
  saturate,
  darken,
} from "../filters/index";
import { Palette } from "./palette";

/**
 * A filter class (css filters) that can be used to apply filters to a color.
 * @class Filter
 * @extends Palette
 */
export class Filter extends Palette {
  /**
   * Creates an instance of Filter.
   * @param {Color} color A color that is going to be mapped
   * @param {ColorType} type Color type used for the color parameter
   */
  constructor(color: Color, type: ColorType) {
    super(color, type);
  }

  /**
   * Adjust the contrast of a color by a given amount.
   * @param {Amount} amount The amount to adjust the contrast by. 0-100%
   */
  contrast(amount: number): Filter {
    this.color = contrast(this.color, amount);
    return this;
  }

  /**
   * Adjust the grayscale of a color by a given amount.
   * @param {Amount} amount The amount to adjust the grayscale by. 0-100%
   */
  grayscale(amount: Amount): Filter {
    this.color = grayscale(this.color, amount);
    return this;
  }

  /**
   * Invert a color.
   */
  invert(): Filter {
    this.color = invert(this.color);
    return this;
  }

  /**
   * Lighten a color by a given amount.
   * @param {Amount} amount The amount to lighten the color by. 0-100%
   */
  lighten(amount: Amount): Filter {
    this.color = lighten(this.alpha === null ? this.hsl : this.hsla, amount);
    return this;
  }

  /**
   * Darken a color by a given amount.
   * @param {Amount} amount The amount to darken the color by. 0-100%
   */
  darken(amount: Amount): Filter {
    this.color = darken(this.alpha === null ? this.hsl : this.hsla, amount);
    return this;
  }

  /**
   * Rotate the hue of a color by a given amount.
   * @param {Degrees} degrees The amount to rotate the hue by. 0-360
   */
  rotateHue(degrees: Degrees): Filter {
    this.color = rotateHue(this.alpha === null ? this.hsl : this.hsla, degrees);
    return this;
  }

  /**
   * Saturate a color by a given amount.
   * @param {Amount} amount The amount to saturate the color by. 0-100%
   */
  saturate(amount: Amount): Filter {
    this.color = saturate(this.alpha === null ? this.hsl : this.hsla, amount);
    return this;
  }
}
