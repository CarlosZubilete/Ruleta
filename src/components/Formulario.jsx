import { useState } from "react";
import ListaObjetos from "./ListaOpciones";
import Resultado from "./Resultado";
import '../styles/Formulario.css';

// !Todo : exportar la lista de objetos a un arhivo json , para que sea renderizado por otro componente... 
function Formulario(){

  const [homework,setHomework] = useState('');
  const [listWork,setListWork] = useState([]);
  
  const[result,setResult] = useState(null);


  const handleSubmit = (event) => {
    event.preventDefault()
    //console.log(homework);

    const nuevoProducto = {
      id: listWork.length + 1,
      name: homework,
    };

    const nuevaLista = [...listWork,nuevoProducto]
    console.log(nuevaLista);
    setListWork(nuevaLista);
    setHomework('');

  }
  
  let max = listWork.length;

  const handleRandomInt = () =>{
    // return Math.floor(Math.random() * max);
    setResult(Math.floor(Math.random() * max))
  } 

  
  return(
  <div className='fomulario-container'>
      <form onSubmit={handleSubmit} className='formulario-form'>
        <h2>Formulario</h2>
        <label htmlFor='homework' className='formulario-label'>Tarea:
          <input  type='text' className='formulario-input' name='homework' onChange={(e) => setHomework(e.target.value)}  value={homework} />
        </label>
        <button type='submit' className='formulario-button'>Agregar</button>
      </form>

      <ListaObjetos list= {listWork} />

      <div className='ruleta'>
        <button type='submit' onClick={handleRandomInt}>Girar la rueda</button>
        <p>Resultado: {result}</p>
        <Resultado  list={listWork} id={result}/>
      </div>
  </div>
  )
}

export default Formulario;

/**
  // error en cada renderizado es flase, 
  let firstWork = false; 
  * 
      if(!firstWork) {
        setListWork([{id:1 , name: homework}])
        firstWork = true;
      }

  *
  Corecto :
  const firstWork = useRef(false);

  if (!firstWork.current) {
    // Solo entra la primera vez
    setListWork([{id:1, name: homework}]);
    firstWork.current = true;
  }
    
*/