let rlSync = require('readline-sync');

let bill = Number(rlSync.question('What is the bill? '));

let tipRate = Number(rlSync.question('What is the tip percentage? ')) / 100;

let totalTip = tipRate * bill

let total = bill + totalTip;

console.log(`The tip is $${totalTip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);

