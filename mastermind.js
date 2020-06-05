const inputGuess = require('./inputGuess');
// const readline = require('readline-sync');
const fillMap = require('./fillMap');
const fillAnswer = require('./fillAnswer');
const generateCode = require('./generateCode');
const oneRowDown = require('./oneRowDown');
const fillGuessedNumber = require('./fillGuessedNumber');
const rigthNumPlace = require('./proofNumPlace');
const proofInclude = require('./proofInclude');
const fillProofAnswer = require('./fillProofAnswer');
const axel = require('axel');
const printTable = require('./printTable');
const instruct = require('./choisesInfo');
const playboard = require('./printPlayingBoard');
const gameOver = require('./gameOver');

// building playground (4 x 12 array)
// const width = 9;
// const height = 12;
const howManyDigits = 6;
let rowForPrint = 0;
// find out terminal resolution (x, y)
const xMiddle = process.stdout.columns / 2;
fillMap.fillMap();
fillAnswer.fillAnswer();
let live = 2;
const genCo = generateCode.generateCode();
console.clear();
axel.text(0, 0, '');
// const play = table.table(ground.playboard, ground.config);
// console.table(play);
// console.log(genCo); // printing out generated code - befor ending shoud be commented!

// save in separate file as starting printOuts!
playboard.playBoard(xMiddle);
instruct.instruct(live, xMiddle);

while (true) {
//  console.log(genCo);
  const inputedCode = inputGuess.guessedCode(howManyDigits, xMiddle);
  const answBlack = rigthNumPlace.proof(genCo, inputedCode);
  const answWhite = proofInclude.proofWhite(genCo, inputedCode);
  fillGuessedNumber.fillGuessedCode(inputedCode);
  fillProofAnswer.fillProofedAnswer(answBlack, answWhite, live);
  printTable.printTable(inputedCode, rowForPrint, xMiddle);
  rowForPrint++;
  //  const play = table.table(ground.playboard, ground.config);
  //  console.log(play);
  oneRowDown.oneRowDown();
  if (answBlack === 4) { // You Win!
    gameOver.win(genCo);
    break;
  }
  live--;
  instruct.instruct(live, xMiddle);

  if (live < 1) { // You loose
    gameOver.loose(genCo);
    break;
  }
}
