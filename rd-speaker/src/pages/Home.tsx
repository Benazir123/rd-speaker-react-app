import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import NavbarExample from "../components/Navbar"

const Home = () => {

    // const navigate = useNavigate();
    // function handleLogOut() {
    //     sessionStorage.setItem("userToken", '');
    //     sessionStorage.clear();
    //     navigate("/")
    //   }
      return(
        <>
        {/* <Navbar bg="light" variant="dark">
          <Container>
            <Navbar.Brand href="#home" style={{color: "black"}}>RADIUS DIRECT</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home" style={{color: "black"}}>Home</Nav.Link>
              <Nav.Link href="#home" style={{color: "black"}}>Engagements</Nav.Link>
              <Nav.Link href="#home" style={{color: "black"}}>My Profile</Nav.Link>
              <Nav.Link href="#home" style={{color: "black"}}>Content</Nav.Link>
              <Nav.Link href="#home" style={{color: "black"}}>Training</Nav.Link>
              <Nav.Link href="#home" style={{color: "black"}}>More</Nav.Link>
                <FontAwesomeIcon style={{marginTop: "13px", display:'flex'}} icon={faPowerOff} />
                <Nav.Link href="#home" style={{color: "black"}} className="me-2">Logout</Nav.Link>
            </Nav>
          </Container>
        </Navbar> */}
        <NavbarExample />
        <div>
            <h1>Welcome to react speaker app</h1>
        </div>
      </>
      );
}

export default Home;