function selectFruit(obj) { 
  let fruits = Object.keys(obj)
  let newBasket = {}
  
  fruits.forEach(function(fruit) {
      if (obj[fruit] === 'Fruit') {
        newBasket[fruit] = 'Fruit';
      }
    });
    return newBasket;
  }

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }