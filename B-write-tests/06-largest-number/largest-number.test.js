let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  const input = [3, 21, 88, 4, 36];
  const expected = 88;
  const output = getLargestNumber(input);

  expect(output).toEqual(expected);
});

test("the original array hasn't changed", function () {
  const input = [3, 21, 88, 4, 36];
  const output = [3, 21, 88, 4, 36];
  getLargestNumber(input);

  expect(input).toEqual(output);
});


// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed