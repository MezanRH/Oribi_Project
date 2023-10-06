import React from 'react'

const List = ({text,className}) => {
  return (
    <li className={`font-dm text-sm font-normal text-third hover:text-primary cursor-pointer ${className}`}>{text}</li>
  )
}

export default List