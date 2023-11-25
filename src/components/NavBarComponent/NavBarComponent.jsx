import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

const NavBarComponent = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
     axios.get('https://dummyjson.com/products/categories').then(res => setCategories(res.data)).catch(error => console.log(error));
  }, []);

console.log(categories);

  return (
    <Navbar expand="lg" className="bg-dark" >
      <Container>
        <Navbar.Brand><Link to={"/"}style={{ textDecoration: "none", color: "red" }}>Tienda Electronica</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Contactos">Contactos</Nav.Link>
            <Nav.Link href="#QuienesSomos">Quienes Somos</Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              {
                categories.map((Category, index) => {
                  return(
                    <NavDropdown.Item key={index}><Link to={`/category/${Category}`}style={{ textDecoration: "none", color: "black" }}>{Category}</Link></NavDropdown.Item>
                  )
                })
              }
              
              
              
            </NavDropdown>
          </Nav>
          <CartWidgetComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default NavBarComponent;