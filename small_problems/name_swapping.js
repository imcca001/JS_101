function swapName(str) {
  if (str.split(' ').length > 2) {
     let first = str.split(' ')[0];
     let middle = str.split(' ')[1, str.length - 2];
     let last = str.split(' ')[str.length - 1];

     return `${last} ${first} ${middle}`;
  } 

  let first = str.split(' ')[0];
  let second = str.split(' ')[1];
  return `${second} ${first}`;

}
console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"

