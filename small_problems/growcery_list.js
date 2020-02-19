function buyFruit(arr) {
  let fruitArray = [];
  return arr.map(fruit => {
     fruitArray.push(fruit[0].repeat(fruit[1]));
  console.log(fruit[0], fruit[1]);
  });
}


console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]