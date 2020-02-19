const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function intToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}

function signedIntegerToString(num) {
  switch (Math.sign(num)) {
    case 1:
      return '+' + intToString(num);
    case -1:
      return '-' + intToString(num * -1);
    default:
      return intToString(num);
  }
}

console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(0));
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");