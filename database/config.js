var mysql = require('mysql');

var connection = mysql.createConnection({
  user: "root",
  database: 'deepfryd'
});

connection.connect(function (err) {
  if (err) {
    console.log('failed to connect:', err);
  } else {
    console.log('connected to MySql!')
  }
});

module.exports = connection;