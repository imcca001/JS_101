let message = "The Flintstones Rock!";

/*
for (let i = 0; i < 10; i += 1) {
  console.log(message.padStart(message.length + i, ' '));
}
*/

for (let padding = 1; padding <= 10; padding++) {
  console.log(" ".repeat(padding) + message);
}
