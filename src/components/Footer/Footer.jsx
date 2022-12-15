import React from "react";
import './footer.css'
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import {Link} from "react-router-dom";
import logo from '../../assets/images/eco-logo.png';
const Footer = ()=>{
    return (
      <footer className="footer">
        <Container>
            <Row>
                <Col lg='4' className="mb-4">
                <div className="logo">
                    <img src={logo} alt="" />
                    <div>
                        <h1 className="text-white">Multimart</h1>
                    </div>
                </div>
                <p className="footer__text mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet.</p>
                </Col>

                <Col lg='3' className="mb-4">
                <div className="footer__quick-links">
                    <h4 className="quick__links-title">Top Categories</h4>
                    <ListGroup className="mb-3">
                        <ListGroupItem className="ps-0 border-0">
                            <Link to='#'>Mobile Phones</Link>
                        </ListGroupItem>

                        <ListGroupItem className="ps-0 border-0">
                            <Link to='#'>Modern Sofa</Link>
                        </ListGroupItem>

                        <ListGroupItem className="ps-0 border-0">
                            <Link to='#'>Arm Chair</Link>
                        </ListGroupItem>

                        <ListGroupItem className="ps-0 border-0">
                            <Link to='#'>Smart Watches</Link>
                        </ListGroupItem>
                    </ListGroup>
                </div>
                </Col>

                <Col lg='2' className="mb-4">
                 <div className="footer__quick-links">
                    <h4 className="quick__links-title">Useful Links</h4>
                    <ListGroup className="mb-3">
                        <ListGroupItem className="ps-0 border-0">
                            <Link to='/shop'>Shop</Link>
                        </ListGroupItem>

                        <ListGroupItem className="ps-0 border-0">
                            <Link to='/cart'>Cart</Link>
                        </ListGroupItem>

                        <ListGroupItem className="ps-0 border-0">
                            <Link to='/login'>Login</Link>
                        </ListGroupItem>

                        <ListGroupItem className="ps-0 border-0">
                            <Link to='#'>Privacy Policy</Link>
                        </ListGroupItem>
                    </ListGroup>
                </div>
                </Col>

                <Col lg='3' className="mb-4">
                
                <div className="footer__quick-links">
                    <h4 className="quick__links-title">Contact</h4>
                    <ListGroup className="mb-3 d-flex">
                        <ListGroupItem className="ps-0 border-0 d-flex">
                            <span className="calu"><i class="ri-map-pin-line"></i></span>
                            <p>Buenos Aires, Argentina</p>
                        </ListGroupItem>

                        <ListGroupItem className="ps-0 border-0 d-flex">
                        <span className="calu"><i class="ri-mail-line"></i></span>
                            <p>carlamarquez.distextil@gmail.com</p>
                        </ListGroupItem>

                        <ListGroupItem className="ps-0 border-0 d-flex">
                            <span className="calu"><i class="ri-linkedin-fill"></i></span>
                         <a href='https://www.linkedin.com/in/carla-marquez-/'><p>Linkedin</p></a>
                        </ListGroupItem>

                        <ListGroupItem className="ps-0 border-0 d-flex">
                        <span className="calu"><i class="ri-github-fill"></i></span>
                         <a href='https://github.com/caluMarquez'><p>GitHub</p></a>
                        </ListGroupItem>


                    </ListGroup>
                </div>
                

                </Col>
            </Row>
        </Container>
      </footer>
    )
}

export default Footer;