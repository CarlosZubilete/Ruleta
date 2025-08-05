import { Container } from "reactstrap";
import AddTarea from "../components/AddTarea";
import ListaTarea from "../components/ListTarea";
import { useTareaContext } from '../context/useTareaContext';
import '../styles/PageTarea.css'

function PageTarea(){
  const {addTarea} = useTareaContext();

  return (
    <Container>
      <AddTarea handleFormik={addTarea}/>
      <hr />
      <ListaTarea />
    </Container>
  )
}

export default PageTarea;