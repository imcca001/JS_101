let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

function arrToObj(arr) {
  let obj = {};
  arr.forEach(subArr => {
    let key = subArr[0];
    let value = subArr[1];

    obj[key] = value;
  });

  return obj;
}

console.log(arrToObj(arr));