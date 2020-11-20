import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

  const ReviewListContainer = styled.div`
    padding-left: 8px;
    padding-right: 8px;
    margin-right: 85.75px;
  `;

  const SingleReview = styled.div`
    margin-bottom: 40px;
  `;

  const ReviewTop = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  `;

  const Avatar = styled.div`
    height: 56px;
    width: 56px;
  `;

  const AvatarPic = styled.img`
    height: 56px;
    width: 56px;
    border-radius: 50%;

  `;

  const NameAndDate = styled.div`
    margin-left: 12px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  `;

  const StyledDate = styled.div`
    color: rgb(113, 113, 113);
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  `;

  const ReviewText = styled.div`
    color: rgb(34, 34, 34);
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    word-break: break-word;
  `;

  return (
    <ReviewListContainer>
      <SingleReview>
        <ReviewTop>
          <Avatar>
            <AvatarPic src={avatar} alt="user avatar" />
          </Avatar>
          <NameAndDate>
            <div className="name">
              {name}
            </div>
            <StyledDate>
              {`${dateMonth} ${dateYear}`}
            </StyledDate>
          </NameAndDate>
        </ReviewTop>
        <ReviewText>
          {text}
        </ReviewText>
      </SingleReview>
    </ReviewListContainer>
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
