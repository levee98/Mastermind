const axel = require('axel');

const instruct = (live) => {
  // calling starting printOuts!!
  axel.bg(255, 0, 0);
  axel.fg(0, 0, 0);
  axel.text(12, 3, ' 1 -  Red    ');
  axel.box(16, 3, 2, 1);
  axel.bg(48, 10, 36);
  axel.bg(0, 255, 0);
  axel.text(12, 5, ' 2 -  Green  ');
  axel.box(16, 5, 2, 1);
  axel.bg(48, 10, 36);
  axel.bg(0, 0, 255);
  axel.text(12, 7, ' 3 -  Blue   ');
  axel.box(16, 7, 2, 1);
  axel.bg(48, 10, 36);
  axel.bg(255, 255, 0);
  axel.text(12, 9, ' 4 -  Yellow ');
  axel.box(16, 9, 2, 1);
  axel.bg(48, 10, 36);
  axel.bg(102, 51, 0);
  axel.text(12, 11, ' 5 -  Brown  ');
  axel.box(16, 11, 2, 1);
  axel.bg(48, 10, 36);
  axel.bg(255, 0, 127);
  axel.text(12, 13, ' 6 -  Pink   ');
  axel.box(16, 13, 2, 1);
  axel.bg(48, 10, 36);
  axel.text(8, 17, ' Black means: so many');
  axel.text(3, 19, ' right color on the right place, ');
  axel.text(8, 21, ' White means: so many');
  axel.text(3, 23, ' right color on the wrong place. ');
  axel.text(7, 15, '                       ');
  axel.text(7, 15, ' Number of live(s): ');
  axel.fg(255, 0, 0);
  console.log(live);
  //  axel.fg(255, 255, 255);
};

module.exports = {
  instruct
};
