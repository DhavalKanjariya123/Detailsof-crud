import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";



function Navbarlayout() {
    return (
        <>
            <Navbar fluid="true" expand="lg" >
                <Container>
                    <Navbar.Brand>Dhaval</Navbar.Brand>
                    <Navbar.Toggle></Navbar.Toggle>
                    <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <Nav.Link><Link to="/" >Home</Link></Nav.Link>
                        <Nav.Link><Link to="/about" >About</Link></Nav.Link>
                        <NavDropdown title="Services" >
                            <NavDropdown.Item>Training</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item>Web Development</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link><Link to="/contact-us" >Contact Us</Link></Nav.Link>
                        <Nav.Link><Link to="/cart" >Cart</Link></Nav.Link>
                        <Nav.Link><Link to="/login" >Login</Link></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet/>
        </>
    )
}

export default Navbarlayout;