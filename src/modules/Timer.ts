import React, { useContext } from 'react'
import { createContext } from 'react'

export interface TimerState {
  time: number
  minutes: string
  seconds: string
  isRunning: boolean
  laps: string[]
}

export const initialState: TimerState = {
  time: 0,
  minutes: '00',
  seconds: '00',
  isRunning: false,
  laps: [],
}

export const TimerContext = createContext(initialState)

const initialDispatch: React.Dispatch<any> = () => {}

export const DispachContext = createContext(initialDispatch);

type Dispacher = {
  [action: string]: () => void
}

export const useDispacher = () => {
  const dispatch = useContext(DispachContext);
  const dispacher: Dispacher = {
    tick: () => {
      dispatch({ type: 'tick', payload: {} })
    },
    toggle: () => {
      dispatch({ type: 'toggle', payload: {} })      
    },
    reset: () => {
      dispatch({ type: 'reset', payload: {} })      
    },
    lap: () => {
      dispatch({ type: 'lap', payload: {} })      
    }
  }
  return dispacher;
}

const toText = n => ('00' + n).slice(-2)

export const expload = (time) => {
  return {
    minutes: toText(Math.floor(time / 60) % 60),
    seconds: toText(time % 60),
  }
}

export const TimerReducer = (state, action) => {
  const time = state.time + 1

  switch (action.type) {
    case 'tick':
      return {
        ...state,
        time,
        ...expload(time),
      }
    case 'toggle':
      return {
        ...state,
        isRunning: !state.isRunning,
      }
    case 'reset':
      return {
        ...initialState,
      }
    case 'lap':
      return {
        ...state,
        laps: [ ...state.laps, state.time],
      }
    default:
      return state
  }
}
