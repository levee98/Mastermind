const ground = require('./ground');

// fill map with ' ';
const fillMap = () => {
  for (let i = 1; i < 12; i++) {
    for (let j = 0; j < 4; j++) {
      ground.playboard[i][j] = ' ';
    }
  }
};

module.exports = {
  fillMap
};
