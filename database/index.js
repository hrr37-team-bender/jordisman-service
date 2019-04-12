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

const getReviews = (productId, callback) => {
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

// const postReview = (productId, inputBody, callback) => {

//   let queryStr = `insert into reviews (id, username, review, rating, created_at, product_id) values (?,?,?,?,?,?)`;
//   connection.query(queryStr, (err, result) => {
//     if (err) {
//       console.log('failed to post:', err);
//     } else {
//       console.log('post successfully', result);
//       callback(result);
//     }
//   });
// }

module.exports = {connection, getReviews};