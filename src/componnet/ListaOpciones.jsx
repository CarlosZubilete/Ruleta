import Tarea from "./Tarea";
import useAgregarTarea from "./useAgregarTarea";

function ListaObjetos(){

  const {nuevaLista} = useAgregarTarea()

  return(<>
    <h2>Lista de opciones</h2>

    <ul>{
      nuevaLista.map((element,i) => 
        <li key={i}>
          <Tarea  tarea={{id: element.id, name: element.name }} />  
        </li>)
      }
    </ul>
  </>)
}

export default ListaObjetos;