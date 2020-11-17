import React, { useState } from 'react';

const Cleanliness = (props) => {
  const { data, average } = props;
  const [avgClean, setAvgClean] = useState(0);
  const [doneLoading, setDoneLoading] = useState(false);

  if (data.length > 0 && !doneLoading) {
    setDoneLoading(true);
    setAvgClean(average(data, 'cleanliness').toPrecision(3));
  }
  return (
    <div>
      {`Cleanliness ${avgClean}`}
    </div>
  );
};

export default Cleanliness;
