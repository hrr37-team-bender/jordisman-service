const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect(err => {
  if (err) {
    console.log('failed to connect to mysql:', err);
  } else {
    console.log('connected to mysql')
  }
});

const getReviews = function(productId, callback) {
  let queryStr = `select * from reviews where product_id = ${productId}`;
  connection.query(queryStr, (err, results) => {
    if (err) {
      console.log('getReviews failed:', err);
    } else {
      // console.log(results);
      callback(results);
    }
  });
};

module.exports = {connection, getReviews};