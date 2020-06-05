const readline = require('readline-sync');
const axel = require('axel');
const printGuessed = require('./printGuessed');

const win = (genCo, xMiddle) => {
  const rigthMiddle = ((xMiddle + 27) + xMiddle * 2) / 2;
  axel.fg(0, 0, 0);
  axel.bg(90, 90, 90);
  axel.box(rigthMiddle - 16, 1, 32, 11);
  axel.text(rigthMiddle - 8, 2, 'Congratulation!');
  axel.text(rigthMiddle - 10, 4, ':) Y O U   W I N ! :)');
  axel.text(rigthMiddle - 15, 6, 'You found out the combination!');
  axel.fg(0, 0, 0);
  printGuessed.gameOverPrint(genCo, rigthMiddle);
  // const genCoString = genCo.toString();
  // axel.text(rigthMiddle - 4, 7, genCoString);
  axel.fg(0, 0, 0);
  axel.bg(0, 0, 255);
  axel.text(0, 30, '');
  console.log();
  axel.text(rigthMiddle - 11, 30, '');
  const key = readline.keyInPause();
  console.clear();
};

const loose = (genCo, xMiddle) => {
  const rigthMiddle = ((xMiddle + 27) + xMiddle * 2) / 2;
  axel.bg(90, 90, 90);
  axel.fg(0, 0, 0);
  axel.box(rigthMiddle - 14, 1, 27, 11);
  axel.text(rigthMiddle - 5, 2, 'Game Over!');
  axel.text(rigthMiddle - 12, 4, 'You have no more lives!');
  axel.text(rigthMiddle - 13, 5, 'The rigth color and place');
  axel.text(rigthMiddle - 8, 7, 'combination was:');
  printGuessed.gameOverPrint(genCo, rigthMiddle);
  // const genCoString = genCo.toString();
  // axel.text(rigthMiddle - 4, 8, genCoString);
  axel.bg(0, 0, 255);
  axel.fg(0, 0, 0);
  axel.text(0, 30, '');
  console.log();
  axel.text(rigthMiddle - 11, 30, '');
  const key = readline.keyInPause();
  console.clear();
};

module.exports = {
  win,
  loose
};
