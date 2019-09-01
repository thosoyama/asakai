import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Editor from './components/Editor';
import Timer from './components/Timer';

const App: React.FC = () => {
  return (
    <StyledApp className="App">
      <StyledGlobal />
      <Timer />
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

