import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';

const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img
              src="./imagen/TM.logo.png"
              width="20%"
              height="20%"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Contactos">Contactos</Nav.Link>
            <Nav.Link href="#QuienesSomos">Quienes Somos</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Sahumerios">Sahumerios</NavDropdown.Item>
              <NavDropdown.Item href="#Cascada">
                Cascadas
              </NavDropdown.Item>
              <NavDropdown.Item href="#Budas">Budas</NavDropdown.Item>
              <NavDropdown.Item href="#Velas">
                Velas
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidgetComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default NavBarComponent;