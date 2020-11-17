import React, { useState } from 'react';
import axios from 'axios';
import ReviewsList from './ReviewsList';
import Ratings from './Ratings';

const ReviewApp = () => {
  const [reviewData, setReviewData] = useState([]);
  const [doneLoading, setDoneLoading] = useState(false);

  if (!doneLoading) {
    axios.get('api/listings/3')
      .then((res) => setReviewData(res.data[0].reviews))
      .catch((err) => console.log(err));
    setDoneLoading(true);
  }

  return (
    <div className="ReviewApp">
      <Ratings data={reviewData} />
      <ReviewsList data={reviewData} />
    </div>
  );
};

export default ReviewApp;
