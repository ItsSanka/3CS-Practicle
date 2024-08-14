import React, { useRef } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/Logo.png'



const Header = () => {

  return (
    <div>

      <Container fluid className='header'>
        <Row>
          <Col xs={12} lg={12}>
            <Navbar expand="lg">
              <Navbar.Brand className='logo' to='/'><img className='img-fluid' src={logo} alt="logo" /></Navbar.Brand> 
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#">Services</Nav.Link>
                  <Nav.Link href="#">About Us</Nav.Link>
                  <Nav.Link href="#">Contact Us</Nav.Link>
                  <Nav.Link href="#">Careers</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

          </Col>
        </Row>
      </Container>


    </div>
  )
}

export default Header