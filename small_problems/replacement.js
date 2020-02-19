let template = `hello there %{what} do you do?`;

function there(str){
  return str.replace(/%{[a-z]+}/g, replaceText);
}

function replaceText(match) {
  return '8888888';
}

console.log(there(template));