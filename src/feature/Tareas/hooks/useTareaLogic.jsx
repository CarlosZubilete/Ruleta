import { useState , useEffect} from 'react';

const STORAGE_KEY = 'ListaTarea';

const useTareaLogic = () => {

  const [lista, setLista] = useState([]);

  useEffect(() => {
    // I'm gonna find a list call 'miLista'
    const listaGuardada = localStorage.getItem(STORAGE_KEY);
    // if exists
    if (listaGuardada) {
      // get de list from localStore and parseo to Json.
      setLista(JSON.parse(listaGuardada));
    }
  }, []);

  // When the user saves a new value...
  const addTarea = (values,{resetForm}) => {
    const nuevaLista = [...lista, values.tarea];
    setLista(nuevaLista);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nuevaLista));
    resetForm(); // clean the form 
  };
  
  const deleteTarea = (id) => {
    console.log('Lista[id] = ', lista[id]);
    
    // console.log('Lista',lista)
    const nueva = lista.filter(tarea => lista[id] != tarea);

    console.log('---------------------');
    console.log('Lista nueva', nueva);
    
    setLista(nueva);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nueva));
  };


  return { addTarea,deleteTarea, lista}; 
  
};

export default useTareaLogic;

/**
   const editTarea = (id, newValue) => {
    const nueva = lista.map(t =>
      t._id === id ? { ...t, ...newValue } : t
    );
    setLista(nueva);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nueva));
  };
*/