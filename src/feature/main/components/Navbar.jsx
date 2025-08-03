import { FaBars , FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar(){

  const navRef = useRef();

  const toggleNavbar = () => {
    navRef.current.classList.toggle('navbar__nav--responsive');
  };

  return (
    <header className="navbar">
      <h3 className="navbar__logo">🎯 Ruleta</h3>

      <nav className="navbar__nav" ref={navRef}>
        <Link to="/" className="navbar__link" onClick={toggleNavbar}>Home</Link>
        <Link to="/ruleta" className="navbar__link" onClick={toggleNavbar}>Ruleta</Link>
        <Link to="/lista" className="navbar__link" onClick={toggleNavbar}>Tareas</Link>

        <button className="navbar__btn navbar__btn--close" onClick={toggleNavbar}>
          <FaTimes />
        </button>
      </nav>

      <button className="navbar__btn" onClick={toggleNavbar}>
        <FaBars />
      </button>
    </header>
);
}

export default Navbar