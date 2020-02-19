function stringToInteger(string) {
  let char = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };
  let arrayOfDigits = string.split("").map(num => char[num]);
  let value = 0;
  arrayOfDigits.forEach(digit => value = (10 * value) + digit);
  return value;
}

function stringToSignedInteger(string) {
  switch (string[0]) {
    case '-':
      return -stringToInteger(string.slice(1));
    case '+':
      return stringToInteger(string.slice(1));
    default:
      return stringToInteger(string);
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true



/*
function stringToSignedInteger(string) {
  let char = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };
  let arrayOfDigits;
  let value = 0;

  if (char.hasOwnProperty(string[0])) {
    arrayOfDigits = string.split("").map(num => char[num]);
  } else {
    arrayOfDigits = string.slice(1).split("").map(num => char[num]);
  }

  arrayOfDigits.forEach(digit => value = (10 * value) + digit);

  if (string[0] === '-') {
    value *= -1;
  }
  return value;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
*/