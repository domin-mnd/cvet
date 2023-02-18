import {
  combination,
  analogous
} from "../src/index";

test("Combination", () => {
  expect(combination(3, "#FF0000")).toStrictEqual(["#ff0000", "#00ff00", "#0000ff"]);
});

test("Analogous", () => {
  expect(analogous("#62C62C")).toStrictEqual(["#62c62c", "#2bc543", "#acc42a"]);
});