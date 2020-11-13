const data = require ('./reviewData.js');
const mongoose = require('mongoose');
const Reviews = require('./db/models/review.js');

mongoose.connect('mongodb://localhost/FEC', {useMongoClient: true});

const seedDb = function(data) {
  Reviews.insert(data, (err, results) => {
    if (err) {
      console.log(err)
    } else {
      console.log('added reviews to db')
    }
  });
}

seedDb(data);