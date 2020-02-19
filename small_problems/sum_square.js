function sumSquareDifference(num) {
  let sumSquare = 0;
  let squareSum = 0;

  for (i = 1; i <= num; i++) {
    sumSquare += i;
    squareSum += i**2;
  }
  return sumSquare ** 2 - squareSum;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100)); 