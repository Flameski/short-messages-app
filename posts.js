const path = require('path');

const posts = [
  {
    id: 1,
    author: {
      name: 'Author',
      title: 'Title',
      photo: path.join(__dirname, 'assets', 'avatar1.png'),
    },
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae nisi minima, enim ab quia omnis nemo eum debitis impedit iure tempora doloribus distinctio cupiditate excepturi veniam rem est optio ipsum.',
    likes: 0,
  },
];

module.exports = posts;
