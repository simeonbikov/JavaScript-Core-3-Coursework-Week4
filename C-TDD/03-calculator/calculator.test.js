let add = require("./calculator");

test("returns 0 if '0' passed as an argument", function () {
  expect(add("0")).toEqual(0);
});

test("returns 5 if '5' passed as an argument", function () {
  expect(add("5")).toEqual(5);
});

test("returns 9 if '3,6' passed as an argument", function () {
  expect(add("3,6")).toEqual(9);
});

test("returns sum of numbers from the string", function () {
  expect(add("3,56,1,1000,15")).toEqual(1075);
});

test("returns 0 if empty string passed as an argument", function () {
  expect(add("")).toEqual(0);
});

test("returns sum without number > 1000", function () {
  expect(add("1,2,3,1001,3500")).toEqual(6);
});

test("throw error message", function () {
  expect(() => (add("3,-21,88,-4,-36")).toThrowError("Negatives not allowed: -21,-4,-36"));
});