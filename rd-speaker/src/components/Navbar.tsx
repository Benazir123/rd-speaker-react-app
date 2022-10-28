import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';


function NavbarExample() {

  const navigate = useNavigate();
  function handleLogOut() {
      sessionStorage.setItem("userToken", '');
      sessionStorage.clear();
      navigate("/")
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Radius Direct</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><FontAwesomeIcon icon={faHouseChimney}/>Home</Nav.Link>
            <Nav.Link href="#engagements"><FontAwesomeIcon icon={faCalendar}/>Engagements</Nav.Link>
            <Nav.Link href="#profile"><FontAwesomeIcon icon={faUser}/>My Profile</Nav.Link>
            <Nav.Link href="#content"><FontAwesomeIcon icon={faFile}/>Content</Nav.Link>
            <Nav.Link href="#training"><FontAwesomeIcon icon={faGraduationCap}/>Training</Nav.Link>
            <NavDropdown title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Change Password</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Help / Support</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Legal / Privacy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">News</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Audio</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Video</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
           <Button style={{display:"flex"}} variant="secondary" onClick={handleLogOut}><FontAwesomeIcon style={{marginTop: "5px"}} icon={faPowerOff}/>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarExample;