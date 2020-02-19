function letterCaseCount(str) {
  let lowerCaseChars = str.match(/[a-z]/g) || [];
  let upperCaseChars = str.match(/[A-Z]/g) || [];
  let neitherChars = str.match(/[^a-z]/gi) || '';

  return {
    lowercase: lowerCaseChars.length,
    uppercase: upperCaseChars.length,
    neither: neitherChars.length
  };
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount('')); 