import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
//import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/yoshi 3.png";
import music from '../assets/music.mp3';
import { useEffect, useRef } from "react";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";

export const Banner = () => { 
  const [value, setValue] = useState(1);
  const buttonText = value %2 ===0 ? <BsFillPauseFill className="music-icon"/> : <BsFillPlayFill className="music-icon"/>;  
  const audio = useRef(new Audio(music));
  audio.current.loop = true;

  
  useEffect(()=>{
    if(value%2 === 0){
      audio.current.play();
    } else {
      audio.current.pause();
    }    
  }, [value]);
  
  return (
    <section className="banner" id="home">
      <Container>
        <span className="tagline">WELCOME TO MY PORTFOLIO</span>
      </Container>
      <Container classname="container">
        <Row className="align-items-center">
          <Col cs={12} md={6} xl={6}>
            <img src={headerImg} alt="Header Img" />
          </Col>

          <Col cs={12} md={6} xl={6}>
            <h1>{`It's-a-me, BRIX!`} </h1>
            <p>
            Welcome to my online portfolio, a neatly organized showcase of my projects. Here, you&apos;ll also find details about the technologies I specialize in. If you&apos;re interested in my skills, please don&apos;t hesitate to reach out via email! 
            </p>
            <button onClick={()=>setValue(value+1)}>
              {buttonText} 
            </button>            
          </Col>
        </Row>
      </Container>
    </section>
  );
};
