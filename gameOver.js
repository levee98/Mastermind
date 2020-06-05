const readline = require('readline-sync');
const axel = require('axel');

const win = (genCo) => {
  axel.bg(255, 0, 0);
  axel.box(94, 1, 32, 9);
  axel.text(103, 2, 'Congratulation!');
  axel.text(100, 4, ':) Y O U   W I N ! :)');
  axel.text(95, 6, 'You found out the combination!');
  axel.fg(255, 255, 255);
  axel.text(103, 8, '');
  console.log(genCo);
  axel.bg(0, 255, 0);
  axel.text(0, 30, '');
  console.log();
  axel.text(7, 30, '');
  const key = readline.keyInPause();
  console.clear();
};

const loose = (genCo) => {
  axel.bg(255, 0, 0);
  axel.box(97, 1, 27, 10);
  axel.text(106, 2, 'Game Over!');
  axel.text(99, 4, 'You have no more lives!');
  axel.text(98, 5, 'The rigth color and place');
  axel.text(103, 7, 'combination was:');
  axel.text(104, 9, '');
  console.log(genCo);
  axel.fg(255, 0, 0);
  axel.text(0, 30, '');
  console.log();
  axel.text(7, 30, '');
  const key = readline.keyInPause();
  console.clear();
};

module.exports = {
  win,
  loose
};
