import '../styles/Resultado.css'

export default function Resultado({list , id}){

   const selecciondo = list.find((tarea) => tarea.id === id)

   if(!selecciondo) return <p className='resultado-texto'></p>
  // ... 
  return( 
      <p className='resultado-texto'> 
        Seleccionado: {selecciondo.name}
      </p>
  )
}