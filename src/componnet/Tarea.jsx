


export default function Tarea({props}){
  
  const { tarea, id} = props;


  return(<>
    <p>Tarea: {id}</p>
    <p>{tarea}</p>
  </>
  )
}


