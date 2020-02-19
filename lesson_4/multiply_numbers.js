function multiplyNumbers(numbers, num) {
  let counter = 0;

  while (counter < numbers.length) {
    numbers[counter] *= num;
    counter += 1;
  }

  return numbers;
}


let myNumbers = [1, 4, 3, 7, 2, 6];
let num = 5;
console.log(multiplyNumbers(myNumbers, num)); // => [2, 8, 6, 14, 4, 12]
console.log(myNumbers); 