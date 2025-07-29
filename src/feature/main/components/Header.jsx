import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";
import { Link } from 'react-router-dom';  
import { useState } from "react";
import '../styles/Header.css'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container header">
      <Navbar color="dark" dark expand="sm" fixed="top" className="px-5 shadow-sm w-100">
        <NavbarBrand href="/" className="fw-bold text-light">
          🎯 Ruleta de Tareas
        </NavbarBrand>

        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/" className="text-light me-3">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/ruleta" className="text-light me-3">
                Ruleta
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/lista" className="text-light">
                Tareas
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
}

export default Header;