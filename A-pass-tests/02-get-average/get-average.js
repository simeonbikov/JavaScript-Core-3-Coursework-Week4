// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    let arrOfNum = numbers.filter(value => typeof value === 'number');
    let sum = arrOfNum.reduce((acc, n) => acc + n);
    return sum / arrOfNum.length;
}

module.exports = average;

// console.log(average([13, 10, 12, "i", "a"]));
