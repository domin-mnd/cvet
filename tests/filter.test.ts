import { Filter } from "../src/index";

test("Filter class instance", () => {
  const filter = new Filter("#FF0000", "HEX");

  expect(filter).toBeInstanceOf(Filter);
});

test("Invert filter", () => {
  let filter = new Filter("#00FF00", "HEX");

  expect(filter.invert().hex).toBe("#ff00ff");

  // with alpha channel
  filter = new Filter("#00FF0033", "HEX");

  expect(filter.invert().hex).toBe("#ff00ff33");
});

test("Grayscale filter", () => {
  let filter = new Filter("#00FF00", "HEX");

  expect(filter.grayscale(0).hex).toBe("#969696");

  filter.color = { r: 0, g: 255, b: 0 };
  expect(filter.grayscale(100).hex).toBe("#00ff00");

  // with alpha channel
  filter = new Filter("#00FF0033", "HEX");

  expect(filter.grayscale(0).hex).toBe("#96969633");

  filter.color = { r: 0, g: 255, b: 0, a: 20 };
  expect(filter.grayscale(100).hex).toBe("#00ff0033");
});

test("Contrast filter", () => {
  let filter = new Filter("#00FF00", "HEX");

  expect(filter.contrast(0).hex).toBe("#808080");

  filter.color = { r: 0, g: 255, b: 0 };
  expect(filter.contrast(100).hex).toBe("#00ff00");

  // with alpha channel
  filter = new Filter("#00FF0033", "HEX");

  expect(filter.contrast(0).hex).toBe("#80808033");

  filter.color = { r: 0, g: 255, b: 0, a: 20 };
  expect(filter.contrast(100).hex).toBe("#00ff0033");
});

test("Lighten/Darken filters", () => {
  let filter = new Filter("#00FF00", "HEX");

  // Lighten with instance reset
  expect(filter.lighten(0).hex).toBe("#00ff00");

  filter.color = { r: 0, g: 255, b: 0 };
  expect(filter.lighten(100).hex).toBe("#ffffff");

  // Darken with instance reset
  filter.color = { r: 0, g: 255, b: 0 };
  expect(filter.darken(0).hex).toBe("#00ff00");

  filter.color = { r: 0, g: 255, b: 0 };
  expect(filter.darken(100).hex).toBe("#000000");

  // with alpha channel
  filter = new Filter("#00FF0033", "HEX");

  // Lighten with instance reset
  expect(filter.lighten(0).hex).toBe("#00ff0033");

  filter.color = { r: 0, g: 255, b: 0, a: 20 };
  expect(filter.lighten(100).hex).toBe("#ffffff33");

  // Darken with instance reset
  filter.color = { r: 0, g: 255, b: 0, a: 20 };
  expect(filter.darken(0).hex).toBe("#00ff0033");

  filter.color = { r: 0, g: 255, b: 0, a: 20 };
  expect(filter.darken(100).hex).toBe("#00000033");
});

test("Rotate hue filter", () => {
  let filter = new Filter("#00FF00", "HEX");

  expect(filter.rotateHue(0).hex).toBe("#00ff00");

  filter.color = { r: 0, g: 255, b: 0 };
  expect(filter.rotateHue(120).hex).toBe("#0000ff");

  filter.color = { r: 0, g: 255, b: 0 };
  expect(filter.rotateHue(240).hex).toBe("#ff0000");

  // with alpha channel
  filter = new Filter("#00FF0033", "HEX");

  expect(filter.rotateHue(0).hex).toBe("#00ff0033");

  filter.color = { r: 0, g: 255, b: 0, a: 20 };
  expect(filter.rotateHue(120).hex).toBe("#0000ff33");

  filter.color = { r: 0, g: 255, b: 0, a: 20 };
  expect(filter.rotateHue(240).hex).toBe("#ff000033");
});

test("Saturate filter", () => {
  let filter = new Filter("#00FF00", "HEX");

  expect(filter.saturate(0).hex).toBe("#808080");

  filter.color = { r: 0, g: 255, b: 0 };
  expect(filter.saturate(100).hex).toBe("#00ff00");

  // with alpha channel
  filter = new Filter("#00FF0033", "HEX");

  expect(filter.saturate(0).hex).toBe("#80808033");

  filter.color = { r: 0, g: 255, b: 0, a: 20 };
  expect(filter.saturate(100).hex).toBe("#00ff0033");
});

test("Blend filter", () => {
  let filter = new Filter("#00FF00", "HEX");
  let anotherColor = new Filter("#FF0000", "HEX").rgb;

  expect(filter.blend(anotherColor, 0).hex).toBe("#ff0000");

  filter.color = { r: 0, g: 255, b: 0 };
  expect(filter.blend(anotherColor, 50).hex).toBe("#7f7f00");

  filter.color = { r: 0, g: 255, b: 0 };
  expect(filter.blend(anotherColor, 100).hex).toBe("#00ff00");

  // with alpha channel
  filter = new Filter("#00FF0033", "HEX");
  anotherColor = new Filter("#FF000033", "HEX").rgba;

  expect(filter.blend(anotherColor, 0).hex).toBe("#ff000033");

  filter.color = { r: 0, g: 255, b: 0, a: 20 };
  expect(filter.blend(anotherColor, 50).hex).toBe("#7f7f0033");

  filter.color = { r: 0, g: 255, b: 0, a: 20 };
  expect(filter.blend(anotherColor, 100).hex).toBe("#00ff0033");
});
