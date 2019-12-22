import React, { useReducer } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Editor from './components/Editor';
import Timer from './components/Timer';
import { TimerContext, DispachContext, TimerReducer, initialState } from './modules/Timer';

const App: React.FC = () => {
  const [ state, dispatch ] = useReducer(TimerReducer, initialState)

  return (
    <StyledApp className="App">
      <StyledGlobal />
      <TimerContext.Provider value={{ ...state }}>
        <DispachContext.Provider value={ dispatch }>
          <Timer />
        </DispachContext.Provider>
      </TimerContext.Provider>
      <Editor />
    </StyledApp>
  );
}

const StyledGlobal = createGlobalStyle`
  html, body, #root {
    height: 100%;
    overflow: hidden;
  }
`

const StyledApp = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

export default App;

