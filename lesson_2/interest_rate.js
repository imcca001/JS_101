function prompt(str) {
  console.log(`=> ${str}`);
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

formatter.format(1000) // "$1,000.00"

let rlSync = require('readline-sync');

prompt('What is the loan amount?');
let amount = Number(rlSync.question().replace(/,/g, ''));

while (typeof amount !== 'number') {
  prompt('Please enter a loan amount (positive digits only)');
  amount = rlSync.question();
}

prompt('What is the annual percentage rate?');
let APR = (Number(rlSync.question()) / 100);

prompt('What is the duration of the loan? (in months)');
let durationInMonths = Number(rlSync.question());

let MPR = APR / 12;

let payment = amount * (MPR / (1 - Math.pow((1 + MPR), (-durationInMonths))));

payment = formatter.format(payment);

console.log(`Your payment is ${payment} per month`);

/*
m = monthly payment
p = loan amount
j = monthly interest rate
n = loan duration in months
*/

 // let m = p * (j / (1 - Math.pow((1 + j),(-n))));


