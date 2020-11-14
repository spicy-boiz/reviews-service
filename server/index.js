const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const listingController = require('../db/controllers/listing.js');

const port = 3003;

const app = express();

mongoose.connect('mongodb://localhost/FEC', { useMongoClient: true });

app.use(express.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/api/listings', listingController.getListings);

app.listen(port, () => (
  console.log(`listening on port ${port}`)
));
