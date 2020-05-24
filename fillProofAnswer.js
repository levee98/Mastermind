const ground = require('./ground');

// filling the guessed code in row 1
const fillProofedAnswer = (blk, wht) => {
  const whit = wht - blk;
  for (let j = 0; j < blk; j++) {
    ground.playboard[1][j + 5] = 2;
  }
  for (let j = 0; j < whit; j++) {
    ground.playboard[1][j + blk + 5] = 1;
  }
  for (let j = 0; j < 4 - (blk + whit); j++) {
    ground.playboard[1][j + blk + whit + 5] = ' ';
  }
};

module.exports = {
  fillProofedAnswer
};
