let munstersDescription = "The Munsters are creepy and spooky.";

munstersDescription = munstersDescription.split('').map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join('');

console.log(munstersDescription);

/*
let upcase = munstersDescription.toUpperCase()
let upArr = upcase.split('');
let downArr = munstersDescription.split('');

upArr.forEach((letter, index) => {
  if (letter === munstersDescription[index]) {
    upArr[index] = upArr[index].toLowerCase();
  }
});

console.log(upArr.join(''));
*/




