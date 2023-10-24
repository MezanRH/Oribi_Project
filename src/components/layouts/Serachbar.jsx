import React, { useState } from 'react'
import Container from '../Container'
import Flex from '../Flex'
import {FaBars,FaShoppingCart} from "react-icons/fa"
import {BiSolidUser} from "react-icons/bi"
import {RxTriangleDown} from "react-icons/rx"
import {AiOutlineSearch} from "react-icons/ai"
import {FaRegWindowClose} from "react-icons/fa"
import {MdDeleteForever} from "react-icons/md"
import { useSelector,useDispatch } from 'react-redux'
import { Encrement,Decrement,removeFromCart } from '../../slices/cartSlice'

const Serachbar = () => {

  let dispatch = useDispatch()

  let [open,setOpen] = useState(false);

  let cart = useSelector((state)=>state.cart.cartItem)
  
  let handleEncrement = (item)=>{
    dispatch(Encrement(item))
    
  }
  let handleDecrement = (item)=>{
    dispatch(Decrement(item))
  }

  

  return (
    <section className='bg-ash py-10'>
      <Container>
        <Flex>
          <Flex className='w-1/5 items-center gap-x-2.5 justify-start'>
            <FaBars/> Shop by Category
          </Flex>
          <div className='w-3/5 relative'>
            <input type="text" className='w-full py-4 px-5' placeholder='Search Products'/>
            <AiOutlineSearch className='text-2xl absolute top-1/2 right-4 -translate-y-1/2'/>
          </div>
          <Flex className='w-1/5 gap-x-10 justify-end items-center relative'>
            <Flex>
              <BiSolidUser/>
              <RxTriangleDown/>
            </Flex>
            <FaShoppingCart onClick={()=>setOpen(true)}/><div className=' absolute -right-3 top-0'>{cart.length}</div>
          </Flex>
        </Flex>
        {open &&
        <div className='w-2/6 bg-black text-white h-screen absolute top-0 right-0 z-10'>
          <FaRegWindowClose onClick={()=>setOpen(false)} className='text-2xl cursor-pointer ml-1 mb-4'/>

          <ul className='bg-ash text-black py-5 px-2 flex justify-between'>
            <li className='ml-8'>Product</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Total</li>
          </ul>
          {
            cart.map(item=>(
              <ul key={item.title} className='flex justify-between relative'>
                <li className=' bg-red-500 absolute left-0 top-1 text-white mr-2 hover:bg-red-700 cursor-pointer' onClick={()=>dispatch(removeFromCart(item))}><MdDeleteForever/></li>
                <li className='ml-[65px]'>{item.title}</li>
                <li>{item.price}</li>
                <li>
                <button className='mr-3 text-2xl' onClick={()=>handleDecrement(item)}>-</button>
                {item.quantity}
                <button className='ml-3 text-2xl' onClick={()=>handleEncrement(item)}>+</button>
                </li>
                <li>{item.price*item.quantity}</li>
              </ul>
            ))
          }

        </div>

         }
      </Container>
    </section>
  )
}

export default Serachbar