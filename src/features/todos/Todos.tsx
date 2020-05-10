import React from 'react'
import { useSelector } from 'react-redux'
import { Item, todoSelectors } from './todoSlice'
import { Input } from './Input'

export const TodoList = () => {
  const todoItems: Item[] = useSelector(todoSelectors.items)
  return (
    <section>
      <h1>Hello TODO</h1>
      <Input />
      {
        todoItems.map(item => (
          <div>{item.content}</div>
        ))
      }
    </section>
  )
}
