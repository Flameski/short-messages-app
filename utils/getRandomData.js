const { firstName, lastName, titles, words } = require('./data');
const path = require('path');

const getRandomRata = () => {
  let randomData = [];
  for (let i = 0; i < 100; i++) {
    let dataPiece = {
      id: i,
      author: {
        name:
          firstName[Math.floor(Math.random() * 22)] +
          ' ' +
          lastName[Math.floor(Math.random() * 22)],
        title: titles[Math.floor(Math.random() * 22)],
        photo: path.join(
          process.env.API_URI,
          `avatar${Math.ceil(Math.random() * 4)}.png`
        ),
      },
      text: getRandomText(50, 20),
      likes: Math.floor(Math.random() * 10),
      published: new Date(
        Date.now() - Math.floor(Math.random() * 4) * 100000000
      ).toISOString(),
    };
    randomData.push(dataPiece);
  }
  return randomData;
};

const getRandomText = (max, min) => {
  let text = '';
  let length = Math.floor(Math.random() * (max - min) + min);
  let textLength = words.length;
  for (let i = 0; i < length; i++) {
    let word = words[Math.floor(Math.random() * textLength)];
    if (i === 0) {
      text += word.slice(0, 1).toUpperCase() + word.slice(1, word.length) + ' ';
    } else if (i === length - 1) {
      text += word + '.';
    } else {
      text += word + ' ';
    }
  }
  return text;
};

module.exports = getRandomRata;
