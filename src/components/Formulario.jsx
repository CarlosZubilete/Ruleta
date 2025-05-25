import { useState } from "react";
import ListaTareas from "./ListaTareas";
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
    <h2 className='fomulario-container__title'>Ruleta</h2>

      <form onSubmit={handleSubmit} className='formulario-form'>
        <label htmlFor='homework' className='formulario-label'>Tarea:
        </label>
        <input  type='text' className='formulario-input' name='homework' onChange={(e) => setHomework(e.target.value)}  value={homework} />
        <button type='submit' className='formulario-button'>Agregar</button>
      </form>

      <ListaTareas list= {listWork} />

      <div className='ruleta-container'>
        <button type='submit' className='ruleta-button' onClick={handleRandomInt}>Girar Rueda</button>
        {/* <p className='ruleta-texto'>Resultado: {result}</p> */}
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