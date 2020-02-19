function minAge(obj) {
  let ageArr = Object.values(obj);
  let minAge = Math.min(...ageArr);
  /*
  let minAge = ageArr[0];
  ageArr.forEach(function(age) {
    if (age < minAge) {
      minAge = age
    }
  });
  */
  return minAge;
}

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

console.log(minAge(ages));