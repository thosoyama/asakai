import React from 'react'
import MonacoEditor from 'react-monaco-editor'

const options = {
  fontSize: 16,
}

const onChange = (text) => {
  window.localStorage.setItem('text', text)
}

const Editor: React.FC = () => {
  let editor

  window.addEventListener('resize', () => editor.layout())

  return (
    <MonacoEditor
      width="100%"
      height="100%"
      language="markdown"
      theme="vs-dark"
      options={options}
      value={window.localStorage.getItem('text') || ''}
      onChange={onChange}
      editorDidMount={obj => editor = obj}
    />
  )
}

export default Editor
