const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

function afterMidnight(time) {
  if (['24:00', '00:00'].includes(time)) {
    return 0;
  }

  return converToMinutes(time);
}

function beforeMidnight(time) {
  if (['24:00', '00:00'].includes(time)) {
    return 0;
  }
  
  return 1440 - converToMinutes(time);
}

function converToMinutes(time) {
  let timeList = time.split(':');
  return Number(timeList[0]) * MINUTES_PER_HOUR + Number(timeList[1]);
}







console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);