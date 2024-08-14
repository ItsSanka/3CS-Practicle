import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Aos from 'aos';
import { useEffect } from 'react';


const SectionC = () => {
    useEffect(()=>{
        Aos.init({duration:2000});
      },[])

    return (
        <div className='section-c'>
            <Container>
                <Row>
                    <Col xs={12} lg={12} className='content' data-aos = "fade-right">
                        <h3>Frequently asked questions</h3>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Lorem ipsum dolor sit amet consectetur.</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Lorem ipsum dolor sit amet consectetur.</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Lorem ipsum dolor sit amet consectetur.</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SectionC