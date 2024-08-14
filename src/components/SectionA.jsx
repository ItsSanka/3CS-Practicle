import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img_1 from '../assets/section-a-img.png'
import Aos from 'aos';
import { useEffect } from 'react';




const SectionA = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])

  return (
    <div className='section-a'>
      <Container>
        <Row>
          <Col xs={12} lg={5} md={5} className='image' data-aos = "fade-up">
            <img className='w-100' src={img_1} alt="image" />
          </Col>
          <Col xs={12} lg={7} md={7} className='content' data-aos = "fade-down">
            <h1>Web & Mobile App Development</h1>
            <p>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
            <a title='Click to visit' href="#">Learn More</a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SectionA