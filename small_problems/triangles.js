function triangle(angle1, angle2, angle3) {
  let angles = [angle1, angle2, angle3];
  if (isValid(angles)) {
    return getTriangleType(angles);
  } else {
    return "invalid";
  }
}

function isValid(angles) {
  let totalAngle = angles.reduce((total, angle) => total + angle);

  let allNonZero = angles.every(angle => angle > 0);

  return totalAngle === 180 && allNonZero;
}

function getTriangleType(angles) {
  if (angles.some(testRightTriangle)) {
    return "right";
  } else if (angles.every(testAcuteTriangle)) {
    return "acute";
  } else {
    return "obtuse";
  }
}

function testRightTriangle(angle) {
  return angle === 90;
}

function testAcuteTriangle(angle) {
  return angle < 90;
}


/* Imperative approach
function triangle(ang1, ang2, ang3) {
  if (((ang1 + ang2 + ang3) !== 180) || 
       (ang1 === 0 || ang2 === 0 || ang3 === 0)) {
    return "invalid";
  }
  if (ang1 === 90 || ang2 === 90 || ang3 === 90){
    return "right";
  } else if (ang1 > 90 || ang2 > 90 || ang3 > 90) {
    return "obtuse";
  } else {
    return "acute";
  }
}
*/

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"