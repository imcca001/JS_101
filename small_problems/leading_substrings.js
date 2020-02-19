function substringsAtStart(str) {
  let arr = [];
  for (let i = 1; i <= str.length; i++) {
    arr.push(str.substring(0, i));
  }
  return arr;
}

console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]