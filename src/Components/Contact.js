import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/features/counter'

function Contact() {
  const dispatch = useDispatch()
  const counter = useSelector((state)=>state.counter.value)
  console.log(counter)
  return (
    <div>
      <button className='btn btn-sm btn-outline-danger mx-3' onClick={()=>dispatch(decrement())}>-</button>
      {counter}
      <button className='btn btn-sm btn-outline-primary mx-3'onClick={()=>dispatch(increment())}>+</button>
    </div>
  )
}

export default Contact