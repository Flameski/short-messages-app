const express = require('express');
const app = express();
const cors = require('cors');

const posts = require('./routes/posts');

const port = process.env.PORT || 3001;

// static assets
app.use(express.static('./assets'));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());
app.use(cors());

app.use('/api/posts', posts);

app.get('/', (req, res) => {
  res.send('working');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
