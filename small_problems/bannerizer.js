/*
function logInBox(message) {
  let horizontalRule = `+${"-".repeat(message.length + 2)}+`;
  let emptyLine = `|${" ".repeat(message.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}
*/

function logInBox(str) {
  let boundary = '+' + '-'.repeat(str.length + 2) + '+';
  let filler = '|' + ' '.repeat(str.length + 2) + '|';
  let textLine = '| ' + str + ' |';

  return boundary + '\n' + filler + '\n' + textLine + '\n' + filler + '\n' + boundary;
}

console.log(logInBox('To boldly go where no one has gone before.'));
