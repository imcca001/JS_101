function buyFruit(fruits) {
  let fruitArray = [];
  fruits.forEach(item => {
    let idx = 0;
    while (idx < item[1]) {
    fruitArray.push(item[0]);
    idx++;
  }
  });
  return fruitArray;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]