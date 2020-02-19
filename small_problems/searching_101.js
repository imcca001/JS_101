let rlsync = require('readline-sync');

let first = rlsync.question('Enter the 1st number: ');
let second = rlsync.question('Enter the 2nd number: ');
let third = rlsync.question('Enter the 3rd number: ');
let fourth = rlsync.question('Enter the 4th number: ');
let fifth = rlsync.question('Enter the 5th number: ');
let last = rlsync.question('Enter the last number: ');

let arr = [first, second, third, fourth, fifth];

let numString = arr.join(',')

if (arr.includes(last)) {
  console.log(`The number ${last} appears in ${numString}.`);
}