const table = require('table');
const inputGuess = require('./inputGuess');
const ground = require('./ground');
const fillMap = require('./fillMap');
const fillAnswer = require('./fillAnswer');
const generateCode = require('./generateCode');
const oneRowDown = require('./oneRowDown');
const fillGuessedNumber = require('./fillGuessedNumber');
const rigthNumPlace = require('./proofNumPlace');
const proofInclude = require('./proofInclude');
const fillProofAnswer = require('./fillProofAnswer');
const axel = require('axel');

// log.txt < 2;

// Játékterület létrehozása (4 x 12-es tömb)
const width = 9;
const height = 12;
const genCode = [];
const guess = '';
const howManyDigits = 6;

fillMap.fillMap();
fillAnswer.fillAnswer();
let live = 11;
const conf = [];
const genCo = generateCode.generateCode();
// console.log(genCode);
console.clear();
const play = table.table(ground.playboard, ground.config);
axel.text(0, 0, '');
console.table(play);
console.log(genCo);
axel.text(50, 2, ' Az életeid száma: ');
axel.fg(255, 0, 0);
console.log(live);
axel.fg(255, 255, 255);

while (true) {
  const inputedCode = inputGuess.guessedCode(howManyDigits); // a vélt kód beírása
  const answBlack = rigthNumPlace.proof(genCo, inputedCode);
  const answWhite = proofInclude.proofWhite(genCo, inputedCode);
  fillGuessedNumber.fillGuessedCode(inputedCode);
  fillProofAnswer.fillProofedAnswer(answBlack, answWhite, live);
  console.clear();
  const play = table.table(ground.playboard, ground.config);
  console.log(play);
  //  console.log(genCo);
  oneRowDown.oneRowDown();
  if (answBlack === 4) {
    axel.fg(255, 0, 0);
    axel.text(50, 13, 'Gratulálok! Kitaláltad a kombinációt!');
    axel.fg(255, 255, 255);
    console.log(genCo);
    axel.fg(255, 0, 0);
    axel.text(0, 30, '');
    console.log();
    break;
  }
  live--;
  axel.text(50, 2, ' Az életeid száma: ');
  axel.fg(255, 0, 0);
  console.log(live);
  axel.fg(255, 255, 255);
  if (live < 1) {
    axel.fg(255, 0, 0);
    axel.text(50, 10, 'Vége a játéknak, nincs több lehetőséged!');
    axel.text(50, 13, 'A helyes kombináció a következő lett volna: ');
    console.log(genCo);
    axel.fg(255, 0, 0);
    axel.text(0, 30, '');
    console.log();
    break;
  }
}
