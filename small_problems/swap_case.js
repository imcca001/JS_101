/*
function swapCase(str) {
  let arr = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (arr[i] === arr[i].toLowerCase()) {
      arr[i] = arr[i].toUpperCase();
    } else {
      arr[i] = arr[i].toLowerCase();
    }
  }
  return arr.join('');
}
*/


 /*
function swapCase(string) {
  return string
        .split('')
        .map(chr => /[A-Z]/.test(chr) ? chr.toLowerCase() : chr.toUpperCase())
        .join('');
}
*/

/*
function swapCase(string) {
  return string
    .split("")
    .map(char => {
      if (/[a-z]/.test(char)) {
        return char.toUpperCase();
      } else if (/[A-Z]/.test(char)) {
        return char.toLowerCase();
      } else {
        return char;
      }
    })
    .join("");
}
*/











function swapCase(str) {
  let stringArray = str.split('');
  let newArray = [];
  let newArr = stringArray.map(function(char) {
    if (char.match(/[a-z]/)) {
      newArray.push(char.toUpperCase());
    } else if (char.match(/[A-Z]/)) {
      newArray.push(char = char.toLowerCase());
    } else {
      newArray.push(char);
    }
  });
  return newArray.join('');
}

 if (char.match(/[a-z]/)) {
      console.log(char);
    }



console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"