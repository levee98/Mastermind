const axel = require('axel');
// is inputed code valid?

const isValid = (gue, hoMaDi) => {
  const homadi = [];
  for (let i = 0; i < hoMaDi; i++) {
    homadi.push(i + 1);
  }

  let d = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < homadi.length; j++) {
      if (gue[i] === homadi[j]) {
        d++;
        break;
      }
    }
  }

  if (d === 4) {
    let repeated = 0;
    for (let i = 0; i < gue.length - 1; i++) {
      for (let j = i + 1; j < gue.length; j++) {
        if (gue[i] === gue[j]) {
          repeated++;
        }
      }
    }
    if (repeated > 0) {
      return true;
    } else {
      return false;
    }
  }
  return true;
};

module.exports = {
  isValid
};
