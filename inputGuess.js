const readline = require('readline-sync');
const separateDigits = require('./separateDigits');
const isGuessedValid = require('./isGuessedVaild');
const axel = require('axel');

// asking user for guessed code
const guessedCode = (hMD) => {
  while (true) {
    axel.text(50, 5, '                                '); // clear the line
    axel.text(50, 5, 'Kérem a 4 jegyű kódodat!');
    const guessed = readline.questionInt(' ');
    //    console.log('Ezt írtad be: ', guessed);
    const guess = guessed.toString();
    // axel.text(50, 7, 'Beírt: ', guessed, guess.length);
    if (guess.length === 4) {
      const sepped = separateDigits.digits(guessed); // a vélt kód szétbontása
      const validGuessed = isGuessedValid.isValid(sepped, hMD);
      if (!validGuessed) {
        return sepped;
      } else {
        axel.fg(255, 0, 0);
        axel.text(50, 7, 'Nem a feltételeknek megfelelő számot adtál meg!');
        axel.text(50, 9, 'Kérem a lehetséges számjegyekből álló');
        axel.text(50, 11, '4 jegyű számot adjon meg!');
        axel.fg(255, 255, 255);
      }
    } else {
      axel.fg(255, 0, 0);
      axel.text(50, 9, 'Kérem a lehetséges számjegyekből álló');
      axel.text(50, 11, '4 jegyű számot adjon meg!');
      axel.fg(255, 255, 255);
    }
  }
};

module.exports = {
  guessedCode
};
