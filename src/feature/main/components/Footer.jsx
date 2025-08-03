import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        
        <div className="footer__section footer__about">
          <h2 className="footer__title">About Me</h2>
          <p className="footer__description">
            En CZ Dev nos especializamos en crear soluciones que se adaptan a tu modelo de negocio y forma de trabajo.  
            <br /><br />
            Si buscas un desarrollador comprometido para impulsar tu proyecto, ¡conectemos!
          </p>
        </div>

        <div className="footer__section footer__links">
          <h2 className="footer__title">Quick Links</h2>
          <ul className="footer__list">
            <li><Link to="/" className="footer__link">Home</Link></li>
            <li><Link to="/ruleta" className="footer__link">Ruleta</Link></li>
            <li><Link to="/lista" className="footer__link">Tareas</Link></li>
            <li><a href="mailto:carloszubiletesanchez@gmail.com" className="footer__link">Contacto</a></li>
          </ul>
        </div>

        <div className="footer__section footer__social">
          <h2 className="footer__title">Follow Me</h2>
          <ul className="footer__social-list">
            <li>
              <a href="https://github.com/carloszubilete" target="_blank" rel="noreferrer" className="footer__social-link">
                <FaGithub className="footer__icon" /> GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/carlos-zubilete-sanchez/" target="_blank" rel="noreferrer" className="footer__social-link">
                <FaLinkedin className="footer__icon" /> LinkedIn
              </a>
            </li>
              <li>
              <a href="https://linkedin.com/in/https://www.instagram.com/_zubiletecarlos/?next=%2F" target="_blank" rel="noreferrer" className="footer__social-link">
                <FaInstagram className="footer__icon" /> Instagram
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          © 2025 All rights reserved — Carlos Zubilete
        </p>
      </div>
    </footer>
  );
}

export default Footer;
