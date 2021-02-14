import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../styles/projects.css';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
const Projects = () => {
    return (
        <div className="container">
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
                        <iframe src="http://www.mozilla.org" frameborder="0"></iframe>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Login authentication through face detection using: Python, Django, OpenCV, AWS</small>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
}
export default Projects;