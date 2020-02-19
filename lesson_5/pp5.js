let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let people = Object.keys(munsters);
let total = people.reduce(function(accum, person) {
 if(munsters[person]['gender'] === 'male') {
   return accum += munsters[person].age;
 } else {
  return accum;
 }
}, 0);

console.log(`Total age of the male members of the family is ${total} years.`);