let rlsync = require('readline-sync');

let age = rlsync.question("What is your age? ");

let retirement = rlsync.question("At what age would you like to retire? ");

console.log(`It's 2020. You will retir in ${2020 + (retirement - age)}.`);
console.log(`you have only ${retirement - age} years of work to go!`);


