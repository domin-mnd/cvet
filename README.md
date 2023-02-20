<p align="center">
  <img alt="cvet" src="public/cvet.svg" />
</p>

# Overview

Cvet (Russian word for "color", pronounced `/tsvet/`) is a color tool for
customizing and picking colors easily for your projects. It consists of
various palettes & filters along with tools to help you with tough times
picking colors for your projects.

# Install

```bash
$ npm install cvet
$ yarn add cvet
```

# Usage

To work with palette or filters you have to declare classes (Filter class extends palette):

```js
import { Palette, Filter } from "cvet"; // esm
const { Palette, Filter } = require("cvet"); // or cjs

const color = new Palette("#FF0000", "HEX");
const filterColor = new Filter(
  {
    r: 255,
    g: 0,
    b: 0,
  },
  "RGB"
);
```

## Parameters

Both classes require 2 parameters from users: A color & its type.

There are 5 color types you can use as second parameter:

- HEX - Written as string (`"#FF0000"`)
- RGB - Written as an object with r, g, b keys (`{ r: 255, g: 0, b: 0 }`)
- HSL - Written as an object as well with corresponding keys (`{ h: 0, s: 100, l: 50 }`)
- CMYK - Written the same as RGB & HSL (`{ c: 0, m: 100, y: 100, k: 0 }`)
- MAP - Is basically RGB

> Note: The entire package is typescript friendly.

## Getters

As Filter extends Palette, there are more than enough same getters working
for both classes:

```js
console.log(color.color); // Returns RGB color (MAP), console logging the class would just return instance
console.log(color.red); // Returns red value in the color
console.log(color.green); // Returns green value in the color
console.log(color.blue); // Returns blue value in the color
console.log(color.hex); // Returns converted MAP to HEX
console.log(color.rgb); // Returns RGB
console.log(color.hsl); // Returns converted MAP to HSL
console.log(color.cmyk); // Returns converted MAP to CMYK
```

Filter class on the other hand is only extended with filter functions so these are the getters you can use.

Other than that there's obviously a way to set a new color for the instance:

```js
color.color = {
  r: 0,
  g: 255,
  b: 255
};
```

However it only accepts RGB / MAP color type so you'd want to use utilities (provided as functions by the package) to convert your CMYK, HEX, HSL values to RGB.

## Filters

There are 7 filters for your colors you can use: contrast, grayscale, invert, lighten, darken, rotateHue, saturate.

Each of those have different parameters - as the result these methods return the instance so that to invert the color you need to do following actions:

```js
const color = new Filter("#FF0000", "HEX");

console.log(color.rgb); // { r: 255, g: 0, b: 0 }
console.log(color.invert().rgb); // { r: 0, g: 255, b: 255 }
console.log(color.rgb); // { r: 0, g: 255, b: 255 }
```

As you can see the instance changes as filter is applied.

Here's a parameter list for each of the filter:

- contrast - An amount to adjust the contrast of the color (0-100+)
- grayscale - An amount to adjust the grayscale of the color where 0 is complete grayscale (0-100)
- invert - No parameters needed
- lighten - An amount to lighten the color (0-100)
- darken - An amount to darken the color (0-100)
- rotateHue - Degree to rotate the hue (0-360)
- saturate - An amount to saturate the color by (0-100)

## Tools

There's a bunch of tools (or utilities) you can use. One is `combination` function that accepts 2 parameters:

- Amount of colors in a combination (default: 2)
- HEX color of the initial color (default: random)

```js
import { combination } from "cvet"; // esm
const { combination } = require("cvet"); // or cjs

console.log(combination(3, "#ffd301"));
// Returns ["#ffd301", "#01ffd3", "#d301ff"]
```

Tools like `complementary`, `triade`, `square`, `rainbow` work almost identically except these have combination amount preset:
- `complementary` returns an opposite (not inverse) color in an array of the initial color & itself
- `triade` returns a triade (3) array of colors with a provided initial color
- `square` acts the same and returns a square (4) array of colors with a provided initial color
- `rainbow` returns a full rainbow (7) array of colors with a provided initial color

> Note: Unlike `combination` tools above require a single parameter - HEX color (no default set).

Other than these there's an `analogous` tool to return analogous colors (30 degrees rotated hue clockwise & counterclockwise):

```js
import { analogous } from "cvet"; // esm
const { analogous } = require("cvet"); // or cjs

console.log(analogous("#62c62c"));
// Returns ["#62c62c", "#2cc643", "#afc62c"]
```

Also you can use `shades`, `tints`, `tones` to generate octad arrays for colors:

```js
import { shades, tints, tones } from "cvet"; // esm
const { shades, tints, tones } = require("cvet"); // or cjs

console.log(shades("#62c62c"));
// Returns ["#4e9e24", "#448a20", "#3a761b", "#306216", "#264e12", "#1c3a0d", "#122609", "#091204"]
console.log(tints("#62c62c"));
// Returns ["#7fd850", "#8fdd66", "#9fe27c", "#afe792", "#bfeca8", "#cff1be", "#dff6d4", "#effbea"]
console.log(tones("#62c62c"));
// Returns ["#68b83d", "#6bb145", "#6eaa4e", "#71a356", "#749c5e", "#779567", "#7a8e6f", "#7d8778"]
```

## Utilities

There are also some utilities that would ease your work with the package:

- Hue/HEX/HSL/CMYK to RGB converters - `hexToRgb(HEX), hslToRgb(HSL) etc.`
- Finding the luminosity of the color - `luminosity(RGB)`
- Random HEX color picker - `randomColor()`
- 00 pad for HEX - `padHEX(R/G/B value of HEX)`

# Documentation

All the available documentation regarding the usage of the package is in jsdoc of each / types.

# Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

# License

This project is under [MIT](https://choosealicense.com/licenses/mit/) license. You can freely use it for your own purposes.