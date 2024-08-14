import React, { useRef, useLayoutEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../assets/slider-1.jpg';
import slider2 from '../assets/slider-2.jpg';
import { gsap } from 'gsap';

const Slider = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    if (comp.current) {
      let ctx = gsap.context(() => {
        const t1 = gsap.timeline();
        t1.from(comp.current, {
          xPercent: -100,
          duration: 1.3,
          delay: 0.3,
          ease: 'power2.out',
        });
      }, comp);

      return () => ctx.revert();
    }
  }, []);

  return (
    <div className="slider" ref={comp}>
      <Container fluid>
        <Row>
          <Col xs={12} lg={12} className="content">
            <Carousel>
              <Carousel.Item>
                <img className="w-100" src={slider1} alt="slider" />
                <Carousel.Caption>
                  <h3>We crush your competitors, goals, and sales records - without the B.S.</h3>
                  <a title="Click to visit" href="#">
                    Get free consultation
                  </a>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="w-100" src={slider2} alt="slider" />
                <Carousel.Caption>
                  <h3>We crush your competitors, goals, and sales records - without the B.S.</h3>
                  <a title="Click to visit" href="#">
                    Get free consultation
                  </a>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <div className="floating-image-shade"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Slider;
