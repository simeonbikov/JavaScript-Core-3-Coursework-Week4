let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  expect(convertToOldRoman(1)).toEqual("I");
});

test("returns V if passed 5 as an argument", function () {
  expect(convertToOldRoman(5)).toEqual("V");
});

test("returns X if passed 10 as an argument", function () {
  expect(convertToOldRoman(10)).toEqual("X");
});

test("returns L if passed 50 as an argument", function () {
  expect(convertToOldRoman(50)).toEqual("L");
});

test("returns C if passed 100 as an argument", function () {
  expect(convertToOldRoman(100)).toEqual("C");
});

test("returns D if passed 500 as an argument", function () {
  expect(convertToOldRoman(500)).toEqual("D");
});

test("returns M if passed 1000 as an argument", function () {
  expect(convertToOldRoman(1000)).toEqual("M");
});

test("returns IIII if passed 4 as an argument", function () {
  expect(convertToOldRoman(4)).toEqual("IIII");
});

test("returns VIIII if passed 9 as an argument", function () {
  expect(convertToOldRoman(9)).toEqual("VIIII");
});

test("returns XIIII if passed 14 as an argument", function () {
  expect(convertToOldRoman(14)).toEqual("XIIII");
});

test("returns XXXXIIII if passed 44 as an argument", function () {
  expect(convertToOldRoman(44)).toEqual("XXXXIIII");
});

test("returns LXXXXVIIII if passed 99 as an argument", function () {
  expect(convertToOldRoman(99)).toEqual("LXXXXVIIII");
});

test("returns CCCC if passed 400 as an argument", function () {
  expect(convertToOldRoman(400)).toEqual("CCCC");
});

test("returns DCCCCXXXXIIII if passed 944 as an argument", function () {
  expect(convertToOldRoman(944)).toEqual("DCCCCXXXXIIII");
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
// | 4             | IIII          |
// | 9             | VIIII         |
// | 14            | XIIII         |
// | 44            | XXXXIIII      |
// | 99            | LXXXXVIIII    |
// | 400           | CCCC          |
// | 944           | DCCCCXXXXIIII |