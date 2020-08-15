const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

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

app.listen(port, () => console.log(`App listening on port ${port}`));
