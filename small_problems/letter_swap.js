function swapFirstLastLetter(word) {
  if (word.length === 1) {
    return word;
  }

  return word[word.length - 1] + word.slice(1, -1) + word[0];
}

function swap(words) {
  let wordsArray = words.split(' ');

  for (let idx = 0; idx < wordsArray.length; idx++) {
    wordsArray[idx] = swapFirstLastLetter(wordsArray[idx]);
  }

  return wordsArray.join(' ');
}





/*
function swap(str) {
  let reversed = [];
  str.split(' ').forEach(function(word) {
    let wordArray = word.split('');
    let first = wordArray[0];
    let last = wordArray.pop();
    wordArray[0] = last;
    wordArray.push(first);
    console.log(wordArray);
    reversed.push(wordArray);
  });

  return reversed.join('');
}
*/


console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"