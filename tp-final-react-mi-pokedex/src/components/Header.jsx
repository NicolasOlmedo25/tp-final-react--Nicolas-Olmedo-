import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function Header() {
  return (
    <Navbar bg="danger" variant="dark" expand="lg" className=""> 
      <Container>
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="nicodex-logo"
        >
          PokeDex LITE
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        {/* Usamos ms-auto en lugar de me-auto para empujar el Nav hacia la derecha */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> 
            <Nav.Link as={Link} to="/">
              🏠 Home
            </Nav.Link>
            
            <Nav.Link as={Link} to="/listado">
              📜 Listado de Pokemons
            </Nav.Link>
            
            <Nav.Link as={Link} to="/pokemon/25">
              🔎 Detalles de Pokemons
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}