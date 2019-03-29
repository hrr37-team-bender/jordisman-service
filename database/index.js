const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect(function (err) {
  if (err) {
    console.log('failed to connect to mysql:', err);
  } else {
    console.log('connected to mysql')
  }
});

module.exports = connection;