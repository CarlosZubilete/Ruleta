import { useState , useEffect} from 'react';

const useNewTarea = () => {

  const [lista, setLista] = useState([]);

  useEffect(() => {
    // I'm gonna find a list call 'ListaTarea'
    const listaGuardada = localStorage.getItem('ListaTarea');
    // if exists
    if (listaGuardada) {
      // get de list from localStore and parseo to Json.
      setLista(JSON.parse(listaGuardada));
    }
  }, []);

  // When the user saves a new value...
  const handleFormik = (values,{resetForm}) => {

    const nuevaLista = [...lista, values.tarea];
    setLista(nuevaLista);
    localStorage.setItem('ListaTarea', JSON.stringify(nuevaLista));
    resetForm(); // Limpia el formulario

  }
  
  return { handleFormik , lista}; 
};

export default useNewTarea;