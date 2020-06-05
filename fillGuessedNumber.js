const ground = require('./ground');

// filling the guessed code in row 1
const fillGuessedCode = (gueCo) => {
  const num = gueCo;
  for (let j = 0; j < 4; j++) {
    ground.playboard[1][j] = num[j];
  }
};

module.exports = {
  fillGuessedCode
};
