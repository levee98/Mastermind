const axel = require('axel');
const ground = require('./ground');

const printTable = (code, row, xMiddle) => {
  // fill code
  for (let i = 0; i < code.length; i++) {
    switch (code[i]) {
      case 1: // red
        axel.bg(255, 0, 0);
        axel.box((xMiddle - 24) + 6 * i, 3 + 3 * row, 4, 2);
        axel.bg(102, 102, 102);
        break;
      case 2: // green
        axel.bg(0, 255, 0);
        axel.box((xMiddle - 24) + 6 * i, 3 + 3 * row, 4, 2);
        axel.bg(102, 102, 102);
        break;
      case 3: // blue
        axel.bg(0, 0, 255);
        axel.box((xMiddle - 24) + 6 * i, 3 + 3 * row, 4, 2);
        axel.bg(102, 102, 102);
        break;
      case 4: // yellow
        axel.bg(255, 255, 0);
        axel.box((xMiddle - 24) + 6 * i, 3 + 3 * row, 4, 2);
        axel.bg(102, 102, 102);
        break;
      case 5: // brown
        axel.bg(102, 51, 0);
        axel.box((xMiddle - 24) + 6 * i, 3 + 3 * row, 4, 2);
        axel.bg(102, 102, 102);
        break;
      case 6: // pink
        axel.bg(255, 0, 127);
        axel.box((xMiddle - 24) + 6 * i, 3 + 3 * row, 4, 2);
        axel.bg(102, 102, 102);
        break;
    }
  }
  for (let i = 0; i < 4; i++) {
    const blkOrWht = ground.playboard[1][i + 5];
    switch (blkOrWht) {
      case 2: // black
        axel.bg(0, 0, 0);
        axel.box((xMiddle + 2) + 6 * i, 3 + 3 * row, 4, 2);
        axel.bg(102, 102, 102);
        break;
      case 1: // white
        axel.bg(255, 255, 255);
        axel.box((xMiddle + 2) + 6 * i, 3 + 3 * row, 4, 2);
        axel.bg(102, 102, 102);
        axel.bg(100, 100, 100);
        break;
    }
  }
};

module.exports = {
  printTable
};
