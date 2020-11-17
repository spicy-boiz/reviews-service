import React, { useState } from 'react';

const Accuracy = (props) => {
  const { data, average } = props;
  const [avgAcc, setAvgAcc] = useState(0);
  const [doneLoading, setDoneLoading] = useState(false);

  if (data.length > 0 && !doneLoading) {
    setDoneLoading(true);
    setAvgAcc(average(data, 'accuracy').toPrecision(3));
  }
  return (
    <div>
      {`Accuracy ${avgAcc}`}
    </div>
  );
};
export default Accuracy;
