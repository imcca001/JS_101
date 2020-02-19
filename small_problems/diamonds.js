function diamond(n) {
  numberSequence(n).forEach(number => {
    console.log(`${" ".repeat((n - number) / 2)}${"*".repeat(number)}`);
  });
}

function numberSequence(n) {
  let result = [];
  let increment = 2;
  let number = 1;

  while (number > 0) {
    result.push(number);
    if (number === n) {
      increment = -2;
    }
    number += increment;
  }

  return result;
}


console.log(diamond(3));
console.log(diamond(9));

/*
function diamond(num) {
  let number = 1;
  while (number <= num) {
    let spaces = (num - number) / 2;
    console.log(' '.repeat(spaces) + '*'.repeat(number));
    number += 2;
  }
    number -= 2;
    while (number > 0) {
    let spaces = (num - number) / 2;
    console.log(' '.repeat(spaces) + '*'.repeat(number));
    number -= 2;
  }
}
*/