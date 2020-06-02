const readline = require('readline-sync');
const separateDigits = require('./separateDigits');
const isGuessedValid = require('./isGuessedVaild');
const axel = require('axel');

// asking user for guessed code
const guessedCode = (hMD) => {
  while (true) {
    axel.bg(48, 36, 102);
    axel.text(7, 28, '                        '); // clear the line
    axel.text(7, 28, 'Your code, please!');
    const guessed = readline.questionInt(' ');
    const guess = guessed.toString();
    if (guess.length === 4) {
      const sepped = separateDigits.digits(guessed); // a vélt kód szétbontása
      const validGuessed = isGuessedValid.isValid(sepped, hMD);
      if (!validGuessed) {
        return sepped;
      } else {
        //        axel.fg(255, 0, 0);
        axel.text(2, 25, 'You give not usable digits!');
        axel.text(2, 26, '4 digit number, please!');
        //        axel.fg(255, 255, 255);
      }
    } else {
      axel.fg(255, 0, 0);
      //      axel.text(60, 19, 'Kérem a lehetséges számjegyekből álló');
      axel.text(2, 26, '4 digit number, please!');
      //      axel.fg(255, 255, 255);
    }
  }
};

module.exports = {
  guessedCode
};
