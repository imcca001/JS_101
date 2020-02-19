// "The Successful warrior is the average man with lazer like focus"
function triangle(num) {
  for (let i = 1; i <= num; i++){
    console.log(''.repeat(num - i) + '*'.repeat(i));
  }
}

triangle(5);
triangle(9);


