function crunch(str) {
 let arr = str.split("");
  newArr = arr.filter(function(char, idx) {
   return arr[idx] !== arr[idx + 1];
  });
  return newArr.join('');
  }


console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           