let buffer1 = [1,2,3,4,5];

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}


let buffer2 = [1,2,3,4,5];

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

console.log(addToRollingBuffer1(buffer1, 5, 'a'));
console.log(buffer1);
console.log(addToRollingBuffer2(buffer2, 5, 'a'));
console.log(buffer2);


console.log(rps("paper", "rock"));
