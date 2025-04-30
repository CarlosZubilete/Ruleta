import { useState } from "react";


function useAgregarTarea(newTarea){
  
  const[tarea,SetTarea] = useState([{}]);

  const nuevaTarea = { id: tarea.length , name: newTarea}

  const nuevaLista = SetTarea([...tarea,nuevaTarea])

  return {nuevaLista}
}


export default useAgregarTarea;