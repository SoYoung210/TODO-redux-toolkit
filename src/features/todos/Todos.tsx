import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todoSelectors, Item, fetchTodoList } from './todoSlice'
import { Input } from './Input'

export const TodoList = () => {
  const dispatch = useDispatch()
  const todoItems: Item[] = useSelector(todoSelectors.items)
  const isLoading: boolean = useSelector(
    todoSelectors.isLoading
  )

  useEffect(() => {
    dispatch(fetchTodoList())
  }, [dispatch])

  const renderByFetchState = (isLoading: boolean) => (
    isLoading
      ? <div>Loading</div>
      : (
        <>
        {
          todoItems.map(item => (
            <div key={item.id}>{item.content}</div>
          ))
        }
        </>
      )
  )
  return (
    <section>
      <h1>Hello TODO</h1>
      <Input />
      { renderByFetchState(isLoading) }
    </section>
  )
}
