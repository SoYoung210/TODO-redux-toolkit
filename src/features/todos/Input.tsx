import React, { useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { todoActions } from './todoSlice'

export const Input = () => {
  const dispatch = useDispatch()
  const [val, setVal] = useState('')
  const onChangeInput = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setVal(target.value);
  };
  const onClickSubmit = () => {
    dispatch(
      todoActions.add({
        content: val,
        id: new Date().getTime().toString(),
      })
    );
    setVal('');
  };
  return (
    <>
    <textarea
      onChange={onChangeInput}
      value={val}
      placeholder="Enter the TODO item"
      wrap="off"
    />
    <button onClick={onClickSubmit}>
      Submit
    </button>
    </>
  )
}
