import React from "react";
import { Container} from "react-bootstrap";
import pythonlogo from "../assets/img/python-logo.png"
import reactlogo from "../assets/img/react-logo.png"
import csslogo from "../assets/img/css-logo.png"
import htmllogo from "../assets/img/html-logo.png"
import clogo from "../assets/img/c++-logo.png"
import javascriptlogo from "../assets/img/javascript-logo.png"
import awslogo from "../assets/img/aws-logo.png"
import nodejslogo from "../assets/img/nodejs-logo.png"
import expressjslogo from "../assets/img/express-logo.png"
import mongodblogo from "../assets/img/mongodb-logo.png"

export const Skills = () => {

    return (
        <section className="skills">
            <Container className="container-1">
                <h1>TECH STACK</h1>
            </Container>
            <Container className="skills-container">
                <div>
                    <img src={awslogo}></img>
                    <h2>AWS</h2>
                </div>
                <div>
                    <img src={pythonlogo}></img>
                    <h2>Python</h2>
                </div>
                <div>
                    <img src={clogo}></img>
                    <h2>C++</h2>
                </div>
                <div>
                    <img src={javascriptlogo}></img>
                    <h2>JavaScript</h2>
                </div>                
                <div>
                    <img src={csslogo}></img>
                    <h2>CSS</h2>
                </div>
                <div>
                    <img src={htmllogo}></img>
                    <h2>HTML</h2>
                </div>
                <div>
                    <img src={mongodblogo}></img>
                    <h2>Mongo DB</h2>
                </div>   
                <div>
                    <img src={expressjslogo}></img>
                    <h2>Express JS</h2>
                </div> 
                <div>
                    <img src={reactlogo}></img>
                    <h2>React JS</h2>
                </div> 
                <div>
                    <img src={nodejslogo}></img>
                    <h2>Node JS</h2>
                </div>   
            </Container>


        </section>        
    )

}