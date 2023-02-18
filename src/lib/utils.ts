import type { HEX, RGB, HSL, CMYK } from "./types";

/** Add 00 pads for RGB parts of HEX color */
export function padHEX(num: number | string, size: number = 2): string {
  let s = num.toString();
  while (s.length < size) s = "0" + s;
  return s;
}

/** Generate a random HEX color */
export const randomColor = () => {
  const random = padHEX(((1<<24)*Math.random() | 0).toString(16), 6);
  return `#${random}` as HEX;
}

/**
 * Convert HUE to RGB
 * @param {number} p
 * @param {number} q
 * @param {number} t
 * @returns {number} A number representing RGB color
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
 * Convert HEX color to RGB
 * @param {HEX} hex An HEX color used to convert to RGB
 * @returns {RGB} An RGB color
 */
export function hexToRgb(hex: HEX): RGB {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

/** 
 * Convert HSL color to RGB
 * @param {HSL} hsl An HSL color used to convert to RGB
 * @returns {RGB} An RGB color
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
    r: Math.floor(r * 255),
    g: Math.floor(g * 255),
    b: Math.floor(b * 255)
  };
}

/** 
 * Convert an CMYK color to RGB
 * @param {CMYK} cmyk An CMYK color used to convert to RGB
 * @returns {RGB} An RGB color
 */
export function cmykToRgb(cmyk: CMYK): RGB {
  const c = cmyk.c;
  const m = cmyk.m;
  const y = cmyk.y;
  const k = cmyk.k;

  const kr = (100 - k) / 100;

  const r = 255 * ((100 - c) / 100) * kr;
  const g = 255 * ((100 - m) / 100) * kr;
  const b = 255 * ((100 - y) / 100) * kr;

  return { r, g, b };
}

/**
 * Find the luminosity of a color
 * @param {RGB} rgb An RGB color used to find luminosity
 * @returns {number} The luminosity of the color
 */
export function luminosity(rgb: RGB): number {
  const a = [rgb.r, rgb.g, rgb.b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}