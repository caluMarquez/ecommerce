import React, {useState, useEffect} from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png'
import '../styles/home.css'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';
import products from '../assets/data/products';
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from '../components/UI/Clock';


const Home = ()=>{


const [trendingProducts, setTrendingProducts] = useState([]);
const [bestSales, setBestSales] = useState([]);
const year = new Date().getFullYear();


useEffect(()=>{
    const filteredTrendingProducts = products.filter((item)=> item.category === 'chair' );

    const filteredBestSales = products.filter((item)=> item.category === 'sofa');

    setTrendingProducts(filteredTrendingProducts);
    setBestSales(filteredBestSales);
},[])

    return (
       <Helmet title={'Home'}>
        <section className="hero__section">
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="hero__content">
                        <p className="hero__subtitle">
                        Trending product in {year}
                        </p>
                        <h2>
                          Make Your Interior More Minimalistic & Modern  
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nostrum, distinctio cupiditate ducimus, tenetur ratione dolorum voluptatem dolore accusantium quod suscipit mollitia modi alias assumenda! Dignissimos facilis neque iste quidem!
                     </p>

                     <motion.button whileTap={{scale:1.2}} className="buy__btn"><Link to='/shop'>SHOP NOW</Link></motion.button>
                        </div>
                    </Col>
                        
                        <Col lg='6' md='6'>
                            <div className="hero__img">
                                <img src={heroImg} alt=""/>
                            </div>
                        </Col>
                </Row>
            </Container>
        </section>
        <Services/>

        <section className="trending__products">
            <Container>
                <Row>
                    <Col lg='12' className='text-center'>
                    <h2 className='section__title'>Trending Products</h2>
                    </Col>
                    <ProductsList data={trendingProducts}/>
                </Row>
            </Container>
        </section>

        <section className="best__sales">
            <Container>
                <Row>
                    <Col lg='12' className='text-center'>
                    <h2 className='section__title'>Best Sales</h2>
                    </Col>
                    <ProductsList data={bestSales} />
                </Row>
            </Container>
         </section>

         <section className="timer__count">
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="clock__top-content">
                            <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                            <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
                        </div>
                        <Clock/>

                        <button className="buy__btn store__btn">
                            <Link to='/shop'>Visit Store</Link>
                        </button>
                    </Col>
                    <Col lg='6' md='6' className='text-end'>
                        <img src={counterImg} alt="" />
                    </Col>
                </Row>
            </Container>
         </section>
        </Helmet>
    )
}

export default Home;