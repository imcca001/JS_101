/*
function integerToString(int) {
  let str = ''
  do {
  let onesPlace = Math.round(int % 10);
  int = Math.round(int / 10);
  str = onesPlace + str;
  } while (int > 0);

  return str;
}

*/


const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}


console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));
console.log(integerToString(4321) === "4321");      // "4321"
console.log(integerToString(0) === "0");         // "0"
integerToString(5000);      // "5000"
integerToString(1234567890);   