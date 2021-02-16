import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import {Router, Link} from '@reach/router';

import Main from './views/Main';
import Device from './views/Device';
import $ from 'jquery';
function App() {
  return (
    <div className="App">
      <div className="navBar">
        <Navbar>
          <div className="navContent">
            <Navbar.Brand href="/" id="brand">
              Nathan Roe
            </Navbar.Brand>
          </div>
        </Navbar>
      </div>
      <Router>
      {
        $(window).width() < 1218 || $(window).height() < 536 ? 
          <Device path= '/'/>
        :
          < Main path= '/'/>
      }
        
        
      </Router>
      
    </div>
  );
}

export default App;
