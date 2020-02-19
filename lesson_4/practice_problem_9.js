function totalAge(obj) {
  let ageArr = Object.values(obj);
  let total = 0;
  ageArr.forEach((age) => total += age);
  return total;
}

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

console.log(totalAge(ages));