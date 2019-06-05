import React from 'react';
import MonacoEditor from 'react-monaco-editor';

const options = {
  fontSize: 16,
};

const Editor: React.FC = () => {
  return (
    <MonacoEditor
      width="100%"
      height="768"
      language="markdown"
      theme="vs-dark"
      options={options}
      value=""
    />
  );
}

export default Editor;
