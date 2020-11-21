import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReviewsList from './ReviewsList';
import Ratings from './Ratings';
import ShowAllBtn from './ShowAllBtn';
import Modal from './Modal';
import useModal from '../useModal';

const ReviewApp = () => {
  const [reviewData, setReviewData] = useState([]);
  const [doneLoading, setDoneLoading] = useState(false);
  const { isShowing, toggle } = useModal();

  if (!doneLoading) {
    axios.get('api/listings/1/reviews')
      .then((res) => setReviewData(res.data[0].reviews))
      .catch((err) => console.log(err));
    setDoneLoading(true);
  }

  const ReviewAppContainer = styled.div`
    font-family: 'Montserrat', sans-serif;
    width: 1085px;
    padding-top: 48px;
    padding-bottom: 48px;
    padding-left: 50px;
    padding-right: -35px;
    margin: 0 auto;
  `;

  return (
    <ReviewAppContainer>
      <Ratings data={reviewData} />
      <ReviewsList data={reviewData} />
      <ShowAllBtn data={reviewData} toggle={toggle} />
      <Modal
        data={reviewData}
        isShowing={isShowing}
        hide={toggle}
      />
    </ReviewAppContainer>
  );
};

export default ReviewApp;
