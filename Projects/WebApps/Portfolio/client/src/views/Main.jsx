import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../styles/main.css';
import Profile from '../images/profile.jpg';
import Particles from 'react-particles-js';
import "pathseg";
import world from '../images/world.svg';
import { useSpring, animated } from "react-spring";
import Email from '../images/gmailIcon.png';
import Phone from '../images/phoneIcon.jpg';
import Github from '../images/githubIcon.png';
import LinkedIn from '../images/linkedInIcon.png';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Main = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, [])
    let languages = `<C#/.NET · MERN · Python>`;
    
    return (
        <div className="container" >
            <div className="main" style={{width: "100%", height: "fit-content", padding: "0", margin: "0"}}>
            <Particles style={{width: "100%", height: "100vh", position: "absolute", transform: "scaleY(-1)", marginTop: "0vh", left: "0", top: "0"}}
            params={{
                "fps_limit": 28,
                "particles": {
                    "collisions": {
                        "enable": false
                    },
                    "number": {
                        "value": 700,
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
            <Particles style={{width: "100%", height: "100vh", position: "absolute", transform: "scaleY(-1)", marginTop: "60vh", left: "0"}}
            params={{
                "fps_limit": 28,
                "particles": {
                    "collisions": {
                        "enable": false
                    },
                    "number": {
                        "value": 500,
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
            }}
                />
            </div>
            <div data-aos="fade-up" class="slide-up">
                <h1>Hi, I'm Nathan</h1>
                {languages != undefined ? <h2>{languages}</h2> : ''}
            </div>
            <div className="contentHeader" data-aos="fade-right">
                <h4>About</h4>
            </div>
            <div className="content" data-aos="fade-right">
                <p>I'm a recent graduate from a coding bootcamp with a passion for creating and supporting business critical software. After beginning college early, I found a passion for software development and began teaching myself how to code. Soon after, I decided to join a coding bootcamp where I gained hands-on experience in web development. Combining my love of creativity and analytical thinking, I earned highest honors in C#/.NET and MERN (MongoDB, Express, React, Node).</p>
            </div>
            <div className="contentHeader" data-aos="fade-right">
                <h4>Experience</h4>
            </div>
            <div className="content" data-aos="fade-right">
                <p>I'm a full stack developer with experience in C#/.NET, Python, and MERN (MongoDB, Express, React, Node). Along with designing, implementing and testing my own projects, I've led and worked with other developers in creating fully fleshed out and deployed web applications.</p>
            </div>
            <div className="exp">
                <div className="lang">
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
                <div className="lang">
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
                <div className="lang">
                    <h1>MERN</h1>
                    <br/>
                    <p>JavaScript</p>
                    <p>MySQL</p>
                    <p>HTML5</p>
                    <p>CSS</p>
                    <p>Node.js</p>
                    <p>React</p>
                    <p>Express</p>
                    <p>jQuery/AJAX</p>
                    <p>Mongoose</p>
                    <p>Bootstrap</p>
                    <p>MongoDB</p>
                </div>
            </div>
            <div>
                <p>GitHub, Postman, GitBash, AWS EC2, Scrum, RESTful API</p>
            </div>
            <div className="contentHeader" data-aos="fade-right" data-aos-offset="20">
                <h4>Projects</h4>
            </div>
            <div class="cards">
                <Card className="card" style={{marginTop: "10vh"}}>
                    <Card.Header>LinkedCS</Card.Header>
                    <Card.Body>
                        <iframe src="http://www.mozilla.org" frameborder="0"></iframe>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Single page social networking application borrowing concepts from LinkedIn and Instagram using: C#, Entity Framework Core, ASP.NET Core, MySQL, AJAX, Razor</small>
                    </Card.Footer>
                </Card> 
                <Card className="card">
                    <Card.Header>ChatApp</Card.Header>
                    <Card.Body>
                        <iframe src="http://www.mozilla.org" frameborder="0"></iframe>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">A communication app that allows users to access different rooms and send messages in real time using: Socket.io, MongoDB, Mongoose, Express, JavaScript</small>
                    </Card.Footer>
                </Card>
                <Card className="card">
                    <Card.Header>Face Detection</Card.Header>
                    <Card.Body>
                        <object data="http://18.218.35.132/" width="600" height="400">
                            {/* <embed src="http://18.218.35.132/" width="600" height="400"> </embed>
                            Error: Embedded data could not be displayed.*/}
                        </object> 
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Login authentication through face detection using: Python, Django, OpenCV, AWS</small>
                    </Card.Footer>
                </Card>
            </div>
            <div style={{display: 'flex', justifyContent: "space-evenly", marginTop: "30vh", overflow: "hidden", paddingBottom: "5vh"}}>
                <div class='iconBack' style={{ height: "10.5vh", width: "5vw", borderRadius: "50%"}} onClick={e => window.location.href = 'https://mail.google.com/mail/u/1/#inbox?compose=GFrJzjnGHFLZrVzPmrHckcctzDJHKNpqfsrtDQZRmGjSZtSDLxKfNnRqCSRCkvbSQgSJ'}>
                    <img src={Email} alt="#" style={{height: "100%", width: "100%"}}/>
                </div>
                <div class='iconBack' style={{ height: "10.5vh", width: "5vw", borderRadius: "50%", overflow: "hidden", border: "1px solid grey"}}>
                    <img src={Phone} alt="#" style={{height: "100%", width: "100%"}}/>
                </div>
                <div class='iconBack' style={{ height: "10.5vh", width: "5vw", borderRadius: "50%", overflow: "hidden", border: "1px solid grey"}} onClick={e => window.location.href = 'https://github.com/nathan-roe'}>
                    <img src={Github} alt="#" style={{height: "100%", width: "100%"}}/>
                </div>
                <div class='iconBack' style={{ height: "10.5vh", width: "5vw", borderRadius: "50%", overflow: "hidden", border: "1px solid grey"}} onClick={e => window.location.href = 'https://www.linkedin.com/in/nathan-zachary-roe'}>
                    <img src={LinkedIn} alt="#" style={{height: "100%", width: "100%"}}/>
                </div>
            </div>
            
        </div>
    );
}
export default Main;