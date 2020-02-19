function sum(num) {
  return String(num).split('').reduce((accum, num) => accum + Number(num), 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45