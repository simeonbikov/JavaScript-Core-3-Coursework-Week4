let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  expect(convertToNewRoman(1)).toEqual("I");
});

test("returns V if passed 5 as an argument", function () {
  expect(convertToNewRoman(5)).toEqual("V");
});

test("returns X if passed 10 as an argument", function () {
  expect(convertToNewRoman(10)).toEqual("X");
});

test("returns L if passed 50 as an argument", function () {
  expect(convertToNewRoman(50)).toEqual("L");
});

test("returns C if passed 100 as an argument", function () {
  expect(convertToNewRoman(100)).toEqual("C");
});

test("returns D if passed 500 as an argument", function () {
  expect(convertToNewRoman(500)).toEqual("D");
});

test("returns M if passed 1000 as an argument", function () {
  expect(convertToNewRoman(1000)).toEqual("M");
});

test("returns IV if passed 4 as an argument", function () {
  expect(convertToNewRoman(4)).toEqual("IV");
});

test("returns IX if passed 9 as an argument", function () {
  expect(convertToNewRoman(9)).toEqual("IX");
});

test("returns XIV if passed 14 as an argument", function () {
  expect(convertToNewRoman(14)).toEqual("XIV");
});

test("returns XLIV if passed 44 as an argument", function () {
  expect(convertToNewRoman(44)).toEqual("XLIV");
});

test("returns XCIX if passed 99 as an argument", function () {
  expect(convertToNewRoman(99)).toEqual("XCIX");
});

test("returns CD if passed 400 as an argument", function () {
  expect(convertToNewRoman(400)).toEqual("CD");
});

test("returns CMXLIV  if passed 944 as an argument", function () {
  expect(convertToNewRoman(944)).toEqual("CMXLIV");
});


// | Arabic Number | Roman Numeral |
// | ------------- | ------------- |
// | 1             | I             |
// | 5             | V             |
// | 10            | X             |
// | 50            | L             |
// | 100           | C             |
// | 500           | D             |
// | 1000          | M             |

// | Arabic Number | Roman Numeral |
// | ------------- | ------------- |
// | 4             | IV            |
// | 9             | IX            |
// | 14            | XIV           |
// | 44            | XLIV          |
// | 99            | XCIX          |
// | 400           | CD            |
// | 944           | CMXLIV        |