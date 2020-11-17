import React, { useState } from 'react';

const Location = (props) => {
  const { data, average } = props;
  const [avgLoc, setavgLoc] = useState(0);
  const [doneLoading, setDoneLoading] = useState(false);

  if (data.length > 0 && !doneLoading) {
    setDoneLoading(true);
    setavgLoc(average(data, 'communication').toPrecision(3));
  }
  return (
    <div>
      {`Location ${avgLoc}`}
    </div>
  );
};

export default Location;
