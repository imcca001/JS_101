let readline = require('readline-sync');

const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const INITIAL_MARKER = ' ';
const GAMES_TO_WIN = 3;
const WINNING_LINES = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
                      [1, 4, 7], [2, 5, 8], [3, 6, 9],
                      [1, 5, 9], [3, 5, 7]];

function getResponse(message) {
  prompt(message);
  return readline.question().toLowerCase().trim();
}

function chooseOrder() {
  let answer = getResponse('Would you like to go first (y or n)');

  while (!['y', 'n'].includes(answer[0].toLowerCase())) {
    answer = getResponse('Would You Like To Go First? Please enter (y or n)');
  }

  return answer[0].toLowerCase() === 'y' ? 'player' : 'computer';
}

function alternatePlayer(player) {
  return player === 'player' ? 'computer' : 'player';
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function detectWinner(board) {


for (let line = 0; line < WINNING_LINES.length; line++) {
  let [sq1, sq2, sq3] = WINNING_LINES[line];

  if (board[sq1] === HUMAN_MARKER &&
     board[sq2] === HUMAN_MARKER &&
     board[sq3] === HUMAN_MARKER
  ) {
    return 'Player';
  } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
  ) {
    return 'Computer';
   }
  }

  return null;
}

function detectChampion(score) {
  if (score.computer === GAMES_TO_WIN) {
    return 'Computer';
  } else if (score.human === GAMES_TO_WIN) {
    return 'Human';
  }
  return null;
}

function initializeScore() {
  let score = {
    computer: 0,
    human: 0
  };
  return score;
}

  function updateScore(board, score) {
    if (detectWinner(board) === 'Computer') {
      score.computer += 1;
    } else {
      score.human += 1;
    }
  }

  function displayScore(score) {
    prompt(`Human score: ${score.human}, Computer score: ${score.computer}`);
  }

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoice(board) {
  let square;

  while (true) {
    prompt(`Please choose one of these open squares ${joinOr(emptySquares(board))}`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt('That square is not empty, please choose again');
  }

  board[square] = HUMAN_MARKER;
}

function computerChoice(board) {
  let square;
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  if (squareAtRisk(board, HUMAN_MARKER)) {
    square = squareAtRisk(board, HUMAN_MARKER);
  } else if (squareAtRisk(board, COMPUTER_MARKER)) {
    square = squareAtRisk(board, COMPUTER_MARKER);
  } else if (board[5] === INITIAL_MARKER) {
    square = 5;
  } else {
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function joinOr(arr, delimiter = ', ', word = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    default:
      return arr.slice(0, arr.length - 1).join(delimiter) +
              `${delimiter}${word} ${arr[arr.length - 1]}`;
  }
}

function squareAtRisk(board, marker) {
  let winningLines = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
                        [1, 4, 7], [2, 5, 8], [3, 6, 9],
                        [1, 5, 9], [3, 5, 7]];

  for (let idx = 0; idx < winningLines.length; idx++) {
    let line = winningLines[idx];

    if (line.filter(num => board[num] === marker).length === 2) {
      return line.find(num => board[num] === ' ');
    }
  }

  return null;
}

function playerTurn(player, board, score) {
  if (player === 'player') {
    displayBoard(board);
    displayScore(score);
    playerChoice(board);

  } else {
    displayBoard(board);
    displayScore(score);
    computerChoice(board);
  }
}

let score = initializeScore();

while (true) {
  let board = initializeBoard();
  let player = chooseOrder();
  displayBoard(board);

  while (true) {
    playerTurn(player, board, score);
    player = alternatePlayer(player);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
    updateScore(board, score);
  } else {
    prompt("It's a tie!");
  }

  displayScore(score);

  if (detectChampion(score)) {
    prompt(`${detectChampion(score)} is the grand champion! 
            \n...Resetting Scores`);
    score.human = 0;
    score.computer = 0;
  }

  let answer = getResponse('Would you like to play again (y or n)');

  while (!['y', 'n'].includes(answer)) {
    answer = getResponse('Please enter a valid response.\nWould you like to play again? Enter (y or n)');
  }

  if (answer[0] !== 'y') break;
}

prompt('Thank you for playing Tic Tac Toe');