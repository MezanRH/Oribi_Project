import React from 'react'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/Logo.webp'
import Container from '../Container'
import List from '../List'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (

  <section className='py-8'>
    <Container>
      <Flex>
        <div className="w-1/5">
          <Image src={logo}/>
        </div>
        <Flex className="w-4/5 justify-end">
          <ul className='flex gap-x-10'>
            <Link to={"/"}>
              <List text="Home"/>
            </Link>
            <Link to={"/shop"}>
              <List text="Shop"/>
            </Link>
            <List text="About"/>
            <List text="Contacts"/>
            <List text="Journal"/>
          </ul>
        </Flex>
      </Flex>
    </Container>
  </section>
      
  )
}

export default Navbar