import React from 'react'
import styled from 'styled-components'
export default function ListItem({ children }) {
  return <StyledLi>{children}</StyledLi>
}
const StyledLi = styled.li`
  font-size: 1em;
  padding: 5px;
`
