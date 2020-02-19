let rlsync = require('readline-sync');

let first = rlsync.question('Enter the 1st number: ');
let second = rlsync.question('Enter the 2nd number: ');
let third = rlsync.question('Enter the 3rd number: ');
let fourth = rlsync.question('Enter the 4th number: ');
let fifth = rlsync.question('Enter the 5th number: ');
let last = rlsync.question('Enter the last number: ');

let arr = [first, second, third, fourth, fifth];

function isBiggerThan25(element, index, array) {
  return element > 25;
}

if (arr.some(isBiggerThan25)) {
  console.log(`The numbers ${arr} contain a number > 25.`);
}
