const bodyParser = require('body-parser');
const express = require('express');
const db = require('../database/index.js');

const path = require('path');
const app = express();
const port = 3003;

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/reviews', (req, res) => {
  db.getAllData(results => {
    console.log('results[0]:', results[0]);
    res.send(results);
  });
});



app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
