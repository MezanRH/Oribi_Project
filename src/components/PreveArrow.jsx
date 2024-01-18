import React from 'react'
import {FaLongArrowAltLeft} from "react-icons/fa"

const PreveArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={` flex cursor-move text-white bg-[#979797] w-16 h-16 rounded-full inline-block text-39 justify-center items-center ${props.class}`}
      // style={{ ...style, display: "inline-block", background: "green" }}
      onClick={onClick}
    >
      <FaLongArrowAltLeft/>
    </div> 
  )
}

export default PreveArrow