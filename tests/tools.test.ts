import {
  analogous,
  combination,
  complementary,
  rainbow,
  square,
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

test("Square", () => {
  expect(square("#62C62C")).toStrictEqual([
    "#62c62c",
    "#2cafc6",
    "#902cc6",
    "#c6432c",
  ]);
});

test("Triade", () => {
  expect(triade("#62C62C")).toStrictEqual(["#62c62c", "#2c62c6", "#c62c62"]);
});
