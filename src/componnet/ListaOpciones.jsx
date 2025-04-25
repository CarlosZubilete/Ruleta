import Tarea from "./Tarea";
// import useAgregarTarea from "./useAgregarTarea";

function ListaObjetos({list}){
  return(<>
    <ul>{
      list.map((element,i) => 
        <li key={i}>
          <Tarea  tarea={{id: element.id, name: element.name }} />  
        </li>)}
    </ul>

    <button>Girar la ruleta</button>
  </>)
}

export default ListaObjetos;