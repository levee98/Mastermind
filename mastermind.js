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
const printTable = require('./printTable');

// log.txt < 2;

// Játékterület létrehozása (4 x 12-es tömb)
// const width = 9;
// const height = 12;
const howManyDigits = 6;
let rowForPrint = 0;

fillMap.fillMap();
fillAnswer.fillAnswer();
let live = 11;
const conf = [];
const genCo = generateCode.generateCode();
console.clear();
// const play = table.table(ground.playboard, ground.config);
axel.text(0, 0, '');
// console.table(play);
console.log(genCo); // printing out generated code - befor ending shoud be commented!

// save in separate file as starting printOuts!
axel.text(60, 3, ' 1 - Piros ');
axel.text(60, 4, ' 2 - Kék ');
axel.text(60, 5, ' 3 - Zöld ');
axel.text(60, 6, ' 4 - Sárga ');
axel.text(60, 7, ' 5 - Barna ');
axel.text(60, 8, ' 6 - Pink ');
axel.text(60, 10, ' A fekete jelentése: jó kód jó helyen, ');
axel.text(60, 11, ' A fehér jelentése: jó kód nem jó helyen. ');

axel.text(60, 13, ' Az életeid száma: ');
axel.fg(255, 0, 0);
console.log(live);
axel.fg(255, 255, 255);

while (true) {
  const inputedCode = inputGuess.guessedCode(howManyDigits); // a vélt kód beírása
  const answBlack = rigthNumPlace.proof(genCo, inputedCode);
  const answWhite = proofInclude.proofWhite(genCo, inputedCode);
  fillGuessedNumber.fillGuessedCode(inputedCode);
  fillProofAnswer.fillProofedAnswer(answBlack, answWhite, live);
  // console.clear();
  printTable.printTable(inputedCode, rowForPrint);
  rowForPrint++;
  //  const play = table.table(ground.playboard, ground.config);
  //  console.log(play);
  oneRowDown.oneRowDown();
  if (answBlack === 4) { // You Win! What to do (into a separated file!)
    axel.fg(255, 0, 0);
    axel.text(60, 13, 'Gratulálok! Kitaláltad a kombinációt!');
    axel.fg(255, 255, 255);
    console.log(genCo);
    axel.fg(255, 0, 0);
    axel.text(0, 30, '');
    console.log();
    break;
  }
  live--;
// calling starting printOuts!! 
  axel.text(60, 3, ' 1 - Piros ');
  axel.text(60, 4, ' 2 - Kék ');
  axel.text(60, 5, ' 3 - Zöld ');
  axel.text(60, 6, ' 4 - Sárga ');
  axel.text(60, 7, ' 5 - Barna ');
  axel.text(60, 8, ' 6 - Pink ');
  axel.text(60, 10, ' A fekete jelentése: jó kód jó helyen, ');
  axel.text(60, 11, ' A fehér jelentése: jó kód nem jó helyen. ');

  axel.text(60, 13, ' Az életeid száma: ');
  axel.fg(255, 0, 0);
  console.log(live);
  axel.fg(255, 255, 255);
  if (live < 1) { // into a separate file, what if game over!
    axel.fg(255, 0, 0);
    axel.text(60, 10, 'Vége a játéknak, nincs több lehetőséged!');
    axel.text(60, 13, 'A helyes kombináció a következő lett volna: ');
    console.log(genCo);
    axel.fg(255, 0, 0);
    axel.text(0, 30, '');
    console.log();
    break;
  }
}
