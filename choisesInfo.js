const axel = require('axel');

const instruct = (live, xMiddle) => {
  const leftMiddle = (xMiddle - 27) / 2;
  // calling starting printOuts!!
  axel.bg(255, 0, 0);
  axel.fg(0, 0, 0);
  axel.text(leftMiddle - 6, 3, ' 1 -  Red    ');
  axel.box(16, 3, 2, 1);
  axel.bg(48, 10, 36);
  axel.bg(0, 255, 0);
  axel.text(leftMiddle - 6, 5, ' 2 -  Green  ');
  axel.box(16, 5, 2, 1);
  axel.bg(48, 10, 36);
  axel.bg(0, 0, 255);
  axel.text(leftMiddle - 6, 7, ' 3 -  Blue   ');
  axel.box(16, 7, 2, 1);
  axel.bg(48, 10, 36);
  axel.bg(255, 255, 0);
  axel.text(leftMiddle - 6, 9, ' 4 -  Yellow ');
  axel.box(16, 9, 2, 1);
  axel.bg(48, 10, 36);
  axel.bg(102, 51, 0);
  axel.text(leftMiddle - 6, 11, ' 5 -  Brown  ');
  axel.box(16, 11, 2, 1);
  axel.bg(48, 10, 36);
  axel.bg(255, 0, 127);
  axel.text(leftMiddle - 6, 13, ' 6 -  Pink   ');
  axel.box(16, 13, 2, 1);
  axel.bg(48, 10, 36);
  axel.bg(200, 0, 200);
  axel.box(leftMiddle - 17, 21, 35, 11); // box on the left for the instructions
  axel.text(leftMiddle - 11, 22, '                       ');
  axel.text(leftMiddle - 10, 22, ' Number of live(s): ');
  axel.text(leftMiddle - 11, 24, ' Black means: so many');
  axel.text(leftMiddle - 16, 26, ' right color on the right place, ');
  axel.text(leftMiddle - 11, 28, ' White means: so many');
  axel.text(leftMiddle - 16, 30, ' right color on the wrong place. ');
  axel.fg(255, 0, 0);
  console.log(live);
  //  axel.fg(255, 255, 255);
};

module.exports = {
  instruct
};
