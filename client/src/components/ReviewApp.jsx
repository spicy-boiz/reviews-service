import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewsList from './ReviewsList';
import Ratings from './Ratings';

const ReviewApp = () => {
  const [listingData, setListingData] = useState([]);

  useEffect(() => {
    axios.get('api/listings/3')
      .then((res) => setListingData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="ReviewApp">
      <Ratings data={listingData} />
      <ReviewsList data={listingData} />
    </div>
  );
};

export default ReviewApp;
