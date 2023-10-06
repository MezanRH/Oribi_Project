import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`py-4 px-16 bg-primary text-white font-dm font-bold text-sm border border-solid border-primary hover:bg-white hover:text-primary duration-500 ${className}`}>{text}</button>
  )
}

export default Button