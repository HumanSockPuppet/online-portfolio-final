import React, { useState } from "react";
import music from '../assets/music.mp3';
import { Container, Row, Col } from "react-bootstrap";
import { yoshi } from '../assets/img'
import { useEffect, useRef } from "react";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";

export const Banner = () => { 
  const [playBoolean, setPlayBoolean] = useState(false);
  const playButton = playBoolean ? <BsFillPauseFill className="music-icon"/> : <BsFillPlayFill className="music-icon"/>;  
  const audio = useRef(new Audio(music));
  audio.current.loop = true;

  
  useEffect(()=>{
    if(playBoolean){
      audio.current.play();
    } else {
      audio.current.pause();
    }    
  }, [playBoolean]);
  
  return (
    <section className="banner" id="home">
      <Container>
        <span className="tagline">WELCOME TO MY PORTFOLIO</span>
      </Container>
      <Container classname="container">
        <Row className="align-items-center">
          <Col cs={12} md={6} xl={6}>
            <img src={yoshi} alt="Header Img" />
          </Col>

          <Col cs={12} md={6} xl={6}>
            <h1>It&apos;s-a-me, BRIX! </h1>
            <p>
            Welcome to my online portfolio, a neatly organized showcase of my projects. Here, you&apos;ll also find details about the technologies I specialize in. If you&apos;re interested in my skills, please don&apos;t hesitate to reach out via email! 
            </p>
            <button onClick={()=>setPlayBoolean(!playBoolean)}>
              {playButton} 
            </button>            
          </Col>
        </Row>
      </Container>
    </section>
  );
};
