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
    margin-left: 7%;
    padding-right: 8px;
    min-height: 1px;
    position: relative;
  `;

  const SearchBarContainer = styled.div`
    margin-bottom: 36px;
    margin-top: 2px;
  `;

  const MagnifyIcon = styled.div`
    display: flex;
    align-items: center;
    max-width: 50%;
    white-space: nowrap;
    margin-right: 8px;
  `;

  const Svg = styled.svg`
    display: block;
    fill: none;
    height: 16px;
    width: 16px;
    stroke: rgba(22, 22, 22, 0.924);
    stroke-width: 2;
    overflow: visible;
  `;

  const SearchBarItself = styled.div`
    position: relative;
    cursor: text;
    display: flex;
    height: unset;
    width: 95%;
    margin 0px;
    border: solid 1px;
    color: rgba(34, 34, 34, 0.39);
    background-color: rgb(247, 247, 247);
    align-items: center;
    padding: 11px 11px 11px 16px;
    border-radius: 100px;
    &:focus-within {
    box-shadow: rgb(32, 32, 32) 0px 0px 0px 1px inset;
      color: rgba(34, 34, 34, 0.787);
    }
  &:focus-within ${Svg} {
      stroke-width: 4;
    }
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
  }
  `;

  const ReviewsListContainer = styled.div`
    margin-top: 0px;
  `;

  return (
    <ReviewContainer>
      <SearchBarContainer>
        <SearchBarItself>
          <MagnifyIcon>
            <Svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false">
              <g fill="none">
                <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9" />
              </g>
            </Svg>
          </MagnifyIcon>
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
