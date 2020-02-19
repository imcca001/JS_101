let arr = ['10', '11', '9', '7', '8'];
arr.sort(function(a, b) {
  return b - a;
});

console.log(arr);