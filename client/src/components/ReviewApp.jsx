import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
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

  const ReviewAppContainer = styled.div`
    font-family: 'Montserrat', sans-serif;
    padding-top: 48px;
    margin-left: 2rem;
    margin-right: 2rem;
  `;

  return (
    <ReviewAppContainer>
      <Ratings data={reviewData} />
      <ReviewsList data={reviewData} />
    </ReviewAppContainer>
  );
};

export default ReviewApp;
