import {
  padHEX,
  randomColor,
  hueToRgb,
  hexToRgb,
  hslToRgb,
  cmykToRgb,
  luminosity,
} from "../src/lib/utils";

test("PadHEX", () => {
  // 0xFF
  expect(padHEX("e")).toBe("0e");

  // 0-10
  expect(padHEX(0)).toBe("00");

  // 00
  expect(padHEX(0o0)).toBe("00");
});

test("randomColor", () => {
  for (let i = 0; i < 100; i++) {
    expect(randomColor()).toHaveLength(7);
  }
});

test("hueToRgb", () => {
  expect(hueToRgb(1, 1, 1)).toBe(1);
});

test("hexToRgb", () => {
  expect(hexToRgb("#FF0000")).toStrictEqual({ r: 255, g: 0, b: 0 });
});

test("hslToRgb", () => {
  expect(hslToRgb({ h: 0, s: 100, l: 50 })).toStrictEqual({
    r: 255,
    g: 0,
    b: 0,
  });
});

test("cmykToRgb", () => {
  expect(cmykToRgb({ c: 0, m: 100, y: 100, k: 0 })).toStrictEqual({
    r: 255,
    g: 0,
    b: 0,
  });
});

test("luminosity", () => {
  expect(luminosity({ r: 255, g: 0, b: 0 })).toBe(0.2126);
});
