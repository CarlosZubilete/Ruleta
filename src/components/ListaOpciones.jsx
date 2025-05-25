import Tarea from "./Tarea";

function ListaObjetos({list}){

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

export default ListaObjetos;