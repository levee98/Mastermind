// milyen színeket használhatok - witch color can be used
const chases = [
  '1 - Piros',
  '2 - Kék',
  '3 - Zöld',
  '4 - Sárga',
  '5 - Barna',
  '6 - Pink'
];

// const map = (width, height) => {
//   const playboard = new Array(height);
//   for (let i = 0; i < playboard.length; i++) {
//     playboard[i] = new Array(width);
//   }
//   return playboard;
// };

// válaszfelület kialakítása
// const answersArray = (width, height) => {
//   const answArr = new Array(width);
//   for (let i = 0; i < width; i++) {
//     answArr[i] = new Array(height);
//   }
//   return answersArray;
// };

const playboard = [
  ['M', 'A', 'S', 'T', 'E R', 'M', 'I', 'N', 'D'],
  ['', '', '', '', '--', '', '', '', ''],
  ['', '', '', '', '--', '', '', '', ''],
  ['', '', '', '', '--', '', '', '', ''],
  ['', '', '', '', '--', '', '', '', ''],
  ['', '', '', '', '--', '', '', '', ''],
  ['', '', '', '', '--', '', '', '', ''],
  ['', '', '', '', '--', '', '', '', ''],
  ['', '', '', '', '--', '', '', '', ''],
  ['', '', '', '', '--', '', '', '', ''],
  ['', '', '', '', '--', '', '', '', ''],
  ['', '', '', '', '--', '', '', '', '']
];

// table alignment: center
const config = {
  columns: {
    0: {
      alignment: 'center',
      width: 1
    },
    1: {
      alignment: 'center',
      width: 1
    },
    2: {
      alignment: 'center',
      width: 1
    },
    3: {
      alignment: 'center',
      width: 1
    },
    4: {
      alignment: 'center',
      width: 3
    },
    5: {
      alignment: 'center',
      width: 1
    },
    6: {
      alignment: 'center',
      width: 1
    },
    7: {
      alignment: 'center',
      width: 1
    },
    8: {
      alignment: 'center',
      width: 1
    }
  }
};

module.exports = {
  chases,
  playboard,
  config
};
