import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

// Header component with navigation and search functionality
function Header({ searchTerm, setSearchTerm, setCurrentPage }) {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Navbar.Brand href="#home">Shopping Cart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#products" onClick={() => setCurrentPage("products")}>Products</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
          <Form inline className="ml-auto">
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outline-info">Search</Button>
          </Form>
          <Nav.Link href="#cart" onClick={() => setCurrentPage("cart")}>
            <FaShoppingCart size={24} color="white" />
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
      <div className="bg-primary text-white text-center py-2 mb-4">
        <h2>Welcome to Our Shopping Cart</h2>
      </div>
    </>
  );
}

export default Header;
