import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Navbar.css';


function NavMenu() {
  return (
      <Navbar expand="lg" className="bg-body-tertiary navbar-content">
        <Container>
          <Navbar.Brand href="#home"><img src="/logo.png" className='logo-image'/></Navbar.Brand> <h2 className='navbar-title'>The Mithral Tabletop</h2>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link to="/" className="navbar-link m-2">
                Home
              </Link>
            <Link to="/Episodes" className="navbar-link m-2">
            Episodes
              </Link>
              <Link to="/ContactUs" className="navbar-link m-2">
                Contact Us
              </Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavMenu;


//Changes to Navbar were made with the assistance of an instructor (credit to M. Varnell). These changes allow for a dynamic navbar for mobile.