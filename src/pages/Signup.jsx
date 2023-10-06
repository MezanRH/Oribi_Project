import React from 'react'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { increment,dincrement } from '../slices/counterSlice'

const Signup = () => {

const data = useSelector((state)=>state.shawon.value)
let dispatch = useDispatch()
  
  return (
    <Container>
      
      <h2 className='font-dm font-bold text-49'>Sign up</h2>
      <p>{window.location.pathname.replace("/","").replace("-"," ")}</p>
      <button onClick={()=>dispatch(increment(3))}>+</button>
      <h1>{data}</h1>
      <button onClick={()=>dispatch(dincrement())}>-</button>
    </Container>
  )
}

export default Signup