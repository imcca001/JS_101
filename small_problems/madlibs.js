let rlsync = require('readline-sync');
let noun = rlsync.question('Enter a noun: ');
let verb = rlsync.question('Enter a verb: ');
let adjective = rlsync.question('Enter an adjective: ');
let adverb = rlsync.question('Enter an adverb: ');

console.log(`Do you walk your ${adjective} ${noun} ${adverb}? That's hilarious!
The ${adjective} ${noun} ${verb} ${adverb} over the lazy ${noun}.
The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);
