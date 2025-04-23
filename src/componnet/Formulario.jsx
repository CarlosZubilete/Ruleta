import { useState } from "react";

/* 
  !Todo : cuando agregamos una lista de tarea, le mandmoasl informacion a la lista de tareas para lo muestre.
*/
function Formulario(){

  const [homework,setHomework] = useState('tarea');

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log(homework);

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