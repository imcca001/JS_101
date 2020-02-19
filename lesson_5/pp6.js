
let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

let people = Object.keys(munsters);

people.forEach(person => {
  let age = munsters[person].age;
  let gender = munsters[person].gender;
  console.log(`${person} is a ${age} year old ${gender}.`)
})

