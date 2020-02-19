function isOdd(num) {
  if (num % 2 === 1 || num % 2 === -1) {
    return true;
  }
  else {
    return false;
  }
}

console.log(isOdd(2));
console.log(isOdd(5));
console.log(isOdd(-17));
console.log(isOdd(-8));
console.log(isOdd(0));
console.log(isOdd(7));