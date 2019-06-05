import styled from 'styled-components';
import React from 'react';

const Timer: React.FC = () => {
  return (
    <StyledTimer />
  );
}

const StyledTimer = styled.div`
  width: 100%;
  height: 100px;
  background-color: #333;
`

export default Timer;
