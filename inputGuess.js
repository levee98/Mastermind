const readline = require('readline-sync');
const separateDigits = require('./separateDigits');
const isGuessedValid = require('./isGuessedVaild');
const axel = require('axel');

// asking user for guessed code
const guessedCode = (hMD) => {
  while (true) {
    axel.text(60, 15, '                                '); // clear the line
    axel.text(60, 15, 'Kérem a 4 jegyű kódodat!');
    const guessed = readline.questionInt(' ');
    const guess = guessed.toString();
    if (guess.length === 4) {
      const sepped = separateDigits.digits(guessed); // a vélt kód szétbontása
      const validGuessed = isGuessedValid.isValid(sepped, hMD);
      if (!validGuessed) {
        return sepped;
      } else {
        axel.fg(255, 0, 0);
        axel.text(60, 17, 'Nem a feltételeknek megfelelő számot adtál meg!');
        axel.text(60, 19, 'Kérem a lehetséges számjegyekből álló');
        axel.text(60, 21, '4 jegyű számot adjon meg!');
        axel.fg(255, 255, 255);
      }
    } else {
      axel.fg(255, 0, 0);
      axel.text(60, 19, 'Kérem a lehetséges számjegyekből álló');
      axel.text(60, 21, '4 jegyű számot adjon meg!');
      axel.fg(255, 255, 255);
    }
  }
};

module.exports = {
  guessedCode
};
