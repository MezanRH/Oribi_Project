import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import logo from '../../assets/Logo.webp'
import Image from '../Image'
import PortionHeading from '../PortionHeading'
import List from '../List'
import{BiLogoFacebook,BiLogoLinkedin,BiLogoInstagram} from 'react-icons/bi'

const Footer = () => {
  return (
    <footer className='bg-ash py-14'>
      <Container>
        <Flex>
          <div className='w-2/12'>
            <PortionHeading text="MENU" className="mb-4"/>
            <ul className='flex flex-col gap-y-1.5'>
              <List text="Home"/>
              <List text="Shop"/>
              <List text="About"/>
              <List text="Contacts"/>
              <List text="Journal"/>
            </ul>
          </div>
          <div className='w-2/12'>
            <PortionHeading text="SHOP" className="mb-4"/>
            <ul className='flex flex-col gap-y-1.5'>
              <List text="Category 1"/>
              <List text="Category 2"/>
              <List text="Category 3"/>
              <List text="Category 4"/>
              <List text="Category 5"/>
            </ul>
          </div>
          <div className='w-2/12'>
            <PortionHeading text="HELP" className="mb-4"/>
            <ul className='flex flex-col gap-y-1.5'>
              <List text="Privacy Policy"/>
              <List text="Terms & Conditions"/>
              <List text="Special E-shop"/>
              <List text="Shipping"/>
              <List text="Secure Payments"/>
            </ul>
          </div>
          <div className='w-3/12'>
            <PortionHeading text="(052) 611-5711" className="mb-4"/>
            <PortionHeading text="company@domain.com" className="mb-4"/>
            <ul className='flex flex-col gap-y-1.5'>
              <List text="575 Crescent Ave. Quakertown, PA 18951"/>
            </ul>
          </div>
          <div className='w-1/5'>
            <Image src={logo}/>
          </div>
        </Flex>
        <Flex className='mt-16'>
          <Flex className='w-1/2 gap-x-6'>
            <BiLogoFacebook/>
            <BiLogoLinkedin/>
            <BiLogoInstagram/>
          </Flex>
          <div className='w-1/2'>
            <p className='font-dm font-normal text-sm text-right'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
          </div>
        </Flex>
      </Container>
    </footer>
  )
}

export default Footer