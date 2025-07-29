
import { Container, Row,Col ,Button} from "reactstrap";
import Tarea from "./Tarea";
import { useTareaContext } from "../context/useTareaContext";

function ListaTarea () {
  const {lista } = useTareaContext();
  
  return(
    <Container className='mt-4'>
      <Row>
      {lista.map((tarea,index) => 
        <Col key={index} sm="12" md="6" lg="4" className="mb-4">
          <Tarea tarea={{
            name: tarea,
            _id: index}}
          />
        </Col>)}
      </Row>
    </Container>)

}

export default ListaTarea;


