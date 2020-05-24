const readline = require('readline-sync');

// asking user for guessed code
const guessedCode = () => {
  while (true) {
    const guessed = readline.questionInt('Kérem a 4 jegyű kódodat! ');
    console.log('Ezt írtad be: ', guessed);
    const guess = guessed.toString();
    console.log(guessed, guess.length);
    if (guess.length === 4) {
      return guessed;
    } else {
      console.log('Kérem 4 jegyű számot adjon meg!');
    }
  }
};

module.exports = {
  guessedCode
};
