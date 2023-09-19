import type { HEX, Hexadecimal, RGB, RGBA } from "@cvet/types";

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
