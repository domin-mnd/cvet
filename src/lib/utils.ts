import type { HEX, RGB, HSL, CMYK, RGBA, Color } from "@cvet/types";
import type { Hexadecimal } from "../../types";

/**
 * Add 00 pads for RGB parts of HEX color.
 * @deprecated Soon to be removed. Instead use number shifting: `(x | 1 << 8).toString(16).slice(1);`.
 */
export function padHEX(num: number | string, size: number = 2): string {
  let s = num.toString();
  while (s.length < size) s = "0" + s;
  return s;
}

/** Generate a random HEX color. */
export const randomColor = () => {
  const random = padHEX((((1 << 24) * Math.random()) | 0).toString(16), 6);
  return `#${random}` as HEX;
};

/**
 * Convert HUE to RGB.
 * @param {number} p
 * @param {number} q
 * @param {number} t
 * @returns {number} A number representing RGB color.
 */
export function hueToRgb(p: number, q: number, t: number): number {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

/**
 * Convert HEX color to RGB or RGBA.
 * @param {HEX} hex An HEX color used to convert to RGB or RGBA.
 * @returns {RGB} An RGB color.
 */
export function hexToRgb(hex: HEX): RGB | RGBA {
  const r = parseInt(hex.slice(1, 3), 16) as Hexadecimal;
  const g = parseInt(hex.slice(3, 5), 16) as Hexadecimal;
  const b = parseInt(hex.slice(5, 7), 16) as Hexadecimal;
  const a = hex.slice(7, 9) ? parseInt(hex.slice(7, 9), 16) / 2.55 : null;
  return { r, g, b, ...(a !== null && { a }) };
}

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

/**
 * Convert an CMYK color to RGB.
 * @param {CMYK} cmyk An CMYK color used to convert to RGB.
 * @returns {RGB} An RGB color.
 */
export function cmykToRgb(cmyk: CMYK): RGB {
  const c = cmyk.c;
  const m = cmyk.m;
  const y = cmyk.y;
  const k = cmyk.k;

  const kr = (100 - k) / 100;

  const r = (255 * ((100 - c) / 100) * kr) as Hexadecimal;
  const g = (255 * ((100 - m) / 100) * kr) as Hexadecimal;
  const b = (255 * ((100 - y) / 100) * kr) as Hexadecimal;

  return { r, g, b };
}

/**
 * Convert RGB color model to HSL.
 * @param {Hexadecimal} r Red value 0-255.
 * @param {Hexadecimal} g Green value 0-255.
 * @param {Hexadecimal} b Blue value 0-255.
 * @returns {HSL} HSL color
 */
export function rgbToHsl(r: Hexadecimal, g: Hexadecimal, b: Hexadecimal): HSL {
  r /= 255;
  g /= 255;
  b /= 255;
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

/**
 * Find the luminosity of a color.
 * @param {RGB} rgb An RGB color used to find luminosity.
 * @returns {number} The luminosity of the color.
 */
export function luminosity(rgb: RGB): number {
  const a = [rgb.r, rgb.g, rgb.b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

/**
 * Converts a color object to a string representation for css purposes.
 * Unlike stringifying manually, this utility rounds the decimal.
 *
 * @param {Color} color - The color object to be converted.
 * @return {string} The string representation of the color.
 */
export function stringify<T extends Color = Color>(color: T): string {
  // HEX is already a string
  if (typeof color === "string") return color.toLowerCase();
  const nonHex = color as Exclude<Color, HEX>;

  // RGB & RGBA
  if ("r" in nonHex && "g" in nonHex && "b" in nonHex) {
    // "+" removes trailing 0 if the value has no decimal
    const r = +nonHex.r.toFixed(1),
      g = +nonHex.g.toFixed(1),
      b = +nonHex.b.toFixed(1);
    if ("a" in nonHex) {
      return `rgba(${r}, ${g}, ${b}, ${nonHex.a / 100})`;
    }
    return `rgb(${r}, ${g}, ${b})`;
  }

  // HSL & HSLA
  if ("h" in nonHex && "s" in nonHex && "l" in nonHex) {
    const h = +nonHex.h.toFixed(1),
      s = +nonHex.s.toFixed(1),
      l = +nonHex.l.toFixed(1);
    if ("a" in nonHex) {
      return `hsla(${h}, ${s}%, ${l}%, ${nonHex.a / 100})`;
    }
    return `hsl(${h}, ${s}%, ${l}%)`;
  }

  // CMYK
  if ("c" in nonHex && "m" in nonHex && "y" in nonHex && "k" in nonHex) {
    const c = +nonHex.c.toFixed(1),
      m = +nonHex.m.toFixed(1),
      y = +nonHex.y.toFixed(1),
      k = +nonHex.k.toFixed(1);
    return `cmyk(${c}%, ${m}%, ${y}%, ${k}%)`;
  }

  throw new Error("Invalid color");
}
