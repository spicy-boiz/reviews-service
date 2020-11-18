import React from 'react';
import PropTypes from 'prop-types';

const ReviewListEntry = (props) => {
  // props definitions
  const {
    avatar,
    name,
    text,
    date,
  } = props;

  // review date formatting
  const reviewDate = new Date(date);
  const options = { month: 'long' };
  const dateYear = reviewDate.getFullYear();
  const dateMonth = new Intl.DateTimeFormat('en-US', options)
    .format(reviewDate);

  return (
    <div className="ReviewListEntry">
      <div className="avatar">
        <img src={avatar} alt="user avatar" />
      </div>
      <div className="name-date">
        <div className="name">
          {name}
        </div>
        <div className="date">
          {`${dateMonth} ${dateYear}`}
        </div>
      </div>
      <div className="review-text">
        {text}
      </div>
    </div>
  );
};

ReviewListEntry.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};

ReviewListEntry.defaultProps = {
  avatar: '',
  name: '',
  text: '',
  date: '',
};

export default ReviewListEntry;
