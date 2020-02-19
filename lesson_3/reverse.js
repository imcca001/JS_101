function reverse(arr) {
  return newArray = arr.slice(0).reverse();
}

function reverseAgain(arr) {
  return newArray = arr.slice(0).reverse();
  arr.sort((a, b) => b - a);
}

function bonusReverse(arr) {
  arr.forEach(function(_, num, index) {

  }
});

let numbers = [1, 2, 3, 4, 5];

console.log(reverse(numbers));

console.log(reverseAgain(numbers));

console.log(numbers);

arr.forEach(callback(currentValue [, index [, array]])[, thisArg])

numbers.forEach((_, index, array) => {reversedArray.push(array[array.length - 1 - index])});
