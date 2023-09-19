import type { HSL, Hexadecimal, RGB } from "@cvet/types";
import { hueToRgb } from "./hueToRgb";

/**
 * Convert HSL color to RGB.
 * @param {HSL} hsl An HSL color used to convert to RGB.
 * @returns {RGB} An RGB color.
 */
export function hslToRgb(hsl: HSL): RGB {
  let r, g, b;

  const h = hsl.h / 360;
  const s = hsl.s / 100;
  const l = hsl.l / 100;

  if (s === 0) {
    r = g = b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hueToRgb(p, q, h + 1 / 3);
    g = hueToRgb(p, q, h);
    b = hueToRgb(p, q, h - 1 / 3);
  }

  return {
    r: Math.round(r * 255) as Hexadecimal,
    g: Math.round(g * 255) as Hexadecimal,
    b: Math.round(b * 255) as Hexadecimal,
  };
}
