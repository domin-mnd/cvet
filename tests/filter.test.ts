import { Filter } from "../src/index";

test("Filter class instance", () => {
  const filter = new Filter("#FF0000", "HEX");

  expect(filter).toBeInstanceOf(Filter);
});

test("Invert filter", () => {
  const filter = new Filter("#00FF00", "HEX");

  expect(filter.invert().hex).toBe("#ff00ff");
});

test("Grayscale filter", () => {
  const filter = new Filter("#00FF00", "HEX");

  expect(filter.grayscale(0).hex).toBe("#969696");

  filter.color = { r: 0, g: 255, b: 0 };
  expect(filter.grayscale(100).hex).toBe("#00ff00");
});

test("Contrast filter", () => {
  const filter = new Filter("#00FF00", "HEX");

  expect(filter.contrast(0).hex).toBe("#808080");

  filter.color = { r: 0, g: 255, b: 0 };
  expect(filter.contrast(100).hex).toBe("#00ff00");
});

test("Lighten/Darken filters", () => {
  const filter = new Filter("#00FF00", "HEX");

  // Lighten with instance reset
  expect(filter.lighten(0).hex).toBe("#00ff00");

  filter.color = { r: 0, g: 255, b: 0 };
  expect(filter.lighten(100).hex).toBe("#ffffff");


  // Darken with instance reset
  filter.color = { r: 0, g: 255, b: 0 };
  expect(filter.darken(0).hex).toBe("#00ff00");

  filter.color = { r: 0, g: 255, b: 0 };
  expect(filter.darken(100).hex).toBe("#000000");
});

test("Rotate hue filter", () => {
  const filter = new Filter("#00FF00", "HEX");

  expect(filter.rotateHue(0).hex).toBe("#00ff00");

  filter.color = { r: 0, g: 255, b: 0 };
  expect(filter.rotateHue(120).hex).toBe("#0000ff");

  filter.color = { r: 0, g: 255, b: 0 };
  expect(filter.rotateHue(240).hex).toBe("#ff0000");
});

  

test("Saturate filter", () => {
  const filter = new Filter("#00FF00", "HEX");

  expect(filter.saturate(0).hex).toBe("#7f7f7f");

  filter.color = { r: 0, g: 255, b: 0 };
  expect(filter.saturate(100).hex).toBe("#00ff00");
});