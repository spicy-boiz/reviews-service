const express = require('express');
const mongoose = require('mongoose');
const reviewController = require('../db/controllers/review.js');
const port = 3003;

const app = express();

mongoose.connect('mongodb://localhost/FEC', {useMongoClient: true});

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/reviews', reviewController.getReviews);

app.listen(port, function() {
  console.log(`listening on port ${port}`)
})