import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import {Router, Link} from '@reach/router';

import Projects from './views/Projects';
import Main from './views/Main';
import Contact from './views/Contact';
import About from './views/About';

function App() {
  return (
    <div className="App">
      <div className="navBar">
        <Navbar>
          <div className="navContent">
            <Navbar.Brand href="/" id="brand">
              Nathan Roe
            </Navbar.Brand>
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link class="nav-link" to="/">Home</Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/about">About</Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/projects">Projects</Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </Navbar>
      </div>
      <Router>
        < Main path= '/'/>
        < Projects path='projects/'/>
        < Contact path='/contact'/>
        < About path='/about'/>
      </Router>
      
    </div>
  );
}

export default App;
