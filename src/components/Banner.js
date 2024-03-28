import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/yoshi2.png";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col cs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>

          <Col cs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio, alhamdulillah</span>
            <h1>{`Hi! I'm Brix Monton`} </h1>
            <p>
              The href attribute requires a valid value to be accessible.
              Provide a valid, navigable address as the href value. If you
              cannot provide a valid href, but still need the element to
              resemble a link, use a button and change it with appropriate
              styles.
            </p>
            <button onClick={() => console.log("connect")}>
              Let&apos;s Connect
              <ArrowRightCircle size={25} />
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
