import React, { useState } from 'react';
import styled from 'styled-components';

const Cleanliness = (props) => {
  const { data, average } = props;
  const [avgClean, setAvgClean] = useState(0);
  const [doneLoading, setDoneLoading] = useState(false);

  if (data.length > 0 && !doneLoading) {
    setDoneLoading(true);
    setAvgClean(average(data, 'cleanliness').toPrecision(2));
  }

  const BarContainer = styled.div`
    height: 4;
    width: 120;
    background-color: #e0e0de;
    border-radius: 5;
    margin: 5;
  `;

  const BarFiller = styled.div`
    height: 4;
    width:  ${({ avg }) => avg * 20}%;
    background-color: black;
    border-radius: inherit;
  `;

  const MetricContainer = styled.div`
    display: grid;
    height: 20px;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 16px;

  `;

  const ScoreAndBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-top: 3px;
    padding-right: 83px;
  `;

  const MetricName = styled.div`
    display: flex;
    justify-content: flex-start;

  `;

  const MetricNum = styled.div`
    font-weight: 600;
    font-size: 12px;
    line-height: 13px;
    margin-left: 6px;

  `;

  return (
    <MetricContainer>
      <MetricName>
        Cleanliness
      </MetricName>
      <ScoreAndBar>
        <BarContainer>
          <BarFiller avg={avgClean} />
        </BarContainer>
        <MetricNum>
          {avgClean}
        </MetricNum>
      </ScoreAndBar>
    </MetricContainer>
  );
};

export default Cleanliness;
