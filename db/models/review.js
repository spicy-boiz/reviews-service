const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    review: {
      id: Number,
      text: String,
      date: String,
    },
    user: {
      name: String,
      email: String,
      avatar_url: String,
    },
    ratings: {
      cleanliness: Number,
      communication: Number,
      check_in: Number,
      accuracy: Number,
      location: Number,
      value: Number,
    }
});

const ReviewModel = mongoose.model('Review', reviewSchema);

function insert(review, callback) {
  ReviewModel.create(review, callback);
}

module.exports.insert = insert;