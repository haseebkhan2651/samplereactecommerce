import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../../static/css/Header.css";


//Color has to be changed later

const Header = (props) => {
    return (
        <Navbar id="Navbar" className="navbar_main_container" bg="dark" expand="lg">
            <Navbar.Brand className="navLinks" href="/"> Hassons </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className="navLinks" href="/"> Home </Nav.Link>
                    <Nav.Link className="navLinks" href="#"> Coats </Nav.Link>
                    <Nav.Link className="navLinks" href="#"> T-Shirts </Nav.Link>
                    <Nav.Link className="navLinks" href="#"> Shoes </Nav.Link>
                    <Nav.Link className="navLinks" href="#"> Watches </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;