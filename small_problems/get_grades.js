function getGrade(grade1, grade2, grade3) {
  let total = Math.floor((grade1 + grade2 + grade3) / 3);
  if (total >= 90 && total <= 100) {
    return 'A';
  } else if (total >= 80 && total <= 90) {
    return 'B';
  } else if (total >= 70 && total <= 80) {
    return 'C';
  } else if (total >= 60 && total <= 70) {
    return 'D';
  } else if (total >= 50 && total <= 60) {
    return 'F';
  }
}


console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"