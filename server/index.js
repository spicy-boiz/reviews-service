const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const listingController = require('../db/controllers/listing.js');

mongoose.set('useCreateIndex', true);
const port = 3003;

const app = express();

mongoose.connect('mongodb://localhost/FEC', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));

// get all listings
app.get('/api/listings/reviews', listingController.getListings);

// get a specific listing
app.get('/api/listings/:id/reviews', listingController.getOneListing);

app.listen(port, () => (
  console.log(`listening on port ${port}`)
));
