// proof of right number on the right place

const proof = (arg1, arg2) => {
  let black = 0;
  for (let i = 0; i < 4; i++) {
    if (arg1[i] === arg2[i]) {
      black++;
    }
  }
  return black;
};

module.exports = {
  proof
};
