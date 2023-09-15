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

  expect(combination(3, "#FF000033")).toStrictEqual([
    "#ff000033",
    "#00ff0033",
    "#0000ff33",
  ]);
});

test("Analogous", () => {
  expect(analogous("#62C62C")).toStrictEqual(["#62c62c", "#2cc643", "#afc62c"]);
  expect(analogous("#62C62C33")).toStrictEqual(["#62c62c33", "#2cc64333", "#afc62c33"]);
});

test("Complementary", () => {
  expect(complementary("#62C62C")).toStrictEqual(["#62c62c", "#902cc6"]);
  expect(complementary("#62C62C33")).toStrictEqual(["#62c62c33", "#902cc633"]);
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

  expect(rainbow("#62C62C33")).toStrictEqual([
    "#62c62c33",
    "#2cc67a33",
    "#2c8ec633",
    "#4e2cc633",
    "#c62cba33",
    "#c62c3633",
    "#c6a62c33",
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

  expect(shades("#62C62C33")).toStrictEqual([
    "#62c62c33",
    "#57b02733",
    "#4c9a2233",
    "#41841d33",
    "#366e1833",
    "#2b581333",
    "#20420e33",
    "#152c0933",
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

  expect(shades("#62C62C33", 10)).toStrictEqual([
    "#62c62c33",
    "#59b42833",
    "#50a22433",
    "#47902033",
    "#3e7e1c33",
    "#356c1833",
    "#2c5a1433",
    "#23481033",
    "#1a360c33",
    "#11240833",
  ]);
});

test("Square", () => {
  expect(square("#62C62C")).toStrictEqual([
    "#62c62c",
    "#2cafc6",
    "#902cc6",
    "#c6432c",
  ]);

  expect(square("#62C62C33")).toStrictEqual([
    "#62c62c33",
    "#2cafc633",
    "#902cc633",
    "#c6432c33",
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
    "#daf4cc",
  ]);

  expect(tints("#62C62C33")).toStrictEqual([
    "#62c62c33",
    "#71d43c33",
    "#83d95433",
    "#95de6c33",
    "#a7e38433",
    "#b8e99c33",
    "#c9eeb433",
    "#daf4cc33",
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
    "#e3f6d8",
  ]);

  expect(tints("#62C62C33", 10)).toStrictEqual([
    "#62c62c33",
    "#6ed33833",
    "#7dd74c33",
    "#8bdb6033",
    "#99df7433",
    "#a8e48833",
    "#b7e99c33",
    "#c5edb033",
    "#d4f2c433",
    "#e3f6d833",
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

  expect(tones("#62C62C33")).toStrictEqual([
    "#62c62c33",
    "#66bd3733",
    "#6ab54133",
    "#6dac4c33",
    "#71a35633",
    "#759a6133",
    "#79926b33",
    "#7c897633",
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

  expect(tones("#62C62C33", 10)).toStrictEqual([
    "#62c62c33",
    "#65bf3433",
    "#68b83d33",
    "#6bb14533",
    "#6eaa4e33",
    "#71a35633",
    "#749c5e33",
    "#77956733",
    "#7a8e6f33",
    "#7d877833",
  ]);
});

test("Triade", () => {
  expect(triade("#62C62C")).toStrictEqual(["#62c62c", "#2c62c6", "#c62c62"]);
  expect(triade("#62C62C33")).toStrictEqual(["#62c62c33", "#2c62c633", "#c62c6233"]);
});
