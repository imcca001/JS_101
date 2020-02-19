/*
function removeVowels(arr) {
  let filtered = arr.map(word => word.match(/[^aeiou]/g).join('')); 
  return filtered;
}
*/

function removeVowels(arr) {
  return arr.map(word => word.replace(/[aeiou]/ig, ''));
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]