const readline = require('readline-sync');
const separateDigits = require('./separateDigits');
const isGuessedValid = require('./isGuessedVaild');
const axel = require('axel');

// asking user for guessed code
const guessedCode = (hMD, xMiddle) => {
  const leftMiddle = (xMiddle - 27) / 2;

  while (true) {
    axel.bg(48, 36, 102);
    axel.text(leftMiddle - 12, 16, '                        '); // clear the line
    axel.text(leftMiddle - 12, 16, 'Your code, please!');
    const guessed = readline.questionInt(' ');
    const guess = guessed.toString();
    axel.bg(0, 0, 0);
    axel.text(leftMiddle - 14, 18, '                            ');
    axel.text(leftMiddle - 14, 19, '                            ');
    if (guess.length === 4) {
      const sepped = separateDigits.digits(guessed); // a vélt kód szétbontása
      const validGuessed = isGuessedValid.isValid(sepped, hMD);
      if (!validGuessed) {
        return sepped;
      } else {
        axel.bg(255, 0, 0);
        axel.text(leftMiddle - 14, 18, 'You give not usable digits!');
        axel.text(leftMiddle - 12, 19, '4 digit number, please!');
        //        axel.fg(255, 255, 255);
      }
    } else {
      axel.bg(255, 0, 0);
      axel.text(leftMiddle - 12, 19, '4 digit number, please!');
      //      axel.fg(255, 255, 255);
    }
  }
};

module.exports = {
  guessedCode
};
