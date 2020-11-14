/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const faker = require('faker');
const mongoose = require('mongoose');
const data = require('./reviewData.js');
const Review = require('./db/models/review.js');
const Listing = require('./db/models/listing.js');

mongoose.connect('mongodb://localhost/FEC', { useMongoClient: true });

const seedDb = (d) => {
  d.forEach((listing) => {
    const reviewIdCount = 0;
    const currentListing = new Listing(listing);
    const randomRating = () => (
      ((Math.random() * (5 - 2)) + 2).toString().slice(0, 1)
    );

    const newReview = {
      review: {
        id: reviewIdCount,
        listing_id: currentListing.id,
        text: faker.lorem.sentences(),
        date: faker.date.between('2015-01-01', '2020-11-13'),
      },
      user: {
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar_url: faker.image.avatar(),
      },
      ratings: {
        cleanliness: Number(randomRating()),
        communication: Number(randomRating()),
        check_in: Number(randomRating()),
        accuracy: Number(randomRating()),
        location: Number(randomRating()),
        value: Number(randomRating()),
      },
    };

    const reviewArray = [];
    let num = 1;
    const randomAmount = Math.floor(Math.random() * (200 - 30)) + 30;

    while (num <= randomAmount) {
      const currentReview = new Review(newReview);
      currentReview.review.id = num;
      reviewArray.push(currentReview);
      currentReview.save((err) => {
        if (err) {
          console.error(err);
        } else {
          // console.log('review saved');
        }
      });
      num++;
    }

    currentListing.reviews = reviewArray;

    currentListing.save((err) => {
      if (err) {
        console.log(err);
      } else {
        // console.log('saved listing');
      }
    });
  });
};

seedDb(data);
