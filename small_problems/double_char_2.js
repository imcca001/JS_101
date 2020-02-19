function doubleConsonants(word) {
  return word.split('').map(function(letter) {
    if (letter.match(/[^aeiou]/ig)) {
      return letter + letter;
    } else {
      return letter;
    }
  }).join('');
}


console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""