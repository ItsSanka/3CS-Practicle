import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img_1 from '../assets/section-b-img.png'
import Aos from 'aos';
import { useEffect } from 'react';



const SectionB = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])

  return (
    <div className='section-b'>
      <Container>
        <Row>
          <Col xs={12} lg={7} md={7} className='content' data-aos = "fade-down">
            <h3>Digital Strategy Consulting</h3>
            <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
            <a title='Click to visit' href="#">Learn More</a>
          </Col>
          <Col xs={12} lg={5} md={5} className='image' data-aos = "fade-up">
            <img className='w-100' src={img_1} alt="image" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SectionB