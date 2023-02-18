import {
  analogous,
  combination,
  complementary,
  rainbow,
  shades,
  square,
  tints,
  tones,
  triade,
} from "../src/index";

test("Combination", () => {
  expect(combination(3, "#FF0000")).toStrictEqual([
    "#ff0000",
    "#00ff00",
    "#0000ff",
  ]);
});

test("Analogous", () => {
  expect(analogous("#62C62C")).toStrictEqual(["#62c62c", "#2cc643", "#afc62c"]);
});

test("Complementary", () => {
  expect(complementary("#62C62C")).toStrictEqual(["#62c62c", "#902cc6"]);
});

test("Rainbow", () => {
  expect(rainbow("#62C62C")).toStrictEqual([
    "#62c62c",
    "#2cc67a",
    "#2c8ec6",
    "#4e2cc6",
    "#c62cba",
    "#c62c36",
    "#c6a62c",
  ]);
});

test("Shades", () => {
  expect(shades("#62C62C")).toStrictEqual([
    "#4e9e24",
    "#448a20",
    "#3a761b",
    "#306216",
    "#264e12",
    "#1c3a0d",
    "#122609",
    "#091204",
  ]);
});

test("Square", () => {
  expect(square("#62C62C")).toStrictEqual([
    "#62c62c",
    "#2cafc6",
    "#902cc6",
    "#c6432c",
  ]);
});

test("Tints", () => {
  expect(tints("#62C62C")).toStrictEqual([
    "#7fd850",
    "#8fdd66",
    "#9fe27c",
    "#afe792",
    "#bfeca8",
    "#cff1be",
    "#dff6d4",
    "#effbea",
  ]);
});

test("Tones", () => {
  expect(tones("#62C62C")).toStrictEqual([
    "#68b83d",
    "#6bb145",
    "#6eaa4e",
    "#71a356",
    "#749c5e",
    "#779567",
    "#7a8e6f",
    "#7d8778",
  ]);
});

test("Triade", () => {
  expect(triade("#62C62C")).toStrictEqual(["#62c62c", "#2c62c6", "#c62c62"]);
});
