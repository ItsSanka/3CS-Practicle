import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Copyright = () => {
    return (
        <div className='Copyright'>
            <Container>
                <Row>
                    <Col xs={12} lg={12} className='content'>
                    <a className='text-center'>Privacy Policy</a> &nbsp; | &nbsp;
                    <a className='text-center'>Terms & Conditions</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Copyright