function arrObj(arr) {
  newObj = {};
  arr.forEach((item, idx) => newObj[item] = idx);
  return newObj
}

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
console.log(arrObj(flintstones));
// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }
