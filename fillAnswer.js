const ground = require('./ground');

// fill answerArray with '_';
const fillAnswer = () => {
  for (let i = 1; i < 12; i++) {
    for (let j = 5; j < 9; j++) {
      ground.playboard[i][j] = ' ';
    }
  }
};

module.exports = {
  fillAnswer
};
