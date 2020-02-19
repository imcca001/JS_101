function mysteryMath(str) {
  console.log(str.replace(/[+\-*\/]/g, '?'));
}


mysteryMath('4 + 3 - 5 = 2');
// -> '4 ? 3 - 5 = 2'

mysteryMath('(4 * 3 + 2) / 7 - 1 = 1');