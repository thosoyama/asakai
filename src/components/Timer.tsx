import React, { useReducer, useContext, useEffect } from 'react'
import styled from 'styled-components'
import TimerReducer, { TimerContext, initialState, expload, tick, toggle, reset, lap } from '../modules/Timer'
import Button from './Button'

const Timer: React.FC = () => {
  const { minutes, seconds, isRunning, laps, dispatch } = useContext(TimerContext)

  useEffect(
    () => {
      let interval;
      if (isRunning) {
        interval = setInterval(() => tick(dispatch), 1000)
      }
      return () => clearInterval(interval);
    },
    [isRunning, dispatch]
  );

  return (
    <StyledTimer>
      <div>
        <span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <Button onClick={() => toggle(dispatch)} isRunning={isRunning} isErapsed>{isRunning ? 'Stop' : 'Start' }</Button>
      <Button onClick={() => isRunning ? lap(dispatch) : reset(dispatch)} isRunning={isRunning}>{isRunning ? '+Lap' : 'Reset' }</Button>
      <Laps>
        {laps.map((lap, i) => {
          const lapTime = expload(i === 0 ? lap : Number(lap) - Number(laps[i - 1]));
          return (
            <li key={i}>{ lapTime.minutes }m{ lapTime.seconds }s</li>
          )
        })}
      </Laps>
    </StyledTimer>
  )
}

const TimerContainer: React.FC = () => {
  const [ state, dispatch ] = useReducer(TimerReducer, initialState)

  return (
    <TimerContext.Provider value={{ ...state, dispatch }}>
        <Timer />
    </TimerContext.Provider>
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
  font-family: monospace;
  font-size: 50px;
  color: #fff;
`

const Laps = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
  list-style-type: none;
  li {
    margin: 10px;
  }
`

export default TimerContainer
