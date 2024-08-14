import React, { useEffect } from "react";
import { Card, CardBody, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container fluid className="py-5 section-d" style={{ color: "#000" }}>
      <Row className="d-flex justify-content-center">
        <Col md="10" xl="8" className="text-center">
          <h3 className="fw-bold mb-4" data-aos="fade-up">
            Testimonials
          </h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0" data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
        </Col>
      </Row>
      <Row className="text-center">
        <Col md="4" className="mb-4 mb-md-0" data-aos="fade-up" data-aos-delay="100">
          <Card>
            <CardBody className="py-4 mt-2">
              <div className="d-flex justify-content-center mb-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                  className="rounded-circle shadow-1-strong"
                  width="100"
                  height="100"
                  alt="Avatar"
                />
              </div>
              <h5 className="font-weight-bold">Teresa May</h5>
              <h6 className="font-weight-bold my-3">Founder at ET Company</h6>
              <ul className="d-flex justify-content-center list-unstyled">
                <li>
                  <FontAwesomeIcon icon={faStar} size="sm" color="info" />
                </li>
                <li>
                  <FontAwesomeIcon icon={faStar} size="sm" color="info" />
                </li>
                <li>
                  <FontAwesomeIcon icon={faStar} size="sm" color="info" />
                </li>
                <li>
                  <FontAwesomeIcon icon={faStar} size="sm" color="info" />
                </li>
                <li>
                  <FontAwesomeIcon icon={faStarHalfAlt} size="sm" color="info" />
                </li>
              </ul>
              <p className="mb-2">
                <FontAwesomeIcon icon={faQuoteLeft} className="pe-2" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab hic
                tenetur.
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col md="4" className="mb-4 mb-md-0" data-aos="fade-up" data-aos-delay="200">
          <Card>
            <CardBody className="py-4 mt-2">
              <div className="d-flex justify-content-center mb-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp"
                  className="rounded-circle shadow-1-strong"
                  width="100"
                  height="100"
                  alt="Avatar"
                />
              </div>
              <h5 className="font-weight-bold">Maggie McLoan</h5>
              <h6 className="font-weight-bold my-3">
                Photographer at Studio LA
              </h6>
              <ul className="d-flex justify-content-center list-unstyled">
                <li>
                  <FontAwesomeIcon icon={faStar} size="sm" color="info" />
                </li>
                <li>
                  <FontAwesomeIcon icon={faStar} size="sm" color="info" />
                </li>
                <li>
                  <FontAwesomeIcon icon={faStar} size="sm" color="info" />
                </li>
                <li>
                  <FontAwesomeIcon icon={faStar} size="sm" color="info" />
                </li>
                <li>
                  <FontAwesomeIcon icon={faStar} size="sm" color="info" />
                </li>
              </ul>
              <p className="mb-2">
                <FontAwesomeIcon icon={faQuoteLeft} className="pe-2" />
                Autem, totam debitis suscipit saepe sapiente magnam officiis
                quaerat necessitatibus odio assumenda perferendis labore
                laboriosam.
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col md="4" className="mb-4 mb-md-0" data-aos="fade-up" data-aos-delay="300">
          <Card>
            <CardBody className="py-4 mt-2">
              <div className="d-flex justify-content-center mb-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"
                  className="rounded-circle shadow-1-strong"
                  width="100"
                  height="100"
                  alt="Avatar"
                />
              </div>
              <h5 className="font-weight-bold">Alexa Horwitz</h5>
              <h6 className="font-weight-bold my-3">
                Front-end Developer in NY
              </h6>
              <ul className="d-flex justify-content-center list-unstyled">
                <li>
                  <FontAwesomeIcon icon={faStar} size="sm" color="info" />
                </li>
                <li>
                  <FontAwesomeIcon icon={faStar} size="sm" color="info" />
                </li>
                <li>
                  <FontAwesomeIcon icon={faStar} size="sm" color="info" />
                </li>
                <li>
                  <FontAwesomeIcon icon={faStar} size="sm" color="info" />
                </li>
                <li>
                  <FontAwesomeIcon icon={faStarHalfAlt} size="sm" color="info" />
                </li>
              </ul>
              <p className="mb-2">
                <FontAwesomeIcon icon={faQuoteLeft} className="pe-2" />
                Cras sit amet nibh libero, in gravida nulla metus scelerisque
                ante sollicitudin commodo cras purus odio, vestibulum in tempus
                viverra turpis.
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
