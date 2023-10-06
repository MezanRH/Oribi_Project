import React from 'react'

const PortionHeading = ({text,className}) => {
  return (
    <h4 className={`font-dm font-bold text-base text-primary ${className}`}>{text}</h4>
  )
}

export default PortionHeading