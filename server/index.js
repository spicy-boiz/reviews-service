const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const listingController = require('../db/controllers/listing.js');

const port = 3003;

const app = express();

mongoose.connect('mongodb://localhost/FEC', { useMongoClient: true });

app.use(express.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));

// get all listings
app.get('/api/listings', listingController.getListings);

// get a specific listing
app.get('/api/listings/:id', listingController.getOneListing);

app.listen(port, () => (
  console.log(`listening on port ${port}`)
));
