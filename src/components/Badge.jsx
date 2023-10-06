import React from 'react'

const Badge = ({text,className}) => {
  return (
    <button className={`font-dm font-bold text-white text-sm bg-primary py-2 px-8 absolute top-5 left-5 ${className}`}>{text}</button>
  )
}

export default Badge