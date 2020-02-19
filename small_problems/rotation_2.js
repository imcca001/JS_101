function rotateRightmostDigits(number, count) {
  let numberString = String(number);
  let firstPart = numberString.slice(0, numberString.length - count);
  let secondPart = numberString.slice(numberString.length - count);
  let resultString = firstPart + rotateString(secondPart);

  return Number(resultString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}



console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

/*
function rotateRightmostDigits(nums, index) {
  numString = String(nums);
  let cutPoint = numString.length - index
  firstDigits = numString.slice(0, cutPoint)
  countDigits = numString.slice(cutPoint);
  newNum = firstDigits + rotateArray(countDigits);
  return Number(newNum);

}

function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined
  }
  
  if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).concat(arr[0]);
}
*/







