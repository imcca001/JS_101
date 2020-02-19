function reverseWords(str) {
  let wordsArray = str.split(' ');
  let reverseArray = [];
  
  wordsArray.forEach(function(word) {
    if (word.length >= 5) {
      let reversedWord = word.split('').reverse().join('');
      reverseArray.push(reversedWord);
    } else {
      reverseArray.push(word);
    }
  });
  return reverseArray.join(' ');
}

function reverse(word) {

}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"