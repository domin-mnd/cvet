import { Palette } from "../src/index";

test("Palette class instance", () => {
  const palette = new Palette("#FF0000", "HEX");

  // Check the instance
  expect(palette).toBeInstanceOf(Palette);

  palette.color = { r: 0, g: 255, b: 0 };
  expect(palette.hex).toBe("#00ff00");
});

test("Color conversion", () => {
  const palette = new Palette("#FF0000", "HEX");

  expect(palette.hex).toBe("#ff0000");
  expect(palette.rgb).toStrictEqual({ r: 255, g: 0, b: 0 });
  expect(palette.hsl).toStrictEqual({ h: 0, s: 100, l: 50 });
  expect(palette.cmyk).toStrictEqual({ c: 0, m: 100, y: 100, k: 0 });
});

test("Alpha color conversion (HEX)", () => {
  const palette = new Palette("#FF000033", "HEX");

  expect(palette.hex).toBe("#ff000033");
  expect(palette.rgb).toStrictEqual({ r: 255, g: 0, b: 0 });
  expect(palette.rgba).toStrictEqual({ r: 255, g: 0, b: 0, a: 20 });
  expect(palette.hsl).toStrictEqual({ h: 0, s: 100, l: 50 });
  expect(palette.hsla).toStrictEqual({ h: 0, s: 100, l: 50, a: 20 });
  expect(palette.cmyk).toStrictEqual({ c: 0, m: 100, y: 100, k: 0 });
});

test("Alpha color conversion (HSLA)", () => {
  const palette = new Palette({ h: 0, s: 100, l: 50, a: 20 }, "HSLA");

  expect(palette.hex).toBe("#ff000033");
  expect(palette.rgb).toStrictEqual({ r: 255, g: 0, b: 0 });
  expect(palette.rgba).toStrictEqual({ r: 255, g: 0, b: 0, a: 20 });
  expect(palette.hsl).toStrictEqual({ h: 0, s: 100, l: 50 });
  expect(palette.hsla).toStrictEqual({ h: 0, s: 100, l: 50, a: 20 });
  expect(palette.cmyk).toStrictEqual({ c: 0, m: 100, y: 100, k: 0 });
});

test("Getters", () => {
  const palette = new Palette("#FF0000", "HEX");

  expect(palette.red).toBe(255);
  expect(palette.green).toBe(0);
  expect(palette.blue).toBe(0);
  expect(palette.alpha).toBe(null);
  expect(palette.color).toStrictEqual({ r: 255, g: 0, b: 0 });
});
