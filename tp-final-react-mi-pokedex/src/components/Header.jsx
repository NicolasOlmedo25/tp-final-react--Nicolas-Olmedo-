import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function Header() {
  return (
    // Usamos el componente Navbar de Bootstrap
    <Navbar bg="danger" variant="dark" expand="lg" className="mb-4">
      <Container>
        {/* Aquí podemos poner un título o logo que lleve al Home */}
        <Navbar.Brand as={Link} to="/">
          Pokédex React
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Usamos el componente Nav.Link de Bootstrap con 'as={Link}' */}
            {/* 'as={Link}' le dice a Nav.Link que actúe como nuestro Link de React Router */}
            
            <Nav.Link as={Link} to="/">
              🏠 Home
            </Nav.Link>
            
            <Nav.Link as={Link} to="/listado">
              📜 Listado
            </Nav.Link>
            
            <Nav.Link as={Link} to="/pokemon/25">
              🔎 Detalle (Ej.)
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}