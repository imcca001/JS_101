const readline = require('readline-sync');

const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
let yourScore = 0;
let computerScore = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function playGame(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard'))
     || (choice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock'))
     || (choice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard'))
     || (choice === 'lizard' && (computerChoice === 'paper' || computerChoice === 'spock'))
     || (choice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors'))) {
    return 1;
  } else if ((choice === 'rock' && (computerChoice === 'spock' || computerChoice === 'paper'))
     || (choice === 'paper' && (computerChoice === 'scissors' || computerChoice === 'lizard'))
     || (choice === 'scissors' && (computerChoice === 'spock' || computerChoice === 'rock'))
     || (choice === 'lizard' && (computerChoice === 'rock' || computerChoice === 'scissors'))
     || (choice === 'spock' && (computerChoice === 'paper' || computerChoice === 'lizard'))) {
    return 2;
  } else {
    return 3;
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  const randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  const computerChoice = VALID_CHOICES[randomIndex];


  let matchScore = playGame(choice, computerChoice);

  if (matchScore === 1) {
    console.log('You Win!');
    yourScore += 1;
  } else if (matchScore === 2) {
    console.log('Computer Wins!');
    computerScore += 1;
  } else {
    console.log("It's a tie!");
  }

  console.log(`Your score is ${yourScore}, the computer's score is ${computerScore}!`);

  if (yourScore === 5) {
    console.log('your the Grand Champion!');
  } else if (computerScore === 5) {
    console.log('The computer is the grand champion');
  }

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}
