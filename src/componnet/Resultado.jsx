

export default function Resultado({list , id}){

   const selecciondo = list.find((tarea) => tarea.id === id)

   if(!selecciondo) return <p>Selecioado: nada</p>
  // ... 
  return( <>
      <p> Seleccionado: {
          selecciondo.name
        }</p>
    </>
  )
}