function joinOr(arr, div1 = ', ', div2 = ' or ' ) {
  let firstArray = arr.slice(0, arr.length - 1);
  let endString = arr.slice(arr.length - 1);

  let startString = firstArray.join(div1);
  
  return startString + div2 + endString;
}

let arr = [1,2,3,4,5,6];

console.log(joinOr(arr));