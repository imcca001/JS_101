function letterPercentages(text) {
  let stringLibrary = {}
  let types = ['lowercase', 'uppercase', 'neither'];
  let matchCriteria = [/[a-z]/g, /[A-Z]/g, /[^a-z]/ig];

  types.forEach(function(type, index) {
    stringLibrary[type] = percentage(matchCriteria[index], text);
  });

  function percentage(regex, text) {
    return text.match(regex) ? 
    String(((text.match(regex).length / text.length) * 100).toFixed(2)) :
    "0.00";
  }

  return stringLibrary;
}


console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }


/*
function letterPercentages(string) {
  let count = string.length;

  function percentage(regex) {
    let matchingChars = string.match(regex) || [];
    return ((matchingChars.length / count) * 100).toFixed(2);
  }

  return {
    lowercase: percentage(/[a-z]/g),
    uppercase: percentage(/[A-Z]/g),
    neither: percentage(/[^a-z]/gi),
  };
}
*/