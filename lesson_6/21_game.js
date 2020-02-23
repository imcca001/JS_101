let readline = require('readline-sync');

const SUITS = ['S', 'D', 'C', 'H'];
const VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

let playerCards, dealerCards, deck, answer, dealerStay = false, playerStay= false, play = true;

function prompt(msg) {
  console.log(`\n=> ${msg}`);
}

function shuffle(array) {
  let otherIndex;
  for (let index = array.length - 1; index > 0; index--) {
    otherIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
  }
}

function getDeck() {
  let idx;
  let jdx;
  let deck = [];

  for (idx = 0; idx < SUITS.length; idx++) {

    for (jdx = 0; jdx < VALUES.length; jdx++) {

      let card = [SUITS[idx], VALUES[jdx]];
      deck.push(card);
    }
  }

  return deck;
}

function total(cards) {
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === 'A') {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  values.filter(value => value === 'A').forEach(_ => {
    if (sum > 21) sum -= 10;
  });

  return sum;
}

function busted(cards) {
  return total(cards) > 21;
}

function playerTurn() {
  while (true) {
    displayCards();
    prompt("hit or stay?");
    let answer = readline.question();
    if (answer[0].toLowerCase() === 'h') {
      playerCards.push(getHit(deck));
    }
    if (answer === 'stay' || busted(playerCards)) break;
  }

  if (busted(playerCards)) {
    console.log('\nYou Busted and The Dealer Won!');

  } else {
    console.log("\nYou Chose To Stay!");
    playerStay = true;
  }
}

function dealerTurn() {
  console.log('Dealer turn');
  while (true) {
    if (total(dealerCards) < 17 ) {
      console.log('\ndealer hit');
      dealerCards.push(getHit(deck));
    }
    if (busted(dealerCards) || total(dealerCards) >= 17) break;
  }

  if (busted(dealerCards)) {
    console.log('\nDealer Busted, You Won!');

  } else {
    console.log('\nDealer chose to stay!');
    dealerStay = true;
  }
}

function displayCards() {
  console.log(`\nThe dealer has ${total(dealerCards)}, You have ${total(playerCards)}`);
}

function deal(deck) {
  return [deck.pop(), deck.pop()];
}

function getHit(deck) {
  return deck.pop();
}

function displayWinner(person1, cards1, person2, cards2) {
  if (total(cards1) > total(cards2) || (total(cards1) === 21) ) {
    console.log(`The ${person1} is the winner!`);
  } else if (total(cards2) > total(cards1) || (total(cards2) === 21)) {
    console.log(`The ${person2} is the winner!`);
  }
}

while (play) {
  deck = getDeck();
  shuffle(deck);
  playerCards = deal(deck);
  dealerCards = deal(deck);

  while (!busted(playerCards) && !busted(dealerCards)) {
    playerTurn();
    if (busted(playerCards) || total(playerCards) === 21) break;

    dealerTurn();
    if (busted(dealerCards) || total(dealerCards) === 21) break;

    displayWinner('dealer', dealerCards, 'player', playerCards);

    if (playerStay && dealerStay) break;
  }

  prompt('would you like to play again? y or n');
  answer = readline.question();

  if (answer === 'n') {
    play = false;
  }
}

console.log('Thank you for playing this joyous game!');