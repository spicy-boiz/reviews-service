import React from 'react';
import Cleanliness from './allRatings/Cleanliness';
import Communication from './allRatings/Communication';
import CheckIn from './allRatings/CheckIn';
import Accuracy from './allRatings/Accuracy';
import Location from './allRatings/Location';
import Value from './allRatings/Value';

const Ratings = (props) => {
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

  const metricAverage = (reviews, metric) => {
    const sum = reviews.reduce((total, current) => {
      const cr = current.ratings;
      return total + cr[metric];
    }, 0);
    return sum / reviews.length;
  };

  const {data} = props;

  const listingAverage = () => (
    listingTotal(data) / (data.length)
  );

  const preciseRating = listingAverage().toPrecision(3);
  return (
    <div>
      <div>
        {`⭐ ${preciseRating} (${data.length} ratings)`}
      </div>
      <div className="listing-ratings">
        <Cleanliness data={data} average={metricAverage} />
        <Communication data={data} average={metricAverage} />
        <CheckIn data={data} average={metricAverage} />
        <Accuracy data={data} average={metricAverage} />
        <Location data={data} average={metricAverage} />
        <Value data={data} average={metricAverage} />
      </div>
    </div>
  );
};

export default Ratings;
