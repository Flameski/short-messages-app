const data = require('../posts');

const getPosts = (req, res) => {
  res.status(200).json(data);
};

module.exports = getPosts;
