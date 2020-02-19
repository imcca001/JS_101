function average(numberArray) {
  let total = numberArray.reduce(function(item, accum) {
    return accum + item;
  }, 0);
  return Math.floor(total / numberArray.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40