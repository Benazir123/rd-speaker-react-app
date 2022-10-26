import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    function handleLogOut() {
        sessionStorage.setItem("userToken", '');
        sessionStorage.clear();
        navigate("/")
      }
      return(
        <>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Speaker App</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Button className="me-2" variant="success" onClick={handleLogOut}>Logout</Button>
            </Nav>
          </Container>
        </Navbar>
        <div>
            <h1>Welcome to react speaker app</h1>
        </div>
      </>
      );
}

export default Home;