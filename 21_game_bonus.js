const readline = require('readline-sync');

const SUITS = ['H', 'D', 'S', 'C'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K'];
const DEALER_MAX = 17;
const PLAYER_MAX = 21;

function prompt(message) {
  console.log(`=> ${message}`);
}

function shuffle(array) {
  for (let first = array.length - 1; first > 0; first--) {
    let second = Math.floor(Math.random() * (first + 1));
    [array[first], array[second]] = [array[second], array[first]];
  }

  return array;
}

function initializeDeck() {
  let deck = [];

  for (let suitIndex = 0; suitIndex < SUITS.length; suitIndex++) {
    let suit = SUITS[suitIndex];

    for (let valueIndex = 0; valueIndex < VALUES.length; valueIndex++) {
      let value = VALUES[valueIndex];
      deck.push([suit, value]);
    }
  }

  return shuffle(deck);
}

function total(cards) {

  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === "A") {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  values.filter(value => value === "A").forEach(_ => {
    if (sum > 21) sum -= 10;
  });

  return sum
}

function busted(total) {
  return total > 21;
}

function detectResult(dealerSum, playerSum) {
  let playerCardSum = playerSum;
  let dealerCardSum = dealerSum;

  if (playerCardSum > PLAYER_MAX) {
    return 'PLAYER_BUSTED';
  } else if (dealerCardSum > PLAYER_MAX) {
    return 'DEALER_BUSTED';
  } else if (dealerCardSum < playerCardSum) {
    return 'PLAYER';
  } else if (dealerCardSum > playerCardSum) {
    return 'DEALER';
  } else {
    return 'TIE';
  }
}

function displayResults(dealerCards, playerCards) {
  let results = detectResult(dealerCards, playerCards);
  displayCards(dealerCards, playerCards);

  switch (results) {
    case 'PLAYER_BUSTED':
      prompt('You busted! Dealer Wins!');
      break;
    case 'DEALER_BUSTED':
      prompt('Dealer busted, you win!');
      break;
    case 'PLAYER':
      prompt('You Win!');
      break;
    case 'DEALER':
      prompt('Dealer wins!');
      break;
    case 'TIE':
      prompt("It's a tie");
      break;
  }
}

function playAgain() {
  console.log('--------------');
  prompt('Do you want to play again (y or n)');
  let answer = readline.question();
  return answer.toLowerCase()[0] === 'y';
}

function popTwoFromDeck(deck) {
  return [deck.pop(), deck.pop()];
}

function hand(cards) {
  return cards.map(card => `${card[1]}${card[0]}`).join(' ');
}

function displayCards(dealerCards, playerCards) {
    console.log('==============');
    prompt(`Dealer has ${dealerCards}, for a total of: ${total(dealerCards)}`);
    prompt(`Player has ${playerCards}, for a total of: ${total(playerCards)}`);
    console.log('==============');
  }

while (true) {
  prompt('Welcome to Twenty-One!');

  let deck = initializeDeck();
  let playerCards = [];
  let dealerCards = [];

  playerCards.push(...popTwoFromDeck(deck));
  dealerCards.push(...popTwoFromDeck(deck));

  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);

  prompt(`Dealer has ${dealerCards[0]} and ?`);
  prompt(`You have: ${playerCards[0]} and ${playerCards[1]}, for a total of ${playerTotal}.`);

  while (true) {
    let playerTurn;
    while (true) {
      prompt('Would you like to (h)it or (s)tay?');
      playerTurn = readline.question().toLowerCase();
      if (['h', 's'].includes(playerTurn)) break;
      prompt("Sorry, must enter 'h' or 's'.");
    }

    if (playerTurn === 'h') {
      playerCards.push(deck.pop());
      playerTotal = total(playerCards);
      prompt('You chose to hit!');
      prompt(`Your cards are now: ${hand(playerCards)}`);
      prompt(`Your total is now: ${playerTotal}`);
    }

    if (playerTurn === 's' || busted(playerCards)) break;
  }

  if (busted(playerCards)) {
    displayResults(dealerCards, playerCards);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    prompt(`You stayed at ${playerTotal}`);
  }

  prompt('Dealer turn...');

  while (dealerTotal < DEALER_MAX) {
    prompt(`Dealer hits!`);
    dealerCards.push(deck.pop());
    dealerTotal = total(dealerCards);
    prompt(`Dealer's cards are now: ${hand(dealerCards)}`);
  }

  if (busted(dealerCards)) {
    prompt(`Dealer total is now: ${dealerTotal}`);
    displayResults(dealerCards, playerCards);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    prompt(`Dealer stays at ${dealerTotal}`);
  }

  displayResults(dealerCards, playerCards);

  if (!playAgain()) break;
}