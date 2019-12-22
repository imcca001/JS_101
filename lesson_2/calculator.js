// Ask the user for their first number
// Ask the user for their second number
// Ask the user for an operation to perform
// Perform the operation on the two numbers
// Print the reult to the terminal
const MESSAGES = require('./calculator_messages.json');

let calculate = true;
while (calculate === true){

  const readline = require('readline-sync');

  function invalidNumber(number) {
    return number.trimStart() === '' || Number.isNaN(Number(number));
  }

  function prompt(message) {
    console.log(`=> ${message}`);
  }

  prompt(MESSAGES['welcome']);

  prompt(MESSAGES['firstNum']);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES['wrongNum']);
    number1 = readline.question();
  }

  prompt(MESSAGES['secondNum']);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES['wrongNum']);
    number2 = readline.question();
  }

  prompt('What operation would you like to perform?\n\n1) Add 2) Subtract 3) Multiply 4) Divide');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3 or 4');
    operation = readline.question();
  }

  // prompt(`${number1} ${number2}`);

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`The result is: ${output}`);

  prompt("Would you like to starta another calculation? y or n");
  let redo = readline.question();
  if (redo.includes('n')) {
    calculate = false;
  }
}