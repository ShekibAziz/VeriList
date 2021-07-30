import React from 'react'
import Input from '../Atoms/Input'
import Button from '../Atoms/Button'
import List from '../Molecules/List'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components'
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons'

export default function OrderedList() {
  const [orderedList, setOrderedList] = React.useState([])
  const [value, setValue] = React.useState('')
  const [ascendingOrder, setAscendingOrder] = React.useState(true)

  //sorting the items in the list
  const sort = () => {
    setOrderedList((orderedList) => {
      const newOrderedList = [...orderedList]
      //sort alphabetically
      newOrderedList.sort((a, b) => a.item.localeCompare(b.item))
      !ascendingOrder && newOrderedList.reverse()
      return newOrderedList
    })
  }

  //adding items to the ordered list.
  const addToOrderedList = () => {
    const id = uuid()
    const newOrderedList = [...orderedList, { item: value, id }]
    setOrderedList(newOrderedList)
    setValue('')
    sort()
  }

  //sort
  React.useEffect(() => {
    sort()
  }, [ascendingOrder])

  return (
    <Page>
      <ControlBar>
        <Input
          placeholder={'Enter to Submit'}
          className="add-item"
          value={value}
          onChange={({ target }) => setValue(target.value)}
          onKeyDown={({ key }) =>
            key === 'Enter' && value.trim() !== '' && addToOrderedList()
          }
        />
        <Button
          className="sort-direction"
          title={ascendingOrder ? <CaretUpOutlined /> : <CaretDownOutlined />}
          handleClick={() => setAscendingOrder(!ascendingOrder)}
        />
        <Button
          className={'clear-list'}
          title={'CL'}
          handleClick={() => {
            setOrderedList([])
            setValue('')
          }}
        />
      </ControlBar>
      <List
        className={'items-list'}
        displayItem={'item'}
        listItems={orderedList}
      />
    </Page>
  )
}

const Page = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
`
const ControlBar = styled.div`
  display: flex;
`
