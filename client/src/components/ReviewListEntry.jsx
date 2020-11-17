import React from 'react';
import PropTypes from 'prop-types';

const ReviewListEntry = (props) => {
  const {
    avatar,
    name,
    text,
    date,
  } = props;

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
          {date}
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
