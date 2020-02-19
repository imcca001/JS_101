/*
let arr = [2,3,4,5,6];

let brr = arr.map(function(num) {
  if (num > 1) {
    return true;
  };
});

console.log(brr);
*/

const obj = { a: 'able', b: 'baker', c: 'charley' };
let result = Object.values(obj).map(value => value.toUpperCase());
console.log(result); 