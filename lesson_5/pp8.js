let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowels = ['a', 'e', 'i', 'o', 'u'];
let entryVowels = {};

Object.entries(obj).forEach(entry => {
  entryVowels[entry[0]] = ''
  let letters = entry[1].join('').split('');
  letters.forEach(letter => {
    if (vowels.includes(letter)) {
      entryVowels[entry[0]] += (letter);
    }
  });
});

console.log(entryVowels);