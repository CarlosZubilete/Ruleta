import Tarea from "./Tarea";

function ListaObjetos({list}){

  //console.log('Largo de la lista: ', list.length);

  return(<>
    <ul>{
      list.map((element,i) => 
        <li key={i}>
          <Tarea  tarea={{id: element.id, name: element.name }} />  
        </li>)}
    </ul>

  </>)
}

export default ListaObjetos;