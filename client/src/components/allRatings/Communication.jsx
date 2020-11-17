import React, { useState } from 'react';

const Communication = (props) => {
  const { data, average } = props;
  const [avgComms, setAvgComms] = useState(0);
  const [doneLoading, setDoneLoading] = useState(false);

  if (data.length > 0 && !doneLoading) {
    setDoneLoading(true);
    setAvgComms(average(data, 'communication').toPrecision(3));
  }
  return (
    <div>
      {`Communication ${avgComms}`}
    </div>
  );
};

export default Communication;
