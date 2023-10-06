import React from 'react'
import { TbTruckReturn } from 'react-icons/tb';

const Facility = () => {
  return (
    <div className='flex items-center gap-x-4'>
      <TbTruckReturn/>
      <p className='font-dm font-normal text-base text-third'>Free shipping</p>
    </div>
  )
}

export default Facility