let nested = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

newNested = nested.map(element => {
  let incrementObj = {}
  let letters = Object.keys(element);
  letters.forEach(letter => {
    incrementObj[letter] = element[letter] + 1;
  });
  return incrementObj;
  });

console.log(newNested);
console.log(nested);