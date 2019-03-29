// const mysql = require('mysql');
// const faker = require('faker');
// const fs = require('fs');
// const db = require('./config.js');

// var fakeData = [];

// for (var i = 0; i <= 100; i++) {
//   fakeData.push({
//     review: faker.lorem.sentences(),
//     rating: faker.random.number({min: 1, max: 5}),
//     product_id: faker.random.number({min: 6, max: 7})
//   });
// }

// var queryStr = 'INSERT INTO reviews (review, rating, product_id) VALUES ?';
// db.query(queryStr, [fakeData], function(err, result) {
//   if (err) {
//     console.log('failed to add data to db', err);
//   } else {
//     console.log('data inserted to db', result);
//   }
// });
// console.log(fakeData);
// console.log(db);
// connection.end();