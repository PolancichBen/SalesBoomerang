const express = require('express');
const JSONDATA = require('../data/colors.json');
const cors = require('cors');

const app = express();

const PORT = 3002;

app.use(express.json());
app.use(cors());

app.get('/data', (_, res) => {
  res.send(JSONDATA);
});

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
