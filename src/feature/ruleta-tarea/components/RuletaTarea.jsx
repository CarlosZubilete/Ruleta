import { useRef, useState } from 'react';
import { useTareaContext } from '../../Tareas/context/useTareaContext'
import '../styles/RuletaTarea.css'

function RuletaTareas() {
  const { lista } = useTareaContext();
  const ruletaRef = useRef(null);
  const [seleccionada, setSeleccionada] = useState(null);
  const [girando, setGirando] = useState(false);

  const girarRuleta = () => {
    if (girando || lista.length === 0) return;

    const seleccion = Math.floor(Math.random() * lista.length);
    setSeleccionada(seleccion);
    setGirando(true);

    // Cada segmento ocupa cierto ángulo (por ejemplo, si hay 6 tareas → 60° cada una)
    const gradosPorSegmento = 360 / lista.length;
    const gradosDestino = 3600 + (360 - (seleccion * gradosPorSegmento)) - gradosPorSegmento / 2;

    // Reiniciar animación
    ruletaRef.current.style.transition = 'none';
    ruletaRef.current.style.transform = 'rotate(0deg)';

    // Forzar reflow para que el navegador aplique el cambio
    void ruletaRef.current.offsetWidth;

    // Aplicar rotación con CSS
    // // ruletaRef.current.style.transform = `rotate(${gradosDestino}deg)`;

    // Aplicar nueva rotación con transición
    ruletaRef.current.style.transition = 'transform 6s cubic-bezier(0.33, 1, 0.68, 1)';
    ruletaRef.current.style.transform = `rotate(${gradosDestino}deg)`;

    // Cuando termina la transición, permitimos otro giro
    setTimeout(() => {
      setGirando(false);
    }, 6000); // debe coincidir con la duración del CSS
  };

  return (
    <div className="ruleta-container">
      <div className="ruleta" ref={ruletaRef}>
        {lista.map((tarea, i) => {
          const rot = (360 / lista.length) * i;
          return (
            <div
              key={i}
              className="segmento"
              style={{ transform: `rotate(${rot}deg) skewY(-60deg)` }}
            >
              <span style={{ transform: `skewY(60deg) rotate(${(360 / lista.length) / 2}deg)` }}>
                {tarea.name || tarea}
              </span>
            </div>
          );
        })}
      </div>

      <button className="btn-girar" onClick={girarRuleta} disabled={girando}>
        {girando ? 'Girando...' : 'Girar'}
      </button>

      {seleccionada !== null && !girando && (
        <p className="tarea-seleccionada">Tarea seleccionada: {lista[seleccionada].name || lista[seleccionada]}</p>
      )}
    </div>
  );
}

export default RuletaTareas;
