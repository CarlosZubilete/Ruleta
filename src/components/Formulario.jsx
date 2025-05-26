import { useState } from "react";
import ListaTareas from "./ListaTareas";
import Resultado from "./Resultado";
import '../styles/Formulario.css';
import * as Yup from 'yup';
import { Formik, Form, Field ,ErrorMessage} from "formik";

const ValidateYup = Yup.object({
  tarea: Yup.string()
    .trim()
    .min(3, 'Al menos 3 caracteres')
    .required('Campo Requerido')
})

const MessageError = ({children}) =>{
  return <span className='message-error'>{children}</span>
} 
  
// !Todo : exportar la lista de objetos a un arhivo json , para que sea renderizado por otro componente... 
function Formulario(){

  // const [homework,setHomework] = useState('');
  const [listWork,setListWork] = useState([]);
  const[result,setResult] = useState(null);


  const handleFormik = (values) => {

    console.log(values);


    const nuevoProducto = {
    id: listWork.length + 1,
    name: values.tarea,
    };

    const nuevaLista = [...listWork,nuevoProducto]
    console.log(nuevaLista);
    setListWork(nuevaLista);
    values.tarea = '';
  };

  let max = listWork.length;
  const handleRandomInt = () =>{
    setResult(Math.floor(Math.random() * max))
  } 

  return(
  <div className='fomulario-container'>

    <h2 className='fomulario-container__title'>Ruleta</h2>

    <Formik 
      onSubmit={handleFormik}
      initialValues={{tarea:''}}
      validationSchema={ValidateYup}
      >
      <Form >
        <div className='formulario-form'>
          <label name='tarea' className='formulario-label'>Tarea:</label>
          <Field name='tarea' className='formulario-input'/>
          <button type='submit' className='formulario-button'>Agregar</button>
        </div>
        <ErrorMessage name="tarea" component={MessageError}/>
      </Form>
    </Formik>

    <ListaTareas list= {listWork} />

    <div className='ruleta-container'>
      <button type='submit' className='ruleta-button' onClick={handleRandomInt}>Girar Rueda</button>
      {/* <p className='ruleta-texto'>Resultado: {result}</p> */}
      <Resultado  list={listWork} id={result}/>
    </div>
    
  </div>
  )
}

// TODO : ADD CONTEXTO AND PROVIDER , LOCAL STORE AND CSS RULETA.

export default Formulario;

/**
   /*const handleSubmit = (event) => {
    event.preventDefault()
    //console.log(homework);
    const nuevoProducto = {
      id: listWork.length + 1,
      name: homework,
    };

    const nuevaLista = [...listWork,nuevoProducto]
    console.log(nuevaLista);
    setListWork(nuevaLista);
    
    setHomework('');
  }
//////////////////////////
  <form onSubmit={handleSubmit} className='formulario-form'>
    <label htmlFor='homework' className='formulario-label'>Tarea:
    </label>
    <input  type='text' className='formulario-input' name='homework' onChange={(e) => setHomework(e.target.value)}  value={homework} />
    <button type='submit' className='formulario-button'>Agregar</button>
  </form>
  
//////
  // error en cada renderizado es flase, 
  let firstWork = false; 
  * 
      if(!firstWork) {
        setListWork([{id:1 , name: homework}])
        firstWork = true;
      }

  *
  Corecto :
  const firstWork = useRef(false);

  if (!firstWork.current) {
    // Solo entra la primera vez
    setListWork([{id:1, name: homework}]);
    firstWork.current = true;
  }
    
*/