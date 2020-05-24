const ground = require('./ground');

// put all the rows one row down
const oneRowDown = () => {
  for (let i = 11; i > 0; i--) {
    for (let j = 0; j < 4; j++) {
      ground.playboard[i][j] = ground.playboard[i - 1][j];
    }
    for (let j = 5; j < 9; j++) {
      ground.playboard[i][j] = ground.playboard[i - 1][j];
    }
  }
};

module.exports = {
  oneRowDown
};
