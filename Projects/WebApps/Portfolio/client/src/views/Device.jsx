import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import '../styles/main.css';
import Particles from 'react-particles-js';
import "pathseg";
import Email from '../images/gmailIcon.png';
import Phone from '../images/phoneIcon.jpg';
import Github from '../images/githubIcon.png';
import LinkedIn from '../images/linkedInIcon.png';
import 'aos/dist/aos.css';
import AOS from 'aos';
import FaceDetection from '../images/faceDetection.jpg';
import LinkedCS from '../images/linkedCS.jpg';
import ChatApp from '../images/chatApp.jpg';
import { Popper } from '@material-ui/core';
import {SectionsContainer, Section} from 'react-fullpage';

const Device = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, [])
    let languages = `<C#/.NET · MERN · Python>`;
    const handlePhone = () => {
        setIsOpen(!isOpen);
    }
    let options = {
        activeClass:          'active', // the class that is appended to the sections links
        anchors:              ["Head", "About", "Experience", "C#", "Python", "MERN", "OtherTools", "LinkedCS", "ChatApp", "FaceDetection", "Contact"], // the anchors for each sections
        navigationTooltips: ['Hi There!', 'About/Experience', "LinkedCS", "ChatApp", "Face Detection", "Contact"],
        navigationPosition: 'right',
        showActiveTooltip: false,
        slidesNavigation: false,
        arrowNavigation:      true, // use arrow keys
        className:            'SectionContainer', // the class name for the section container
        delay:                1000, // the scroll animation speed
        navigation:           true, // use dots navigatio
        scrollBar:            false, // use the browser default scrollbar
        sectionClassName:     'Section', // the section class name
        sectionPaddingTop:    '0', // the section top padding
        sectionPaddingBottom: '0', // the section bottom padding
        verticalAlign:        false, // align the content of each section vertical
        css3: false
    };
    return (
        <div className="container" >
            <SectionsContainer {...options}>
            <Section>
            <div className="main" style={{width: "100%", height: "fit-content", padding: "0", margin: "0", overflow: "hidden"}}>
            <Particles style={{width: "100%", height: "100vh", position: "absolute", transform: "scaleY(-1)", marginTop: "0vh", left: "0", top: "0"}}
            params={{
                "fps_limit": 28,
                "particles": {
                    "collisions": {
                        "enable": false
                    },
                    "number": {
                        "value": 400,
                        "density": {
                            "enable": true,

                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 100,
                        "opacity": 0.01
                    },
                    "move": {
                        "speed": .5
                    },
                    "opacity": {
                        "anim": {
                            "enable": true,
                            "opacity_min": 0.05,
                            "speed": .5,
                            "sync": false
                        },
                        "value": 0.4
                    }
                }
            }}/>
            </div>
            <div class="slide-up" style={{overflowY: "hidden"}}>
                <h1>Hi, I'm Nathan</h1>
                {languages != undefined ? <h2 style={{fontSize: "3vh"}}>{languages}</h2> : ''}
            </div>
            </Section>
            <Section>
            <div className="contentHeader">
                <h4>About</h4>
            </div>
            <div className="content">
                <p style={{fontSize: "2.75vh", marginTop: "5vh"}}>I'm a recent graduate from a coding bootcamp with a passion for creating and supporting business critical software. After beginning college early, I found a passion for software development and began teaching myself how to code. Soon after, I decided to join a coding bootcamp where I gained hands-on experience in web development. Combining my love of creativity and analytical thinking, I earned highest honors in C#/.NET and MERN (MongoDB, Express, React, Node).</p>
            </div>
            </Section>
            <Section>
            <div className="contentHeader">
                <h4>Experience</h4>
            </div>
            <div className="content">
                <p style={{fontSize: "2.75vh", marginTop: "15vh"}}>I'm a full stack developer with experience in C#/.NET, Python, and MERN (MongoDB, Express, React, Node). Along with designing, implementing and testing my own projects, I've led and worked with other developers in creating fully fleshed out and deployed web applications.</p>
            </div>
            </Section>
            <Section>
                <div className="lang" style={{marginTop: "10vh"}}>
                    <h1>C#/.NET</h1>
                    <br/>
                    <p>MySQL</p>
                    <p>HTML5</p>
                    <p>CSS</p>
                    <p>ASP.NET</p>
                    <p>LINQ</p>
                    <p>Entity Framework Core</p>
                    <p>jQuery/AJAX</p>
                    <p>Bootstrap</p>
                </div>
            </Section>
            <Section>
                <div className="lang" style={{marginTop: "10vh"}}>
                    <h1>Python</h1>
                    <br/>
                    <p>MySQL</p>
                    <p>HTML5</p>
                    <p>CSS</p>
                    <p>Django</p>
                    <p>jQuery/AJAX</p>
                    <p>Selenium</p>
                    <p>Bootstrap</p>
                </div>
            </Section>
            <Section>
                <div className="lang" style={{marginTop: "10vh"}}>
                    <h1>MERN</h1>
                    <br/>
                    <p>JavaScript</p>
                    <p>MongoDB</p>
                    <p>HTML5</p>
                    <p>CSS</p>
                    <p>Node.js</p>
                    <p>React</p>
                    <p>Express</p>
                    <p>jQuery/AJAX</p>
                    <p>Mongoose</p>
                    <p>Bootstrap</p>
                </div>
            </Section>
            <Section>
                <div className="lang" style={{marginTop: "10vh"}}>
                    <h1>Other Tools</h1>
                    <br/>
                    <p>Github</p>
                    <p>Postman</p>
                    <p>GitBash</p>
                    <p>AWS EC2</p>
                    <p>Scrum</p>
                    <p>RESTful API</p>
                </div>
            </Section>
            <div class="cards">
            <Section>
                <Card className="card" style={{marginTop: "22vh", maxHeight: "60vh"}}>
                    <Card.Header>
                        LinkedCS
                        <span style={{position: "absolute", top: "2.5vh", right: "1vh", color: "grey", fontSize: "13px"}}>Oct. 2020</span>
                    </Card.Header>
                    <Card.Body style={{width: "100vw", maxHeight: "40vh", padding: "0", display: "flex", alignItems: "center"}}>
                        <img src={LinkedCS} alt="LinkedCS" style={{width: "100%", margin: "0"}}/>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Single page social networking application borrowing concepts from LinkedIn and Instagram using: C#, Entity Framework Core, ASP.NET Core, MySQL, AJAX, Razor</small>
                    </Card.Footer>
                </Card> 
            </Section>
            <Section>
                <Card className="card" style={{marginTop: "22vh", maxHeight: "60vh"}}>
                    <Card.Header>
                        ChatApp
                        <span style={{position: "absolute", top: "2.5vh", right: "1vh", color: "grey", fontSize: "13px"}}>Nov. 2020</span>
                    </Card.Header>
                    <Card.Body style={{width: "100vw", maxHeight: "40vh", padding: "0", display: "flex", alignItems: "center"}}>
                        <img src={ChatApp} alt="ChatApp" style={{width: "100%", margin: "0"}}/>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">A communication app that allows users to access different rooms and send messages in real time using: Socket.io, MongoDB, Mongoose, Express, JavaScript</small>
                    </Card.Footer>
                </Card>
            </Section>
            <Section>
                <Card className="card" style={{marginTop: "22vh", maxHeight: "60vh"}}>
                    <Card.Header>
                        Face Detection
                        <span style={{position: "absolute", top: "2.5vh", right: "1vh", color: "grey", fontSize: "13px"}}>Sep. 2020</span>
                    </Card.Header>
                    <Card.Body style={{width: "100vw", maxHeight: "40vh", padding: "0", display: "flex", alignItems: "center", paddding: "0"}}>
                        <img src={FaceDetection} alt="Face Detection" style={{width: "100%", margin: "0"}}/>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Login authentication through face detection using: Python, Django, OpenCV, AWS</small>
                    </Card.Footer>
                </Card>
            </Section>
            </div>
            <Section>
            <div style={{display: 'flex', flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", marginTop: "25vh", overflow: "hidden", paddingBottom: "40vh", height: "90vh"}}>
                <div class='iconBack' style={{ height: "10.5vh", width: "11.5vw", borderRadius: "50%"}} onClick={e => window.location.href = 'https://mail.google.com/mail/u/1/#inbox?compose=GFrJzjnGHFLZrVzPmrHckcctzDJHKNpqfsrtDQZRmGjSZtSDLxKfNnRqCSRCkvbSQgSJ'}>
                    <img src={Email} alt="#" style={{height: "100%", width: "100%"}}/>
                </div>

                <Popper id="hello" open={isOpen} anchorEl={document.getElementById("phone")}transition>
                    <div style={{backgroundColor: 'black', opacity: "70%", borderRadius: "25px", marginBottom: "2vh", padding: ".25rem", marginTop: "5vh"}}>
                        <h2 style={{color: "white"}}>208-954-3979</h2>
                    </div>
                </Popper>
                <div onClick={handlePhone} class='iconBack' id="phone" style={{ height: "10.5vh", width: "11.5vw", borderRadius: "50%", overflow: "hidden", border: "1px solid grey", marginTop: "5vh"}}>
                    <img src={Phone} alt="#" style={{height: "100%", width: "100%"}}/>
                </div>
                <div class='iconBack' style={{ height: "10.5vh", width: "11.5vw", borderRadius: "50%", overflow: "hidden", border: "1px solid grey", marginTop: "5vh"}} onClick={e => window.location.href = 'https://github.com/nathan-roe'}>
                    <img src={Github} alt="#" style={{height: "100%", width: "100%"}}/>
                </div>
                <div class='iconBack' style={{ height: "10.5vh", width: "11.5vw", borderRadius: "50%", overflow: "hidden", border: "1px solid grey", marginTop: "5vh"}} onClick={e => window.location.href = 'https://www.linkedin.com/in/nathan-zachary-roe'}>
                    <img src={LinkedIn} alt="#" style={{height: "100%", width: "100%"}}/>
                </div>
            </div>
            </Section>
            </SectionsContainer>
        </div>
    );
}
export default Device;