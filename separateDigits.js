// separate digits
const digits = (number) => {
  const num = [];
  for (let i = 3; i >= 0; i--) {
    const szj = Math.floor(number % 10);
    num[i] = szj;
    number /= 10;
  }
  return num;
};

module.exports = {
  digits
};
