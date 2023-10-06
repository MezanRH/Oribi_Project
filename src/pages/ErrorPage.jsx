import React from 'react'
import Image from '../components/Image'
import Error from '../assets/Error.png'
import Container from '../components/Container'
import {AiOutlineSearch} from 'react-icons/ai'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='py-20'>
      <Container>
      <Image src={Error}/>
      <p className='font-dm font-normal text-base max-w-644 my-16'>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
      <div className='w-2/5 relative'>
      <input type="text" className='w-full py-4 px-5 border border-solid border-black' placeholder='Search Products'/>
      <AiOutlineSearch className='text-2xl absolute top-1/2 right-4 -translate-y-1/2'/>
      
      </div>
      
      <Link to="/">
      <Button className="mt-16" text="Back to Home"/>
      </Link>
          
    </Container>
    </section>
  )
}

export default ErrorPage