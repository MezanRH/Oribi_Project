import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import Product from '../components/Product'

const Home = () => {
  return (
    <Container>
      <SubHeading text="Our Bestseller"/>
      <Flex>
        <Product heading="Product 1" price="35"/>
        <Product heading="Product 2" price="44"/>
        <Product heading="Product 3" price="44"/>
        <Product heading="Product 4" price="44"/>
      </Flex>
    </Container>
  )
}

export default Home