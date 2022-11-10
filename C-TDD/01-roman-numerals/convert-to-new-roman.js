function convertToNewRoman(n) {
  let romanNumber = "";

  romanNumber += "M".repeat(n / 1000);
  n %= 1000;
  romanNumber += "CM".repeat(n / 900);
  n %= 900;
  romanNumber += "D".repeat(n / 500);
  n %= 500;
  romanNumber += "CD".repeat(n / 400);
  n %= 400;
  romanNumber += "C".repeat(n / 100);
  n %= 100;
  romanNumber += "XC".repeat(n / 90);
  n %= 90;
  romanNumber += "L".repeat(n / 50);
  n %= 50;
  romanNumber += "XL".repeat(n / 40);
  n %= 40;
  romanNumber += "X".repeat(n / 10);
  n %= 10;
  romanNumber += "IX".repeat(n / 9);
  n %= 9;
  romanNumber += "V".repeat(n / 5);
  n %= 5;
  romanNumber += "IV".repeat(n / 4);
  n %= 4;
  romanNumber += "I".repeat(n);
  
  return romanNumber;
}

module.exports = convertToNewRoman;

// console.log(convertToNewRoman(44));
