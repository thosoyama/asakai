import React from 'react'
import styled from 'styled-components'

interface TimerState {
  time: number
  minutes: string
  seconds: string
}

const initialData: TimerState = {
  time: 0,
  minutes: '00',
  seconds: '00',
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

const toText = n => ('00' + n).slice(-2)

const Timer: React.FC = () => {
  const [state, setState] = React.useState<TimerState>(initialData)

  const tick = () => {
    const time = state.time + 1
    const newState: TimerState = {
      time,
      minutes: toText(Math.floor(time / 60) % 60),
      seconds: toText(time % 60),
    }
    setState(newState)
  }

  setTimeout(tick, 1000)

  return (
    <StyledTimer>
      <span>{state.minutes}</span>:<span>{state.seconds}</span>
    </StyledTimer>
  )
}

export default Timer
