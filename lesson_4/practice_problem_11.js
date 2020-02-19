function countChars(str) {
  counter = {};
  strArr = str.split('');
  strArr.forEach(function(char) {
    if (counter.hasOwnProperty(char)) {
      counter[char] += 1;
    } else {
      counter[char] = 1;
    }
  });
  return counter
}

let statement = "The Flintstones Rock";
console.log(countChars(statement));

// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }
