import type { CMYK, Hexadecimal, RGB } from "@cvet/types";

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
