import { FaPlus, FaTrash, FaChevronRight, FaSpinner ,FaReact, FaJs, FaDatabase, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiVite } from 'react-icons/si';
import { useEffect, useRef, useState } from 'react';
import '../styles/Home.css'
import { Link } from 'react-router';

function Home() {

  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
     <div className='home'>
     {/* Hero */}
      <section className="home__hero">
        <h1 className="home__title">¡Haz tu día más divertido con RuletaApp!</h1>
        <p className="home__subtitle">
          Crea tu lista de tareas o retos, guárdala en tu navegador,
          y deja que la ruleta decida por ti.
        </p>
        <Link to={'/ruleta'}>
          <button className="home__cta">
            <FaChevronRight className="home__cta-icon" /> 
            Comenzar ahora
          </button>
        </Link>
      </section>

      {/* Features */}
      <section id="features" className="home__features">
        <div className="home__feature">
          <FaPlus className="home__feature-icon" />
          <h3 className="home__feature-title">Agrega y elimina</h3>
          <p className="home__feature-desc">
            Hasta 12 ítems. Añade o quita cuando quieras. 
          </p>
        </div>
        <div className="home__feature">
          <FaSpinner  className="home__feature-icon" />
          <h3 className="home__feature-title">Gira la ruleta</h3>
          <p className="home__feature-desc">
            Obten un numero aleatoro y que la fuerza te acompañe
          </p>
        </div>
        <div className="home__feature">
          <FaTrash className="home__feature-icon" />
          <h3 className="home__feature-title">Gestión en tu navegador</h3>
          <p className="home__feature-desc">
            Guardamos todo en Local Storage. (*No guardar datos sensibles*)
          </p>
        </div>
      </section>
  
    {/* HOME-INFO */}
    <section
      ref={aboutRef}
      className={`home__info ${isVisible ? 'home__info--visible' : ''}`}
    >
      <div className="home__about">
        <h2 className="home__subtitle">¿Qué es RuletaApp?</h2>
        <p className="home__about-text">
          Es una herramienta interactiva en donde puedes:
        </p>
        <ul className="home__about-list">
          <li>📋 Crear y gestionar hasta 12 ítems (tareas, retos, decisiones).</li>
          <li>🔄 Girar una ruleta animada que elige aleatoriamente uno de ellos.</li>
          <li>💾 Guardar todo en LocalStorage (no guardar datos sensibles).</li>
          <li>➕➖ Añadir o eliminar ítems en cualquier momento.</li>
          <li>🔧 Tecnologías aplicadas: </li>
        </ul>
        <div className="home__tech-icons">
            <FaHtml5 title="HTML5" />
            <FaCss3Alt title="CSS3" />
            <FaJs title="JavaScript" />
            <FaReact title="React" />
            <FaDatabase title="LocalStorage" />
        </div>
        <a
          href="https://github.com/CarlosZubilete/Ruleta/tree/main"
          target="_blank"
          rel="noopener noreferrer"
          className="home__cta--outline"
        >
          Más info
        </a>
      </div>
    </section>
  </div>
);
}

export default Home;




