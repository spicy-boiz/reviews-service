import styled from 'styled-components';
import React, { useState } from 'react';
import ModalReviewListEntry from './ModalReviewListEntry';

const ReviewList = ({ data }) => {
  const [reviews, setReviews] = useState([]);
  const [doneLoading, setDoneLoading] = useState(false);

  if (data.length > 0 && !doneLoading) {
    setDoneLoading(true);
    setReviews(data);
  }

  const ReviewContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    margin-left: 8.33333%;
    padding-right: 8px;
    min-height: 1px;
    position: relative;
  `;

  const SearchBarContainer = styled.div`
    margin-bottom: 15px;
    margin-top: 0px;
  `;

  const SearchBarItself = styled.div`
    position: relative;
    cursor: text;
    display: flex;
    height: unset;
    width: 100%;
    margin 0px;
    border: none;
    color: rgb(34, 34, 34);
    background-color: rgb(247, 247, 247);
    align-items: center;
    padding: 12px 12px 12px 16px;
    border-radius: 100px;
    box-shadow: rgb(176, 176, 176) 0px opx opx 1px inset;
  `;

  const ReviewsSearchInput = styled.label`
    position: relative;
    flex: 1 1 0%;
    padding: 0px;
    cursor: default;
  `;

  const SearchInputHouse = styled.div`
    display: flex;
  `;

  const SearchField = styled.input`
  width: 100%;
  border: none;
  outline: none;
  margin: 0px 0px 0px 0px;
  min-height: 1px;
  color: rgb(34, 34, 34);
  background-color: transparent;
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  appearance: none;
  flex: 1 1 0%;
  padding 0px;
  text-overflow: ellipsis;
  `;

  const ReviewsListContainer = styled.div`
    margin-top: 0px;
  `;

  return (
    <ReviewContainer>
      <SearchBarContainer>
        <SearchBarItself>
          <ReviewsSearchInput>
            <SearchInputHouse>
              <SearchField placeholder="Search reviews" />
            </SearchInputHouse>
          </ReviewsSearchInput>
        </SearchBarItself>
      </SearchBarContainer>
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
