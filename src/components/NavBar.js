import { Navbar, Nav, Container } from "react-bootstrap";
import React from "react";
import navIcon1 from '../assets/img/block-linkedin.png';
import navIcon2 from '../assets/img/block-github.png';
import navIcon3 from '../assets/img/block-fb.png';
import logo from '../assets/img/logo.png';

export const NavBar = () => {

  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
      <Container className="container">
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" className="logo-img"/>
        </Navbar.Brand>
        <Navbar.Toggle className="custom-toggle"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home" className='navbar-link-home'>HOME</Nav.Link>
            <Nav.Link href="#skills" className='navbar-link-skills'>SKILLS</Nav.Link>
            <Nav.Link href="#projects" className='navbar-link-projects'>PROJECTS</Nav.Link>
          </Nav>          
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/bsmonton/"><img src={navIcon1} alt="" /></a>
            <a href="https://github.com/HumanSockPuppet"><img src={navIcon2} alt="" /></a>
            <a href="https://facebook.com/handsomemechanic"><img src={navIcon3} alt="" /></a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
