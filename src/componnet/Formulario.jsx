import { useState } from "react";

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

function Formulario(){

  const [homework,setHomework] = useState('tarea');
  const [listWork,setListWork] = useState([]);

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
  
  
  return(<>
    <form onSubmit={handleSubmit}>
      <h2>Formulario</h2>
      <label htmlFor='homework'>Tarea:
        <input  type='text' name='homework' onChange={(e) => setHomework(e.target.value)}  value={homework} />
      </label>
      <br />
      <button type='submit'>Agregar</button>
    </form>

  </>
  )
}

export default Formulario;