/*
function wordSizes(word) {
  let wordsArray = words.split(' ');
  let count = {};

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    let wordSize = wordsArray[idx].length;
    if (wordSize === 0) {
      continue;
    }

    if (!count[wordSize]) {
      count[wordSize] = 0;
    }
    count[wordSize] = 1;
  }

  return count;
}
*/


function wordSizes(str) {
  let wordsArray = str.split(" ");
  let sizeDirectory = {};

  wordsArray.forEach(function(word) {
    let filteredWord = word.replace(/[^a-zA-Z]/, '');
    let size = String(filteredWord.length);
    if (size === 0){
      return;
    }
    
    if (!sizeDirectory[size]) {
      sizeDirectory[size] = 0;
    } 
    sizeDirectory[size] += 1;
  });

  return sizeDirectory;
}


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));  