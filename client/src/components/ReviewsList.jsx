import React, { useState } from 'react';
import ReviewListEntry from './ReviewListEntry';

const ReviewList = ({ data }) => {
  const [reviews, setReviews] = useState([]);
  const [doneLoading, setDoneLoading] = useState(false);

  if (data.length > 0 && !doneLoading) {
    setDoneLoading(true);
    setReviews(data);
  }

  return (
    <div>
      {reviews.slice(0, 6).map((singleReview) => (
        <ReviewListEntry
          avatar={singleReview.user.avatar_url}
          name={singleReview.user.name}
          text={singleReview.review.text}
          date={singleReview.review.date}
        />
      ))}
    </div>
  );
};

export default ReviewList;
