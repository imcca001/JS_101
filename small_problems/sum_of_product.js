function computeSum(targetNum) {
  let total = 0;

  for (let i = 1; i <= targetNum; i += 1) {
    total += i;
  }

  return total;
}

function computeProduct(targetNum) {
  let total = 1;

  for (let i = 1; i <= targetNum; i += 1) {
    total *= i;
  }

  return total;
}

let rlSync = require('readline-sync');

let num = parseInt(rlSync.question('Please enter an integer greater than 0: '), 10);

let compute = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

 if (compute === 's'){
  let sum = computeSum(num);
  console.log(`The sum of the integers between 1 and ${num} is ${sum}`);
  } else if (compute === 'p'){
  let product = computeProduct(num);
  console.log(`The product of the integers between 1 and ${num} is ${product}`);
  }



