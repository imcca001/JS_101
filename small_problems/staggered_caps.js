function staggeredCase(str) {
  let idx = 0;
  return str.split('').map(function(char) {
    if (/[a-z]/i.test(char) && idx % 2 === 0) {
      idx += 1;
      return char.toUpperCase();
    } else if (/[a-z]/i.test(char) && idx % 2 === 1) {
      idx += 1;
      return char.toLowerCase()
    } else {
      return char;
    }
  }).join('');
}


console.log(staggeredCase("I Love Launch School!")); // === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS")); // === "AlL cApS");
console.log(staggeredCase("ignore 77 the 444 numbers")); // === "IgNoRe 77 ThE 444 nUmBeRs");