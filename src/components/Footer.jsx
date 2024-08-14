import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../assets/Logo.png'
import Aos from 'aos';
import { useEffect } from 'react';



const Footer = () => {
    useEffect(()=>{
        Aos.init({duration:2000});
      },[])

    return (
        <div className='footer'>
            <Container fluid>
                <Row>
                    <Col xs={12} lg={6} md={12} className='logo' data-aos = "fade-up">
                        <a href="#"> <img className='img-fluid' src={logo} alt="image" /></a>
                        <p>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
                    </Col>
                    <Col xs={12} lg={3} md={6} className='tect' data-aos = "fade-down">
                        <h4>Our Technologies</h4>
                        <a href="#">ReactJS</a>
                        <a href="#">Gatsby</a>
                        <a href="#">NextJS</a>
                        <a href="#">NodeJS</a>
                    </Col>
                    <Col xs={12} lg={3} md={6} className='service' data-aos = "fade-up">
                        <h4>Our Services</h4>
                        <a href="#">Social media Marketing</a>
                        <a href="#">Web & Mobile App Development</a>
                        <a href="#">Data & Analytics</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer