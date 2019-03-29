const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3003;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
