// milyen színeket használhatok - witch color can be used
const chases = [
  'Piros',
  'Kék',
  'Zöld',
  'Sárga',
  'Barna',
  'Narancssárga'
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
  ['', '', '', '', '0 1', '', '', '', ''],
  ['', '', '', '', '0 2', '', '', '', ''],
  ['', '', '', '', '0 3', '', '', '', ''],
  ['', '', '', '', '0 4', '', '', '', ''],
  ['', '', '', '', '0 5', '', '', '', ''],
  ['', '', '', '', '0 6', '', '', '', ''],
  ['', '', '', '', '0 7', '', '', '', ''],
  ['', '', '', '', '0 8', '', '', '', ''],
  ['', '', '', '', '0 9', '', '', '', ''],
  ['', '', '', '', '1 0', '', '', '', ''],
  ['', '', '', '', '1 1', '', '', '', '']
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
      width: 4
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
