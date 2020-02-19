function generateUUID() {
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
  let sections = [8, 4, 4, 4, 12];

  let uuid = '';
  sections.forEach((section, sectionIndex) => {
    for (let index = 1; index <= section; index++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      uuid += characters[randomIndex];
    }

    if (sectionIndex < sections.length - 1) {
      uuid += '-';
    }
  });

  return uuid;
}

console.log(generateUUID());
console.log(generateUUID());
console.log(generateUUID());



/*
function getCode() {
  let decider = Math.floor(Math.random() * 2);
  if (decider === 0) {
    return 66 + Math.floor(Math.random() * 56);
  } else {
    return 48 + Math.floor(Math.random() * 8);
  }
}

function getChar() {
  let code = getCode();
  return String.fromCharCode(code);
}

function getIdentifier(str) {

  let re = new RegExp('[^-]', 'g')
  return str.split('').map(char => {
    return char.replace(re, getChar());
  }).join('');
}

let string = '$$$$$$$$-$$$$-$$$$-$$$$-$$$$$$$$$$$$'
console.log(getIdentifier(string));
*/