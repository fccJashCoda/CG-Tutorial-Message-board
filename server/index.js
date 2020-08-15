const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const messages = require('./db/messages');
const { getAll, create } = require('./db/messages');

const port = process.env.PORT || 5050;
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));
app.use(cors());

app.get('/', (req, res) => {
  return res.json({ msg: 'Full Stack Message Board!' });
});

app.get('/messages', (req, res) => {
  messages.getAll().then((messages) => {
    res.json(messages);
  });
});

app.post('/messages', (req, res) => {
  console.log(req.body);
  messages
    .create(req.body)
    .then((message) => {
      return res.json(message);
    })
    .catch((err) => {
      res.status(500);
      return res.json(err);
    });
});

app.listen(port, () => console.log(`App listening on port ${port}`));
