import React from 'react';
import Editor from './components/Editor';
import Timer from './components/Timer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Timer />
      <Editor />
    </div>
  );
}

export default App;
