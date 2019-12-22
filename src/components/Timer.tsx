import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { TimerContext, expload, useDispacher } from '../modules/Timer'
import Button from './Button'

const Timer: React.FC = () => {
  const { minutes, seconds, isRunning, laps } = useContext(TimerContext)
  const { tick, lap, toggle, reset } = useDispacher()

  useEffect(
    () => {
      let interval;
      if (isRunning) {
        interval = setInterval(() => tick(), 1000)
      }
      return () => clearInterval(interval);
    },
    [isRunning, tick]
  );

  return (
    <StyledTimer>
      <StyledTime>
        <span>{minutes}:{seconds}</span>
      </StyledTime>
      <StyledButtons>
        <Button onClick={() => toggle()} isRunning={isRunning} isErapsed>{isRunning ? 'Stop' : 'Start' }</Button>
        <Button onClick={() => isRunning ? lap() : reset()} isRunning={isRunning}>{isRunning ? '+Lap' : 'Reset' }</Button>
      </StyledButtons>
      <StyldLaps>
        {laps.map((lap, i) => {
          const lapTime = expload(i === 0 ? lap : Number(lap) - Number(laps[i - 1]));
          return (
            <li key={i}>{ Number(lapTime.minutes) }m{ Number(lapTime.seconds) }s</li>
          )
        })}
      </StyldLaps>
    </StyledTimer>
  )
}

const StyledTimer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
  width: 100%;
  height: 100px;
  background-color: #333;
`

const StyledTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-family: monospace;
  font-size: 50px;
  color: #fff;
`

const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button:last-child {
    margin-left: 10px;
  }
`

const StyldLaps = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 10px;
  flex-wrap: wrap;
  list-style-type: none;
  font-size: 16px;
  color: #fff;
  overflow-y: auto;
  li:not(first-child) {
    margin-left: 10px;
    padding: 2px;
  }
`

export default Timer
