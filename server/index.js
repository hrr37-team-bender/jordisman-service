const bodyParser = require('body-parser');
const express = require('express');
const db = require('../database');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3003;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello from your deefryd server!');
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
