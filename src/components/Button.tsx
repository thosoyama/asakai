import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
    onClick: any
    isRunning: boolean
    isErapsed?: boolean
}

const Button: React.FC<ButtonProps> = (props) => {
  const { isErapsed } = props

  return (
    <>
      {isErapsed ? (
        <ElapsedButton {...props}>
            {props.children}
        </ElapsedButton>
      ) : (
        <NormalButton {...props}>
            {props.children}
        </NormalButton>
      )}
    </>
  )
}

const NormalButton = styled.button<ButtonProps>`
    margin: 0 10px;
    width: 50px;
    height: 50px;
    border: 1px solid #333;
    border-radius: 50%;
    font-size: 12px;
    text-align: center;
    outline: none;
    background-color: #ccc;
    cursor: pointer;
    &:hover {
        background-color: #ddd;
    }
    &:active {
        background-color: #ccc
    }
`

const ElapsedButton = styled(NormalButton)<ButtonProps>`
    background-color: ${ props => props.isRunning ? '#966' : '#696' };
    &:hover {
        background-color: ${ props => props.isRunning ? '#a77' : '#7a7' };
    }
    &:active {
        background-color: ${ props => props.isRunning ? '#966' : '#696' };
    }
`

export default Button
