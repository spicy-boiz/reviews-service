const Listings = require('../models/listing.js');

module.exports = {
  getListings: (req, res) => {
    Listings.findAll((err, docs) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        res.json(docs);
      }
    });
  },
};
