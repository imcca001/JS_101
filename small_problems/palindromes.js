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

function isPalindrome(str) {
    return (str.length > 1 && str === str.split('').reverse().join(''));
}

function palindromes(str) {
  let subStringList = substrings(str);
  return subStringList.filter(subString => isPalindrome(subString));
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]
console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

// console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]