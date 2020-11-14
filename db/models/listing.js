const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  reviews: Array,
});

const ListingModel = mongoose.model('Listing', listingSchema);

// function insert(listing, callback) {
//   ListingModel.create(listing, callback);
// }

function findAll(callback) {
  ListingModel.find({}, callback);
}

// module.exports = insert;
module.exports = { findAll, ListingModel };
