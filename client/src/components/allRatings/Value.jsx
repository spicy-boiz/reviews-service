import React, { useState } from 'react';

const Value = (props) => {
  const { data, average } = props;
  const [avgValue, setAvgValue] = useState(0);
  const [doneLoading, setDoneLoading] = useState(false);

  if (data.length > 0 && !doneLoading) {
    setDoneLoading(true);
    setAvgValue(average(data, 'communication').toPrecision(3));
  }
  return (
    <div>
      {`Value ${avgValue}`}
    </div>
  );
};

export default Value;
