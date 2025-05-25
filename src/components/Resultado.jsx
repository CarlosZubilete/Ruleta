

export default function Resultado({list , id}){

   const selecciondo = list.find((tarea) => tarea.id === id)

   if(!selecciondo) return <p className='resultado-texto'>Selecioado: nada</p>
  // ... 
  return( 
      <p className='resultado-texto'> Seleccionado: 
        {selecciondo.name}
      </p>
  )
}