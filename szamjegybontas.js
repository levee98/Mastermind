// számjegybontás
const szamjegy = (szam) => {
  const num = [];
  for (let i = 3; i >= 0; i--) {
    const szj = Math.floor(szam % 10);
    num[i] = szj;
    szam /= 10;
  }
  return num;
};

module.exports = {
  szamjegy
};
