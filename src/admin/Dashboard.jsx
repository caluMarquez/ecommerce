
import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import '../styles/dashboard.css';
const Dashboard = ()=>{
    return (
        <>
        <section>
            <Container>
                <Row>
                    <Col className="lg-3">
                        <div className="revenue__box">
                            <h5>Total Sales</h5>
                            <span>$777</span>
                        </div>
                    </Col>
                    <Col className="lg-3">
                        <div className="order__box">
                            <h5>Orders</h5>
                            <span>$456</span>
                        </div>
                    </Col>
                    <Col className="lg-3">
                        <div className="products__box">
                            <h5>Total products</h5>
                            <span>Num</span>
                        </div>
                    </Col>
                    <Col className="lg-3">
                        <div className="users__box">
                            <h5>Total Users</h5>
                            <span>Num</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}

export default Dashboard;