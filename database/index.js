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

const getAllData = function(callback) {
  let queryStr = 'select * from reviews';
  connection.query(queryStr, (err, results) => {
    if (err) {
      console.log('getAllData failed:', err);
    } else {
      callback(results);
    }
  });
};

module.exports = {connection, getAllData};