import React from "react";
import { Container, Col, Image, Row } from "react-bootstrap";

const Hosts = () => (
  <div>
    <Image src='assets/hero1.png' className='header-image' />
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.4)",
        }}></div>

      <Container className='pt-3 text-center hosts'>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <Image
              src='assets/hero2.png'
              className='about-profile-pic'
              style={{ height: 300, width: 300 }}
            />
          </Col>
          <Col sm={12} md={6} lg={8}>
            <h2 className='text-white'>Lerena Holloway</h2>
            <p className='text-white'>
              Lerena Holloway is a Software Engineer, Traveller, and personal
              development enthusiast living in New York with her extensive sets
              of hiking-gear, a menagerie of lego characters, and her collection
              of Batman t-shirts. Check out her latest travel ventures on
              Facebook.
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <Image
              src='assets/hero3.png'
              className='about-profile-pic'
              style={{ height: 300, width: 300 }}
            />
          </Col>
          <Col sm={12} md={6} lg={8}>
            <h2 className='text-white '>Rick Shaw</h2>
            <p className='text-white'>
              Rick Shaw is a writer, traveler and care-giver for his mother
              living in Denver, Colorado. Be on the lookout for his
              high-consciousness novel on atonement, forgiveness, and the
              after-life.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </div>

    <Image
      src='assets/intention.png'
      className='header-image'
      style={{ height: 400 }}
    />
  </div>
);

export default Hosts;
