import '../styles/Tarea.css'
import { useTareaContext } from '../context/useTareaContext';
import { Card, CardBody, CardTitle, Button } from "reactstrap";

function Tarea({ tarea }) {
  const { deleteTarea } = useTareaContext();
  const handleDelete = () => {

    deleteTarea(tarea._id);
  };

  return (
    <Card className="shadow-sm tarea">
      <CardBody className="tarea__body">
        <CardTitle tag="p" className="tarea__title">
          <strong>{tarea.name}</strong>
        </CardTitle>
        <div className="botones">
          <Button type="submit" color="danger" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default Tarea;
