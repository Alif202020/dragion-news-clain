import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/footer/Footer';
import Header from '../pages/shared/header/Header';
import Leftsidenave from '../pages/shared/leftsidenave/Leftsidenave';
import Rightsidenave from '../pages/shared/rightsidenave/Rightsidenave';

const Main = () => {
    return (
        <div>
                <Header></Header>
                <Container>
                    <Row>
                        <Col lg='2' className='d-none d-lg-block'>
                        <Leftsidenave></Leftsidenave>
                        </Col>
                        <Col lg='7'>
                        <Outlet></Outlet>
                        </Col>
                        <Col lg='3'>
                        <Rightsidenave></Rightsidenave>
                        </Col>
                    </Row>
                </Container>
                <Footer></Footer>
        </div>
    );
};

export default Main;