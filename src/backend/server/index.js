const express = require('express');
const JSONDATA = require('../data/colors.json');

const app = express();

const PORT = 3002;

app.use(express.json());

app.get('/data', (_, res) => {
  res.send(JSONDATA);
});

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
