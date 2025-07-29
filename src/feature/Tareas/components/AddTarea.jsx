import { Formik, Form, Field ,ErrorMessage} from "formik";
import { Container, Row, Col, Button, FormGroup, Input,  } from 'reactstrap';
import '../styles/AddTarea.css'
import TareaSchema from '../schemas/SchemaTarea';
import MessageError from "./MessageError";

function AddTarea({handleFormik}){

  return (
    <Container className="mt-4">
      <Formik
        onSubmit={handleFormik}
        initialValues={{ tarea: '' }}
        validationSchema={TareaSchema}
      >
      {() => (
        <Form>
          <Row className="align-items-start justify-content-center g-2">
            <Col xs="12" sm="8" md="7" lg="6" >
              <FormGroup className="mb-0">
                <Field
                  name="tarea"
                  as={Input}
                  type="text"
                  id="tarea"
                  placeholder="Agrega una tarea"
                />
                <ErrorMessage name="tarea" component={MessageError} />
              </FormGroup>
            </Col>
            <Col xs="12" sm="4" md="3" lg="2">
              <Button type="submit" color="primary" className="w-100 mt-sm-0 mt-2">
                Agregar
              </Button>
            </Col>
          </Row>
        </Form>
      )}
      </Formik>
    </Container>
  );
};


export default AddTarea;

//    <Label for="tarea">Tarea:</Label>

