function union(array1, array2) {
  let unionArray = [];

  array2.forEach(function(num) {
    if (!array1.includes(num)) {
      unionArray = unionArray.concat(num);
    }
  });
  return unionArray.concat(array1).sort();
}


console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
