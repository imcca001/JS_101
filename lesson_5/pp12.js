let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

function oddsArray(arr){
  let newArr =  arr.map(array => {
    return array.filter(number => {
      return number % 3 === 0;
    });
  });
  return newArr;
}

console.log(oddsArray(arr));
