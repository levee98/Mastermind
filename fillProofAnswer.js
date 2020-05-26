const ground = require('./ground');

// filling the guessed code in row 1
const fillProofedAnswer = (blk, wht, live) => {
  let digitNull = '';
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
  if (live > 2) {
    const colWid = 12 - live;
    digitNull = '0' + colWid;
    ground.playboard[1][4] = digitNull;
  } else {
    ground.playboard[1][4] = 12 - live;
  }
};

module.exports = {
  fillProofedAnswer
};
