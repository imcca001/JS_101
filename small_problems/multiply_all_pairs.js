function multiplyAllPairs(arr1, arr2) {
  let allNumbers = [];

  for (let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++) {
      allNumbers.push(arr1[i] * arr2[j]);
    }
  }
  return allNumbers.sort(function(a, b) {
    return a - b;
  });
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
