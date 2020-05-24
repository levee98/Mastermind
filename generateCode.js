// Generate code
const generateCode = () => {
  let k = 0;
  const genCode = [];
  while (k < 4) {
    const pos = Math.floor(Math.random() * 5 + 1);
    if (!genCode.includes(pos)) {
      genCode.push(pos);
      k++;
    }
  }
  return genCode;
};

module.exports = {
  generateCode
};
