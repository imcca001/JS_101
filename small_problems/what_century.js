/*
function century(year) {
  let centuryYear = Math.floor(year / 100) + 1;
  if (year % 100 === 0) {
    centuryYear -= 1;
  }

  return centuryYear + getSuffix(centuryYear);
}

function getSuffix(year) {
  if (lastTwo(year)) {
    return 'th';
  }

  let onesPlace = year % 10;
  switch(onesPlace) {
    case 1: 
      return 'st';
    case 2: 
      return 'nd';
    case 3: 
      return 'rd';
    default: 
      return 'th';
  }
}

function lastTwo(year) {
  return year === 11 || year === 12 || year === 13;
}

*/

function century(year) {
  let centuryYear = Math.floor(year / 100) + 1;

  year % 100 === 0 ? centuryYear -= 1 : centuryYear;

  if(lastTwo(centuryYear)) {
    return `${centuryYear}th`;
  }

  return `${centuryYear}${onesPlace(centuryYear)}`

}

function lastTwo(centuryYear){
  return centuryYear === 11 || centuryYear === 12 || centuryYear === 13;
}

function onesPlace(centuryYear) {
  let onesPlace = centuryYear % 10;

  switch(onesPlace) {
    case 1:
    return 'st';
    case 2: 
    return 'nd';
    case 3:
    return 'rd';
    default:
    return 'th';
  }
}


console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"


