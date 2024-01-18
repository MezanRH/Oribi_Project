
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import Product from '../components/Product'
import Slider from "react-slick";
import NextArrow from "../components/NextArrow"
import PreveArrow from "../components/PreveArrow"

const Home = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow class=" absolute right-0 top-2/4 -translate-y-1/2 z-20"/>,
    prevArrow: <PreveArrow class=" absolute left-0 top-2/4 -translate-y-1/2 z-20"/>,
  };

  return (
    <Container>

<Slider {...settings}>
          <div>
          <Product heading="Product 1" price="35"/>
          </div>
          <div>
          <Product heading="Product 1" price="35"/>
          </div>
          <div>
          <Product heading="Product 1" price="35"/>
          </div>
          <div>
          <Product heading="Product 1" price="35"/>
          </div>
          <div>
          <Product heading="Product 1" price="35"/>
          </div>
          <div>
          <Product heading="Product 1" price="35"/>
          </div>
          
        </Slider>

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