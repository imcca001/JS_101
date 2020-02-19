let rlSync = require("readline-sync");

const SQMETERS_TO_SQFEET = 10.7639;

console.log("Enter the length of the room in meters");
let length = rlSync.prompt();
length = parseInt(length, 10);

console.log("Enter the width of the room in meters: ");
let width = rlSync.prompt();
width = parseInt(width, 10);

let areaInMeters = (length * width).toFixed(2);

let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET).toFixed(2);

console.log(`The area of the room is ${areaInMeters} square meters (${areaInFeet} square feet).`);