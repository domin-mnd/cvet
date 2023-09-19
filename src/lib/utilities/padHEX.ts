/**
 * Add 00 pads for RGB parts of HEX color.
 * @deprecated Soon to be removed. Instead use number shifting: `(x | 1 << 8).toString(16).slice(1);`.
 */
export function padHEX(num: number | string, size: number = 2): string {
  let s = num.toString();
  while (s.length < size) s = "0" + s;
  return s;
}
