import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import ModalReviewListEntry from './ModalReviewListEntry';
import Searchbar from './Searchbar';

const ReviewList = ({ data }) => {
  const [reviews, setReviews] = useState([]);
  const [doneLoading, setDoneLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [scrollTop, setScrollTop] = useState(0);
  // const [searchResult, setSearchResult] = useState([]);

  if (data.length > 0 && !doneLoading) {
    setDoneLoading(true);
    setReviews(data);
  }

  const handleInput = (e) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };

  // useEffect(() => {
  //   const results = reviews
  //     .filter((singleReview) => singleReview.review.text
  //       .toLowerCase()
  //       .includes(searchTerm));
  //   setSearchResult(results);
  // }, [searchTerm]);

  const ReviewContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    margin-left: 7%;
    padding-right: 8px;
    min-height: 1px;
    position: relative;
  `;

  const ReviewsListContainer = styled.div`
    margin-top: 0px;
  `;

  return (
    <ReviewContainer>
      <Searchbar
        searchTerm={searchTerm}
        handleInput={handleInput}
      />
      <ReviewsListContainer>
        {reviews.slice(0, 6).map((singleReview) => (
          <ModalReviewListEntry
            avatar={singleReview.user.avatar_url}
            name={singleReview.user.name}
            text={singleReview.review.text}
            date={singleReview.review.date}
          />
        ))}
      </ReviewsListContainer>
    </ReviewContainer>
  );
};

export default ReviewList;
