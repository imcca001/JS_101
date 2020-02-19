function interleave(arr1, arr2) {
  let interArray = [];
  arr1.forEach(function(num, idx) {
    interArray = interArray.concat(arr1[idx], arr2[idx])
  });
  return interArray;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]



