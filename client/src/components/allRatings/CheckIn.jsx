import React, { useState } from 'react';

const CheckIn = (props) => {
  const { data, average } = props;
  const [avgCheckIn, setAvgCheckIn] = useState(0);
  const [doneLoading, setDoneLoading] = useState(false);

  if (data.length > 0 && !doneLoading) {
    setDoneLoading(true);
    setAvgCheckIn(average(data, 'check_in').toPrecision(3));
  }
  return (
    <div>
      {`Check-in ${avgCheckIn}`}
    </div>
  );
};

export default CheckIn;
