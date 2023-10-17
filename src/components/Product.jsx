import React from 'react'
import Image from './Image'
import productImg from '../assets/Bag.webp'
import Badge from './Badge'
import Flex from './Flex'
import PortionHeading from './PortionHeading'
import {AiFillHeart} from 'react-icons/ai'
import {BiGitCompare} from 'react-icons/bi'
import {BsCartFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { addTocart } from '../slices/cartSlice'
import { useDispatch } from 'react-redux'

const Product = ({heading,price}) => {

  let dispatch = useDispatch()
 
  let handleCart = ()=>{
    dispatch(addTocart({
      title: heading,
      price: price,
      image: productImg,
      quantity: 1,
    }))
  }

  return (
    <div className='mx-3'>
      <div className='relative overflow-hidden group'>
          <Image src={productImg} className="w-full"/>
          <Badge text="New"/>
          <div className='bg-white absolute -bottom-32 left-0 w-full p-6 group-hover:bottom-0 duration-500'>
            <Flex className='items-center justify-end gap-x-2'>
              <p>Add to Wish List</p> <AiFillHeart/>
            </Flex>
            <Flex className='items-center justify-end gap-x-2 my-2'>
              <p>Compare</p> <BiGitCompare/>
            </Flex>
            <Flex className='items-center justify-end gap-x-2 cursor-pointer'>
              <p onClick={handleCart}>Add to Cart</p> <BsCartFill/>
            </Flex>
          </div>
      </div>
      <Flex className="justify-between mt-3">
        <Link to="/">
        <PortionHeading text={heading}/>
        </Link>
        <p className='font-dm font-regular text-base'>${price}</p>
      </Flex>
    </div>
  )
}

export default Product