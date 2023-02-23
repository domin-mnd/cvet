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
    "#62c62c",
    "#57b027",
    "#4c9a22",
    "#41841d",
    "#366e18",
    "#2b5813",
    "#20420e",
    "#152c09",
  ]);

  expect(shades("#62C62C", 10)).toStrictEqual([
    "#62c62c",
    "#59b428",
    "#50a224",
    "#479020",
    "#3e7e1c",
    "#356c18",
    "#2c5a14",
    "#234810",
    "#1a360c",
    "#112408",
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
    "#62c62c",
    "#71d43c",
    "#83d954",
    "#95de6c",
    "#a7e384",
    "#b8e99c",
    "#c9eeb4",
    "#daf4cc"
  ]);

  expect(tints("#62C62C", 10)).toStrictEqual([
    "#62c62c",
    "#6ed338",
    "#7dd74c",
    "#8bdb60",
    "#99df74",
    "#a8e488",
    "#b7e99c",
    "#c5edb0",
    "#d4f2c4",
    "#e3f6d8"
  ]);
});

test("Tones", () => {
  expect(tones("#62C62C")).toStrictEqual([
    "#62c62c",
    "#66bd37",
    "#6ab541",
    "#6dac4c",
    "#71a356",
    "#759a61",
    "#79926b",
    "#7c8976",
  ]);

  expect(tones("#62C62C", 10)).toStrictEqual([
    "#62c62c",
    "#65bf34",
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
