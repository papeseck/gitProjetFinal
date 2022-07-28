import React from "react";
import { useSelector } from "react-redux";
import "./styles/cart.css"
import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
  const { quantity } = useSelector((state) => state.cart);
  return (
    <>
      <header>
        <Navbar bg="primary" expand="lg" variant="dark"  collapseOnSelect className="nav " >
          <Container >
            <Navbar.Brand href="#home">AVIC.. SHOP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav style={{ marginLeft: "auto" }}>
                <Nav.Link href="/">
                  <i className="fa-solid fa-cart-plus"></i> PRODUITS
                </Nav.Link>
                <Nav.Link href="/cart" className="cart">
                <i className="fa-solid fa-cart-arrow-down"></i>
                  {quantity !== 0 && <span style={{color:"red"}}>{quantity}</span>}
                </Nav.Link>
                <Nav.Link href="/Connexion">
                  {" "}
                  <i className="fa-solid fa-user"></i>ADMIN
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
