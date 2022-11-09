const removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  const input = ["Irina", "Etza", "Daniel", "AAA"];
  const expected = ["rn", "tz", "Dnl", ""];
  const output = removeVowelsFromWords(input);

  expect(output).toEqual(expected);
});