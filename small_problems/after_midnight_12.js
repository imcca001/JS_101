const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

function timeOfDay(minutes) {
  let deltaTime = minutes % MINUTES_PER_DAY;
  deltaTime < 0 ? deltaTime = deltaTime + 1440 : deltaTime;

  let deltaHours = Math.floor(deltaTime / MINUTES_PER_HOUR);
  let deltaMinutes = deltaTime % MINUTES_PER_HOUR;

  return formatTime(deltaHours, deltaMinutes);
}

function formatTime(hours, minutes) {
  String(hours).length === 1 ? hours = '0' + String(hours) : hours = String(hours);
  String(minutes).length === 1 ? minutes = '0' + String(minutes) : minutes = String(minutes);

  return hours + ':' + minutes;
}






console.log(timeOfDay(0)); // === "00:00");
console.log(timeOfDay(-3)); // === "23:57");
console.log(timeOfDay(35)); // === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");