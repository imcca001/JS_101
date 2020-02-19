function featured(number) {
  let nextFeatured = 0;
  for (let i = number + 1; i < 9876543201; i++) {
    if (i % 2 === 1 && i % 7 === 0) {
      nextFeatured = i;
      break;
    }
  }
  while (nextFeatured < 9876543201) {
    if (String(nextFeatured).length === new Set(String(nextFeatured)).size) {
      return nextFeatured;
    }
    nextFeatured += 14;
  }
  return 'There is no possible number that fulfills those requirements.';
}

console.log(featured(12));           // 21
console.log(featured(997));           // 21
console.log(featured(21));           // 35

/*
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201)); 
*/

/*
function featured(number) {
  let nextFeatured = number + 1;

  for (let i = nextFeatured; i <= 43201; i++) {
    if (nextFeatured % 7 === 0 && noCopies(nextFeatured)) {
      return nextFeatured;
    }
  }

  return "There is no possible number that fulfills those requirements.";
}

function noCopies(number) { 
  let numList = String(number).split('');
  let numSet = new Set(numList);
  return numList.length === numSet.size;
}
*/