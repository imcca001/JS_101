function triangle(side1, side2, side3) {
  let perimeter = side1 + side2 + side3;
  let longest = Math.max(side1, side2, side3);
  let shortest = Math.min(side1, side2, side3);
  let middle = perimeter - longest - shortest;

  if (isValid(shortest, middle, longest)) {
    return getTriangleType(side1, side2, side3);
  } else {
    return 'invalid';
  }
}

function isValid(shortest, middle, longest) {
  return shortest > 0 && shortest + middle > longest;
}

function getTriangleType(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    return 'equilateral';
  } else if (side1 === side2 || side1 == side3 || side2 === side3) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

/*
function triangle(x, y, z) {
  if (x === 0 || y === 0 || z === 0) {
    return 'invalid';
  } else if (z > x + y || y > z + x || x > z + y) {
    return 'invalid';
  }

  if (x === y && y === z) {
    return 'equilateral';
  } else if (x === z || x === y || y === z) {
    return 'isoceles';
  } else {
    return 'scalene';
  }
}
*/

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
