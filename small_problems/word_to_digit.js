/*
function wordToDigit(str) {
  let numArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  let newStr = str.split(' ')
                  .map(function(word) {
                    let index = numArray.indexOf(word);
                    return index === -1 ? word : index;
  }).join(' ');

  return newStr;
}
*/

function wordToDigit(str) {
  let numArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  let newStr = str;

  for (let i = 0; i < numArray.length; i++){
    let number = numArray[i];
    let regex = new RegExp(`${number}`, `ig`);
    newStr = newStr.replace(regex, `${i}`);
  }
  return newStr;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."