import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Email from '../images/gmailIcon.png';
import Phone from '../images/phoneIcon.jpg';
import Github from '../images/githubIcon.png';
import LinkedIn from '../images/linkedInIcon.png';

const Contact = () => {
    return (
        <div className="container">
            <div className="cards">
                <CardGroup>
                    <Card className="card" style={{marginTop: "10vh"}}>
                        <Card.Body style={{textAlign: "center"}}>
                        <Card.Title style={{lineHeight: "8vh", fontSize: "28px", fontWeight: "bold"}}>
                            Contact
                            </Card.Title>
                            <Card.Title style={{lineHeight: "6vh", marginTop: "6vh"}}>
                            Thanks for viewing my website! Feel free to leave a message for me here, or contact me through one of the links below. If you have a question or just want to reach out, I'd love to get in touch.
                            </Card.Title>
                            <div style={{display: 'flex', justifyContent: "space-evenly", marginTop: "30vh"}}>
                                <div class='iconBack' style={{ height: "10.5vh", width: "5vw", borderRadius: "50%"}} onClick={e => window.location.href = 'https://mail.google.com/mail/u/1/#inbox?compose=GFrJzjnGHFLZrVzPmrHckcctzDJHKNpqfsrtDQZRmGjSZtSDLxKfNnRqCSRCkvbSQgSJ'}>
                                    <img src={Email} alt="#" style={{height: "100%", width: "100%"}}/>
                                </div>
                                <div class='iconBack' style={{ height: "10.5vh", width: "5vw", borderRadius: "50%"}}>
                                    <img src={Phone} alt="#" style={{height: "100%", width: "100%"}}/>
                                </div>
                                <div class='iconBack' style={{ height: "10.5vh", width: "5vw", borderRadius: "50%"}} onClick={e => window.location.href = 'https://github.com/nathan-roe'}>
                                    <img src={Github} alt="#" style={{height: "100%", width: "100%"}}/>
                                </div>
                                <div class='iconBack' style={{ height: "10.5vh", width: "5vw", borderRadius: "50%"}} onClick={e => window.location.href = 'https://www.linkedin.com/in/nathan-zachary-roe'}>
                                    <img src={LinkedIn} alt="#" style={{height: "100%", width: "100%"}}/>
                                </div>
                            </div>
                        </Card.Body>
                        
                    </Card> 
                    <Card className="card" style={{marginTop: "10vh"}}>
                        <Card.Body>
                        <Form style={{marginTop: "10vh"}}>
                        <Form.Group>
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="ex. Nathan Roe" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Leave a message" />
                            </Form.Group>
            
                            <Button variant="primary" type="submit" style={{marginRight: "35vw"}}>
                                Contact
                            </Button>
                        </Form>
                        </Card.Body>
                    </Card> 
                </CardGroup>
            </div>
        </div>
    );
}
export default Contact;