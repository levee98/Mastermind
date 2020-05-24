const ground = require('./ground');

// filling the guessed code in row 1
const fillGuessedCode = (gu) => {
  const szam = gu;
  for (let j = 0; j < 4; j++) {
    ground.playboard[1][j] = szam[j];
  }
};

module.exports = {
  fillGuessedCode
};
