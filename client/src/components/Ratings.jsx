import React from 'react';
import styled from 'styled-components';
import Cleanliness from './allRatings/Cleanliness';
import Communication from './allRatings/Communication';
import CheckIn from './allRatings/CheckIn';
import Accuracy from './allRatings/Accuracy';
import Location from './allRatings/Location';
import Value from './allRatings/Value';

const Ratings = (props) => {
  // function for total average reviews per listing
  const listingTotal = (reviews) => {
    const sum = reviews.reduce((total, current) => {
      const cr = current.ratings;
      const ratingsTotal = cr.cleanliness
        + cr.communication + cr.check_in
        + cr.accuracy + cr.location
        + cr.value;

      return total + (ratingsTotal / 6);
    }, 0);
    return sum;
  };

  // function for each child to calc. metric average
  const metricAverage = (reviews, metric) => {
    const sum = reviews.reduce((total, current) => {
      const cr = current.ratings;
      return total + cr[metric];
    }, 0);
    return sum / reviews.length;
  };

  const { data } = props;
  const reviewNums = data.length;

  const listingAverage = () => (
    listingTotal(data) / (reviewNums)
  );

  const preciseRating = listingAverage().toPrecision(3);

  const RatingsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 2rem;
  `;

  const Header = styled.h2`
    padding-bottom: 32px;
  `;

  return (
    <div>
      <div>
        <Header>
          {`⭐ ${preciseRating} (${reviewNums} ratings)`}
        </Header>
      </div>
      <RatingsGrid>
        <Cleanliness
          data={data}
          average={metricAverage}
        />
        <Accuracy
          data={data}
          average={metricAverage}
        />
        <Communication
          data={data}
          average={metricAverage}
        />
        <Location
          data={data}
          average={metricAverage}
        />
        <CheckIn
          data={data}
          average={metricAverage}
        />
        <Value
          data={data}
          average={metricAverage}
        />
      </RatingsGrid>
    </div>
  );
};

export default Ratings;
