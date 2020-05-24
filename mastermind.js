const table = require('table');
const szamjegybontas = require('./szamjegybontas');
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

// Játékterület létrehozása (4 x 12-es tömb)
const width = 9;
const height = 12;
const genCode = [];
const guess = '';

fillMap.fillMap();
fillAnswer.fillAnswer();
let live = 11;
const genCo = generateCode.generateCode();
// console.log(genCode);
console.clear();
const play = table.table(ground.playboard, ground.config);
console.log(play);
console.log(genCo);
console.log('Az életeid száma: ', live);

while (true) {
  const beirKod = inputGuess.guessedCode(); // a vélt kód beírása
  const bontott = szamjegybontas.szamjegy(beirKod); // a vélt kód szétbontása
  const answBlack = rigthNumPlace.proof(genCo, bontott);
  const answWhite = proofInclude.proofWhite(genCo, bontott);
  fillGuessedNumber.fillGuessedCode(bontott);
  fillProofAnswer.fillProofedAnswer(answBlack, answWhite);
  console.clear();
  const play = table.table(ground.playboard, ground.config);
  console.log(play);
  console.log(genCo);
  oneRowDown.oneRowDown();
  if (answBlack === 4) {
    console.log('Gratulálok! Kitaláltad a kombinációt!');
    break;
  }
  live--;
  console.log('Az életeid száma: ', live);
  if (live < 1) {
    console.log('Vége a játéknak, nincs több lehetőséged!');
    break;
  }
}
