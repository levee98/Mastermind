// proof if include

const proofWhite = (arg1, arg2) => {
  let white = 0;
  for (let i = 0; i < 4; i++) {
    if (arg1.includes(arg2[i])) {
      white++;
    }
  }
  return white;
};

module.exports = {
  proofWhite
};
