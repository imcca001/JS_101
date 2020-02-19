function substringsAtStart(str) {
  let arr = [];
  for (let i = 1; i <= str.length; i++) {
    arr.push(str.substring(0, i));
  }
  return arr;
}

function substrings(str) {
  let allSubstrings = [];
  for (let i = 0; i < str.length; i++) {
    let thisSubstring = str.substring(i);
    allSubstrings.push(...substringsAtStart(thisSubstring));
  }
  return allSubstrings;
}


console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]