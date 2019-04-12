const bodyParser = require('body-parser');
const express = require('express');
const db = require('../database/index.js');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3003;

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); //proxy server get the data.

app.use('/products/:id', express.static(__dirname + '/../client/dist'));

app.get('/api/reviews/:productId', (req, res) => {
  let productId = req.params.productId;
// console.log('productId', productId);
  db.getReviews(productId, results => {
    // console.log('results[0]:', results[0]);
    res.status(200).json(results);
  });
});

app.post('/api/reviews/:productId', (req, res) => {
  let productId = req.params.productId;
  let inputBody = {
    username: req.body.username,
    review: req.body.review,
    rating: req.body.rating,
    created_at: '2019-4-12',
    product_id: productId
    };

  let queryStr = `insert into reviews set ?`;

  db.connection.query(queryStr, inputBody, (err, result) => {
    if (err) {
      console.log('post req err:', err);
    } else {
      console.log('post req ok:', result);
      res.status(200).json(result);
    }
  });
});

app.listen(port, () => {
  console.log(`server running at: http:;//localhost:${port}`);
});
