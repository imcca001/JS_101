let flinstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

/*
flinstones = flinstones.reduce((accum, element) => {
  return accum.concat(element);
}, []);
*/

let newFlinstones = [];
flinstones.forEach(element => {
  newFlinstones = newFlinstones.concat(element);
});

console.log(newFlinstones);