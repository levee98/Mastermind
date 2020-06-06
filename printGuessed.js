const axel = require('axel');

const gameOverPrint = (code, rightMiddle) => {
  for (let i = 0; i < code.length; i++) {
    switch (code[i]) {
      case 1: // red
        axel.bg(255, 0, 0);
        axel.box((rightMiddle - 11) + 6 * i, 9, 4, 2);
        axel.bg(102, 102, 102);
        break;
      case 2: // green
        axel.bg(0, 255, 0);
        axel.box((rightMiddle - 11) + 6 * i, 9, 4, 2);
        axel.bg(102, 102, 102);
        break;
      case 3: // blue
        axel.bg(0, 0, 255);
        axel.box((rightMiddle - 11) + 6 * i, 9, 4, 2);
        axel.bg(102, 102, 102);
        break;
      case 4: // yellow
        axel.bg(255, 255, 0);
        axel.box((rightMiddle - 11) + 6 * i, 9, 4, 2);
        axel.bg(102, 102, 102);
        break;
      case 5: // brown
        axel.bg(102, 51, 0);
        axel.box((rightMiddle - 11) + 6 * i, 9, 4, 2);
        axel.bg(102, 102, 102);
        break;
      case 6: // pink
        axel.bg(255, 0, 127);
        axel.box((rightMiddle - 11) + 6 * i, 9, 4, 2);
        axel.bg(102, 102, 102);
        break;
    }
  }
};

module.exports = {
  gameOverPrint
};
