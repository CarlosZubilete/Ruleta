import { Container, Row, Col, Button } from "reactstrap";
import AddTarea from "../components/AddTarea";
import ListaTarea from "../components/ListTarea";
// import useNewTarea from "../hooks/useAddTarea";
import { useTareaContext } from '../context/useTareaContext';

function PageTarea(){

  // const {lista,handleFormik} = useNewTarea();

  const {addTarea} = useTareaContext();

  return (
    <Container className="mt-5">
      <AddTarea handleFormik={addTarea}/>
      <hr />
      <ListaTarea />
    </Container>
  )
}

export default PageTarea;