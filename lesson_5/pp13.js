let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

function oddsArray(arr){
  return arr.filter(number => number % 2 === 1);
}

function oddArraySort(arr){
  let newArr = arr.sort((a, b) => {
    a = (oddsArray(a).reduce((accum, num) => accum + num));
    b = (oddsArray(b).reduce((accum, num) => accum + num));

    return a - b
  });
  return newArr;
}

console.log(oddArraySort(arr));