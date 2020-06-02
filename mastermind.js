// const table = require('table');
const inputGuess = require('./inputGuess');
// const ground = require('./ground');
const readline = require('readline-sync');
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

// log.txt < 2;

// Játékterület létrehozása (4 x 12-es tömb)
// const width = 9;
// const height = 12;
const howManyDigits = 6;
let rowForPrint = 0;
// find out terminal resolution (x, y)
const xMiddle = process.stdout.columns / 2;
fillMap.fillMap();
fillAnswer.fillAnswer();
let live = 2;
// const conf = [];
const genCo = generateCode.generateCode();
console.clear();
// const play = table.table(ground.playboard, ground.config);
axel.text(0, 0, '');
// console.table(play);
// console.log(genCo); // printing out generated code - befor ending shoud be commented!
// Print board
axel.bg(69, 69, 69);
axel.box(xMiddle - 27, 1, 54, 40);
axel.text(xMiddle - 19, 1, 'Guessed code');
axel.text(xMiddle + 8, 1, 'A n s w e r');
axel.bg(102, 102, 102);
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 11; j++) {
    axel.scrub((xMiddle - 24) + 6 * i, 3 + 3 * j, 4, 2);
    axel.scrub((xMiddle + 2) + 6 * i, 3 + 3 * j, 4, 2);
  }
}
// banner printOut
axel.bg(0, 0, 0);
axel.box(xMiddle + 28, 1, 37, 40); // box on the rigth side for the banner
axel.box(1, 1, 36, 40); // box on the left for the instructions
axel.fg(255, 255, 255);
axel.text(93, 11, '                    _');
axel.text(93, 12, '    /\\/\\   __ _ ___| |_ ___ _ __');
axel.text(93, 13, '   /    \\ / _` / __| __/ _ \\ \'__|');
axel.text(93, 14, '  / /\\/\\ \\ (_| \\__ \\ ||  __/ |');
axel.text(93, 15, '  \\/    \\/\\__,_|___/\\__\\___|_|');
//
axel.text(93, 19, '             _           _');
axel.text(93, 20, '       /\\/\\ (_)_ __   __| |');
axel.text(93, 21, '      /    \\| | \'_ \\ / _` |');
axel.text(93, 22, '     / /\\/\\ \\ | | | | (_| |');
axel.text(93, 23, '     \\/    \\/_|_| |_|\\__,_|');
axel.text(103, 33, 'Coded by Levente');
//

// save in separate file as starting printOuts!
instruct.instruct(live);

while (true) {
  const inputedCode = inputGuess.guessedCode(howManyDigits); // a vélt kód beírása
  const answBlack = rigthNumPlace.proof(genCo, inputedCode);
  const answWhite = proofInclude.proofWhite(genCo, inputedCode);
  fillGuessedNumber.fillGuessedCode(inputedCode);
  fillProofAnswer.fillProofedAnswer(answBlack, answWhite, live);
  // console.clear();
  printTable.printTable(inputedCode, rowForPrint, xMiddle);
  rowForPrint++;
  //  const play = table.table(ground.playboard, ground.config);
  //  console.log(play);
  oneRowDown.oneRowDown();
  if (answBlack === 4) { // You Win! What to do (into a separated file!)
    axel.fg(255, 0, 0);
    axel.text(93, 2, 'Congratulation!');
    axel.text(93, 4, ':) Y O U   W I N ! :)');
    axel.text(93, 6, 'You found out the combination!');
    axel.fg(255, 255, 255);
    axel.text(93, 8, '');
    console.log(genCo);
    axel.fg(255, 0, 0);
    axel.text(0, 30, '');
    console.log();
    axel.text(7, 30, '');
    const key = readline.keyInPause();
    console.clear();
    break;
  }
  live--;
  instruct.instruct(live);

  if (live < 1) { // into a separate file, what if game over!
    axel.fg(255, 0, 0);
    axel.text(93, 1, 'Game Over!');
    axel.text(93, 3, 'You have no more lives!');
    axel.text(93, 5, 'The rigth color and place');
    axel.text(93, 7, 'combination was: ');
    axel.text(93, 9, '');
    console.log(genCo);
    axel.fg(255, 0, 0);
    axel.text(0, 30, '');
    console.log();
    axel.text(7, 30, '');
    const key = readline.keyInPause();
    console.clear();
    break;
  }
}
