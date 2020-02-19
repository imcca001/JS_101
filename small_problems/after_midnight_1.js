const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

function leadingZero(timeUnit) {
  return timeUnit < 10 ? `0${timeUnit}` :  String(timeUnit);
}

function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}

function timeOfDay(deltaTime) {
  if (deltaTime < 0){
    deltaTime = (deltaTime % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    deltaTime = deltaTime % MINUTES_PER_DAY;
  }
  
  let hours = Math.floor(deltaTime / MINUTES_PER_HOUR);
  let minutes = deltaTime % MINUTES_PER_HOUR;

  return formatTime(hours, minutes);
}

// console.log(timeOfDay(0) === "00:00");
// console.log(timeOfDay(-3) === "23:57");
//console.log(timeOfDay(35) === "00:35");
//console.log(timeOfDay(-1437) === "00:03");
//console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");