const readline = require('readline-sync');
const axel = require('axel');

const win = (genCo, xMiddle) => {
  const rigthMiddle = ((xMiddle + 27) + xMiddle * 2) / 2;
  axel.bg(255, 0, 0);
  axel.box(rigthMiddle - 16, 1, 32, 9);
  axel.text(rigthMiddle - 8, 2, 'Congratulation!');
  axel.text(rigthMiddle - 10, 4, ':) Y O U   W I N ! :)');
  axel.text(rigthMiddle - 15, 6, 'You found out the combination!');
  axel.fg(0, 0, 0);
  const genCoString = genCo.toString();
  axel.text(rigthMiddle - 4, 8, genCoString);
  // console.log(genCo);
  axel.bg(0, 255, 0);
  axel.text(0, 30, '');
  console.log();
  axel.text(rigthMiddle - 10, 30, '');
  const key = readline.keyInPause();
  console.clear();
};

const loose = (genCo, xMiddle) => {
  const rigthMiddle = ((xMiddle + 27) + xMiddle * 2) / 2;
  axel.bg(255, 0, 0);
  axel.fg(0, 0, 0);
  axel.box(rigthMiddle - 14, 1, 27, 10);
  axel.text(rigthMiddle - 5, 2, 'Game Over!');
  axel.text(rigthMiddle - 12, 4, 'You have no more lives!');
  axel.text(rigthMiddle - 13, 5, 'The rigth color and place');
  axel.text(rigthMiddle - 8, 7, 'combination was:');
  const genCoString = genCo.toString();
  axel.text(rigthMiddle - 4, 9, genCoString);
  // console.log(genCo);
  axel.bg(0, 255, 0);
  axel.text(0, 30, '');
  console.log();
  axel.text(rigthMiddle - 10, 30, '');
  const key = readline.keyInPause();
  console.clear();
};

module.exports = {
  win,
  loose
};
