
function wordSize(str) {
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


/*
function wordSize(words) {
  let wordsArray = words.split(' ');
  let count = {};

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    let cleanWordSize = removeNonLetter(wordsArray[idx].toLowerCase()).length;
    if (cleanWordSize === 0) {
      continue;
    }

    count[cleanWordSize] = count[cleanWordSize] || 0;
    count[cleanWordSize] += 1;
  }

  return count;
}

function removeNonLetter(string) {
  let result = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (isLetter(string[idx])) {
      result += string[idx];
    }
  }

  return result;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}
*/

console.log(wordSize('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSize('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSize("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
// console.log(wordSize(''));  