function findFibonacciIndexLength(num) {
  let num1 = 2;
  let num2 = 3;
  let temp;
  while (num2.toString().split().length < num) {
    temp = num2;
    num2 = num2 + num1;
    num1 = temp;
  }
  return num2;
}



console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74

// Don't try any higher values until you read the solution Discussion