const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const MAX_SCORE = 3;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [3, 5, 7], [1, 5, 9]             // diagonals
];
const FIRST_TURN = "choose";

function prompt(message) {
  return console.log(`=> ${message}`);
}

function displayBoard(board) {
  console.clear();
  prompt("Welcome to Tic Tac Toe!");

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);

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
}

function initializeScore() {
  let scores = {
    player: 0,
    computer: 0
  };
  return scores;
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square < 10; square++) {
    board[square] = INITIAL_MARKER;
  }

  return board;
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

/*
input: board object, marker
output: square(integer) position on board to defend
Explicit Requirements:
  - Must return a square(key) that can be used as a return value for
    computerChoosesSquare
  - Will only determine a position to defend/attack when there is 2 consecutive
    squares marked
Algorithm:
- Declare a for loop to iterate over the WINNING_LINES collection
  - Declare line variable to current working line in WINNING_LINES
  - filter the sub-array for marked values
  - conditional check if the filtered sub-array is length of 2
  - conditional check for an empty space ' ' on board
  - set square variable to value of empty space on board if available
- End program
*/
function computerDeterminesOptimalMove(board, marker) {
  let square = null;
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    let markedSquares = line.filter(square => board[square] === marker);
    if (markedSquares.length === 2) {
      square = line.find(square => board[square] === INITIAL_MARKER);
      if (square !== undefined) return square;
    }
  }
  return square;
}

function computerMiddleMove(board) {
  return (board['5'] === INITIAL_MARKER) ? '5' : null;
}

function computerDefensiveMove(board) {
  return computerDeterminesOptimalMove(board, HUMAN_MARKER);
}

function computerOffensiveMove(board) {
  return computerDeterminesOptimalMove(board, COMPUTER_MARKER);
}

function computerRandomMove(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  return emptySquares(board)[randomIndex];
}

function computerChoosesSquare(board) {
    let square = computerMiddleMove(board)  ||
                computerOffensiveMove(board) ||
                computerDefensiveMove(board) ||
                computerRandomMove(board);

    board[square] = COMPUTER_MARKER;
}

function emptySquares(board) {
  return Object.keys(board).filter(square => board[square] === INITIAL_MARKER);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board); // !! converts truthy and falsy values to a boolean
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
        board[sq1] === HUMAN_MARKER &&
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

function joinOr(arr, delimeter = ', ', joiningWord = 'or') {
  if (arr.length === 0) {
    return '';
  } else if (arr.length === 1) {
    return arr[0];
  } else if (arr.length === 2) {
    return `${arr[0]} ${joiningWord} ${arr[1]}`;
  }

  return `${arr.slice(0, -1).join(delimeter)}, ${joiningWord} ${arr.slice(-1)[0]}`;
}

function displayScores(scores) {
  console.log('');
  console.log(`*****Scores*****`);
  console.log(`Player score: ${scores.player}`);
  console.log(`Computer score: ${scores.computer}`);
  console.log('');
}

function displayRoundOver(board) {
  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else if (boardFull(board)) {
    prompt("It's a tie!");
  }
}

function incrementScores(board, scores) {
  let winner = detectWinner(board);
  if (winner === 'Player') {
    scores.player += 1;
  } else if (winner === 'Computer') {
    scores.computer += 1;
  }
}

function validPrompt() {
  let answer = readline.question().toLowerCase();
  while (!['y', 'n', 'yes', 'no'].includes(answer)) {
    prompt('Sorry, that is an invalid choice.');
    answer = readline.question().toLowerCase();
  }
  return answer;
}

function playAgain() {
  prompt('Would you like to start another game? yes(y) or no(n)');
  if (!['y', 'yes'].includes(validPrompt())) return false;
  return true;
}

function playNextRound() {
  prompt('Play the next round? yes(y) or no(n)');
  if (!['y', 'yes'].includes(validPrompt())) return false;
  return true;
}

function choosePlayer() {
  if (FIRST_TURN === 'choose') {
    prompt('Who should go first? (player, computer)');
    let answer = readline.question();
    while (!['computer', 'player', 'c', 'p'].includes(answer)) {
      prompt('Sorry, that is not a valid choice.');
      answer = readline.question();
    }
    if (answer[0] !== 'p') {
      return 'computer';
    }
  }
  return FIRST_TURN;
}

function alternatePlayer(currentPlayer) {
  return currentPlayer === 'player' ? 'computer' : 'player';
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'player') {
    playerChoosesSquare(board);
  } else if (currentPlayer === 'computer') {
    computerChoosesSquare(board);
  }
}

function isGameOver(scores) {
  return scores.player === MAX_SCORE || scores.computer === MAX_SCORE;
}

function displayGameOver(scores) {
  console.log('');
  console.log("*****GAME OVER*****");
  console.log("--Final Scores--");
  console.log(`Player score: ${scores.player}`);
  console.log(`Computer score: ${scores.computer}`);
  console.log('');
}

function updateGame(board, scores, currentPlayer) {
  startRound(board, scores, currentPlayer);
  incrementScores(board, scores);
  displayBoard(board);
}

function startRound(board, scores, currentPlayer) {
  while (true) {
    displayBoard(board);
    displayScores(scores);

    chooseSquare(board, currentPlayer);
    if (someoneWon(board) || boardFull(board)) break;
    currentPlayer = alternatePlayer(currentPlayer);
  }
}

function startGame() {
  let currentPlayer = choosePlayer();
  let scores = initializeScore();

  while (true) {
    let board = initializeBoard();
    updateGame(board, scores, currentPlayer);

    if (isGameOver(scores)) break;
    displayRoundOver(board);
    if (!playNextRound(scores)) break;
  }
  displayGameOver(scores);
}

while (true) {
  startGame();

  if (!playAgain()) {
    console.clear();
    break;
  }
}

prompt("Thanks for playing Tic Tac Toe!");