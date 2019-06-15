import styled from 'styled-components';
import React from 'react';

interface TimerState {
  time: number;
  minutes: string;
  seconds: string;
}

const initialData = {
  time: 0,
  minutes: '00',
  seconds: '00',
};

const toText = n => ('00' + n).slice(-2);

const Timer: React.FC = () => {
  const [state, setState] = React.useState<TimerState>(initialData);

  setTimeout(() => {
    const time = state.time + 1;
    const newState = {
      time,
      minutes: toText(Math.floor(time / 60) % 60),
      seconds: toText(time % 60),
    };
    setState(newState);
  }, 1000);

  return (
    <StyledTimer>
      <div>{state.minutes}:{state.seconds}</div>
    </StyledTimer>
  );
}

const StyledTimer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #333;
  font-family: monospace;
  font-size: 50px;
  color: #fff;
`

export default Timer;
