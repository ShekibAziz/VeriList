import React from 'react'
import ListItem from '../Atoms/ListItem'
import styled from 'styled-components'
export default function List({ className, listItems, displayItem }) {
  return (
    <Styledul className={className}>
      {listItems.map((item) => (
        <ListItem key={item.id}>{item[displayItem]}</ListItem>
      ))}
    </Styledul>
  )
}

const Styledul = styled.ul`
  margin-top: 2em;
`
