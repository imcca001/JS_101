function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(`Tedy is ${getRandomArbitrary(20, 120)} years old!`);