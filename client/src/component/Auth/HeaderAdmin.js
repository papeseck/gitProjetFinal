import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";

function HeaderAdmin() {
    return (

        <>
            <header>
                <Navbar bg="primary" expand="lg" variant="dark" collapseOnSelect>
                    <Container>
                        <Navbar.Brand href="#home"> <i className="fa-solid fa-user"></i>Espace Admin</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav style={{ marginLeft: "auto" }} >
                            <Nav.Link href="/"><i className="fa-solid fa-shop"></i> Shop</Nav.Link> 
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                
            </header>
        </>
    );

}

export default HeaderAdmin