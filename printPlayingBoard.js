const axel = require('axel');

// Print board
const playBoard = (xMiddle) => {
  axel.bg(69, 69, 69);
  axel.box(xMiddle - 27, 1, 54, 40);
  axel.text(xMiddle - 19, 1, 'Guessed code');
  axel.text(xMiddle + 8, 1, 'A n s w e r');
  axel.bg(102, 102, 102);
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 11; j++) {
      axel.scrub((xMiddle - 24) + 6 * i, 3 + 3 * j, 4, 2);
      axel.scrub((xMiddle + 2) + 6 * i, 3 + 3 * j, 4, 2);
    }
  }
  // banner printOut
  const rigthMiddle = ((xMiddle + 27) + xMiddle * 2) / 2;
  axel.bg(0, 0, 0);
  axel.box(xMiddle + 27, 1, (xMiddle * 2) - (xMiddle + 26), 40); // box on the rigth side for the banner
  axel.box(1, 1, xMiddle - 28, 40); // box on the left for the instructions
  axel.fg(255, 255, 255);
  axel.text(rigthMiddle - 17, 13, '                    _');
  axel.text(rigthMiddle - 17, 14, '    /\\/\\   __ _ ___| |_ ___ _ __');
  axel.text(rigthMiddle - 17, 15, '   /    \\ / _` / __| __/ _ \\ \'__|');
  axel.text(rigthMiddle - 17, 16, '  / /\\/\\ \\ (_| \\__ \\ ||  __/ |');
  axel.text(rigthMiddle - 17, 17, '  \\/    \\/\\__,_|___/\\__\\___|_|');

  axel.text(rigthMiddle - 17, 20, '             _           _');
  axel.text(rigthMiddle - 17, 21, '       /\\/\\ (_)_ __   __| |');
  axel.text(rigthMiddle - 17, 22, '      /    \\| | \'_ \\ / _` |');
  axel.text(rigthMiddle - 17, 23, '     / /\\/\\ \\ | | | | (_| |');
  axel.text(rigthMiddle - 17, 24, '     \\/    \\/_|_| |_|\\__,_|');
  axel.text(rigthMiddle - 8, 33, 'Coded by Levente');
  axel.fg(0, 0, 0);
};

module.exports = {
  playBoard
};
