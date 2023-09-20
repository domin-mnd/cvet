import { Palette } from "../src";
import {
  padHEX,
  randomColor,
  hueToRgb,
  hexToRgb,
  hslToRgb,
  cmykToRgb,
  luminosity,
  stringify,
  detect,
} from "../src/lib/utilities";

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

test("stringify", () => {
  expect(stringify("#FF0000")).toBe("#ff0000");
  expect(stringify({ r: 255, g: 0, b: 0 })).toBe("rgb(255, 0, 0)");
  expect(stringify({ r: 255, g: 0, b: 0, a: 20 })).toBe("rgba(255, 0, 0, 0.2)");
  expect(stringify({ h: 0, s: 100, l: 50 })).toBe("hsl(0, 100%, 50%)");
  expect(stringify({ h: 0, s: 100, l: 50, a: 20 })).toBe(
    "hsla(0, 100%, 50%, 0.2)",
  );
  expect(stringify({ c: 0, m: 100, y: 100, k: 0 })).toBe(
    "cmyk(0%, 100%, 100%, 0%)",
  );
});

test("detect", () => {
  const color = new Palette("#FF0000", "HEX");

  expect(detect(color.hex)).toStrictEqual({
    model: "HEX",
    color: color.hex,
  });

  expect(detect(color.rgb)).toStrictEqual({
    model: "RGB",
    color: color.rgb,
  });

  expect(detect(color.rgba)).toStrictEqual({
    model: "RGBA",
    color: color.rgba,
  });

  expect(detect(color.hsl)).toStrictEqual({
    model: "HSL",
    color: color.hsl,
  });

  expect(detect(color.hsla)).toStrictEqual({
    model: "HSLA",
    color: color.hsla,
  });

  expect(detect(color.cmyk)).toStrictEqual({
    model: "CMYK",
    color: color.cmyk,
  });
});
