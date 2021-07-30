import React from 'react'
import styled from 'styled-components'
export default function Button({ className, title, handleClick }) {
  return (
    <StyledButton className={className} onClick={handleClick}>
      {title}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  margin-left: 3px;
  border-radius: 3px;
  padding: 10px 15px;
  background-color: #6c0efe;
  outline: none;
  border: none;
  color: white;
  text-align: center;
  text-transform: capitalize;
  transition: 0.3s;
  font-size: 1em;

  &:focus {
    outline: none;
  }
  &:hover {
    box-shadow: 1px 2px 2px 2px rgba(108, 14, 254, 0.2);
  }
`
