let words = ['go', 'ahead', 'and', 'jump'];


words.sort((a, b) => {
  return a.length - b.length;
});

console.log(words);