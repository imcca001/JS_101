/*
function reverseSentence(str) {
  let reverse = str.split(' ').reverse().join(' ');
  return reverse;
}
*/

function reverseSentence(string) {
  return string.split(' ').reverse.join(' ');
}


console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"