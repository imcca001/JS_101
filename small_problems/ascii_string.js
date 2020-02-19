function asciiValue(str) {
  let total = 0;
  str.split('').forEach(function(char, idx) {
    total += str.charCodeAt(idx);
  });
  return total;
}



console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0