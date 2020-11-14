// /* eslint-disable no-plusplus */
// const faker = require('faker');
// const listingModel = require('../models/listing.js');
// const reviewModel = require('../models/review.js');

// const randomRating = Math.floor((Math.random() * 5) + 1);
// let reviewIdCount = 0;

// // generate random listing review
// const listingReview = {
//   review: {
//     id: reviewIdCount += 1,
//     listing_id: listingModel.listing_id,
//     text: faker.lorem.sentences(),
//     date: faker.date.between('2015-01-01', '2020-11-13'),
//   },
//   user: {
//     name: faker.name.findName(),
//     email: faker.internet.email(),
//     avatar_url: faker.image.avatar(),
//   },
//   ratings: {
//     cleanliness: randomRating(),
//     communication: randomRating(),
//     check_in: randomRating(),
//     accuracy: randomRating(),
//     location: randomRating(),
//     value: randomRating(),
//   },
// };

// const reviewArray = [];
// let num = 1;
// const randomAmount = Math.floor(Math.random() * (200 - 30)) - 30;

// while (num <= randomAmount) {
//   const currentReview = new reviewModel.ReviewModel(listingReview);
//   reviewArray.push(currentReview);
//   reviewModel.insert(listingReview);
//   num++;
// }

// currentl
