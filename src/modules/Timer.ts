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

export const TimerContext = createContext({
  ...initialState,
  dispatch: null,
})

export const tick = (dispatch) => {
  dispatch({
    type: 'tick',
    payload: {},
  })
}

export const toggle = (dispatch) => {
  dispatch({
    type: 'toggle',
    payload: {},
  })
}

export const reset = (dispatch) => {
  dispatch({
    type: 'reset',
    payload: {},
  })
}

export const lap = (dispatch) => {
  dispatch({
    type: 'lap',
    payload: {},
  })
}

const toText = n => ('00' + n).slice(-2)

export const expload = (time) => {
  return {
    minutes: toText(Math.floor(time / 60) % 60),
    seconds: toText(time % 60),
  }
}

export default function TimerReducer(state, action) {
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
