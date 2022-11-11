const add = (numbers) => {
  if (!numbers) return 0;

  const arrOfNumbers = numbers
    .split(",")
    .map((str) => parseInt(str))
    .filter((num) => num <= 1000);

  const listOfNegativeNumbers = arrOfNumbers.filter((num) => num < 0);
  if (listOfNegativeNumbers.length > 0) {
    throw new Error(
      `Negatives not allowed: ${listOfNegativeNumbers.join(",")}`
    );
  }
  const sumOfNumbers = arrOfNumbers.reduce((partSum, num) => partSum + num);
  return sumOfNumbers;
};

module.exports = add;
