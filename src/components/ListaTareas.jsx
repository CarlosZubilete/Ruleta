import Tarea from "./Tarea";
import '../styles/ListaTareas.css';

function ListaTareas({list}){

  return(
    <ul className='lista-tareas'>
      {
        list.map((element,i) => 
          <li key={i}>
            <Tarea  tarea={{id: element.id, name: element.name }} />  
          </li>)
      }
    </ul>
  )
}

export default ListaTareas;