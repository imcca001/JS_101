let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

scores.sort((a, b) => {
  a = a.reduce((accum, num) => accum + num);
  b = b.reduce((accum, num) => accum + num);
  return a - b;
});

console.log(scores);