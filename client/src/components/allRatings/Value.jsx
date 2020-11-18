import React, { useState } from 'react';
import styled from 'styled-components';

const Value = (props) => {
  const { data, average } = props;
  const [avgValue, setAvgValue] = useState(0);
  const [doneLoading, setDoneLoading] = useState(false);

  if (data.length > 0 && !doneLoading) {
    setDoneLoading(true);
    setAvgValue(average(data, 'communication').toPrecision(2));
  }

  const BarContainer = styled.div`
    height: 4;
    width: 120;
    background-color: #e0e0de;
    border-radius: 2px;
    margin: 5;
  `;

  const BarFiller = styled.div`
    height: 4;
    width:  ${({ avg }) => avg * 20}%;
    background-color: black;
    border-radius: 2px;
  `;

  const MetricContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 20px;

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
        Value
      </MetricName>
      <ScoreAndBar>
        <BarContainer>
          <BarFiller avg={avgValue} />
        </BarContainer>
        <MetricNum>
          {avgValue}
        </MetricNum>
      </ScoreAndBar>
    </MetricContainer>
  );
};

export default Value;
