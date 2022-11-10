function convertToOldRoman(n) {
  let romanNumber = "";

  romanNumber += "M".repeat(n / 1000);
  n %= 1000;
  romanNumber += "D".repeat(n / 500);
  n %= 500;
  romanNumber += "C".repeat(n / 100);
  n %= 100;
  romanNumber += "L".repeat(n / 50);
  n %= 50;
  romanNumber += "X".repeat(n / 10);
  n %= 10;
  romanNumber += "V".repeat(n / 5);
  n %= 5;
  romanNumber += "I".repeat(n);

  return romanNumber;
}

module.exports = convertToOldRoman;

// console.log(convertToOldRoman(44));