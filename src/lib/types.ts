/** A safe type for a hex color */
export type HEX = `#${string}`; // #000000 ~ #FFFFFF

/** An object with r, g, b keys representing RGB color */
export type RGB = {
  /** Red color value */
  r: number;
  /** Green color value */
  g: number;
  /** Blue color value */
  b: number
};

/** An object with h, s, l keys representing HSL color */
export type HSL = {
  /** Hue color value */
  h: number;
  /** Saturation color value */
  s: number;
  /** Lightness color value */
  l: number
};

/** An object with c, m, y, k keys representing CMYK color */
export type CMYK = {
  /** Cyan color value */
  c: number;
  /** Magenta color value */
  m: number;
  /** Yellow color value */
  y: number;
  /** Black color value */
  k: number
};

/** Names of a color type */
export type ColorType = "HEX" | "RGB" | "HSL" | "CMYK" | "MAP";
/** Any color type */
export type Color = HEX | RGB | HSL | CMYK | ColorMap;
/** A mapped color from the Palette */
export type ColorMap = RGB;

/** A type for enumerating an integer */
export type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

/** A type for finding a range of integers */
export type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>, // A range starting point
  Enumerate<F> // A range ending point, excluding the starting point
>;

/** 0-100% amount used in filters */
export type Amount = IntRange<0, 101>;
/** 0-360 degrees */
export type Degrees = IntRange<0, 361>;