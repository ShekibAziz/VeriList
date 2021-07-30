import React from 'react'
import styled from 'styled-components'
export default function Input({
  placeholder,
  className,
  value,
  onChange,
  onKeyDown,
}) {
  return (
    <StyledInput
      placeholder={placeholder}
      className="add-item"
      value={value}
      onKeyDown={onKeyDown}
      onChange={onChange}
    />
  )
}

const StyledInput = styled.input`
  width: 200px;
  background-color: #e4e4e4;
  border: none;
  border-radius: 15px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  padding: 10px 15px;
  font-size: 1em;
  transition: all 0.3s;
  &::placeholder {
    color: #aaa;
  }
  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: 1px 2px 2px 2px rgba(108, 14, 254, 0.2);
  }
`
