function isBalanced(text) {
  let balanced = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === '(') {
      balanced += 1;
    } else if (text[i] === ')') {
      balanced -= 1;
    }
    if (balanced < 0) {
      return false;
    }
  }
  return balanced === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);