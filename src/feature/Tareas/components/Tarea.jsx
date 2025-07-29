import '../styles/Tarea.css'
// import { useState } from 'react';
import { useTareaContext } from '../context/useTareaContext';
import { Card, CardBody, CardTitle, Button, Input } from "reactstrap";

function Tarea({ tarea }) {

  const { deleteTarea } = useTareaContext();


  const handleDelete = () => {
    // console.log(tarea._id)
    deleteTarea(tarea._id);
  };

  return (
    <Card className={`shadow-sm tarea`}>
      <CardBody className="d-flex justify-content-between align-items-center">
        <CardTitle tag="p" className="fw-bold text-primary mb-0">
          <strong>{tarea.name}</strong>
        </CardTitle>
        <div className="botones">
          <Button type='submit' color="danger" onClick={handleDelete}>Delete</Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default Tarea;

/* 
const [editando, setEditando] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState(tarea.name);
-- 
  const handleEdit = () => {
    if (editando) {
      // Confirmar edición
      editTarea(tarea._id, { name: nuevoNombre });
    }
    setEditando(!editando); // Alternar entre modo edición y vista normal
  };
-- 

<Card className="shadow-sm tarea mb-3 tarea">
  <CardBody className="d-flex justify-content-between align-items-center">
    {
      editando ? (
        <Input
          type="text"
          value={nuevoNombre}
          onChange={(e) => setNuevoNombre(e.target.value)}
          className="me-3"
        />
      ) : (
        <CardTitle tag="p" className="fw-bold text-primary mb-0 me-3">
          <strong>{tarea.name}</strong>
        </CardTitle>
      )
    }
    <div className="botones">
      <Button color={editando ? "success" : "info"} className='me-2' onClick={handleEdit}>
        {editando ? "Guardar" : "Editar"}
      </Button>
      <Button color="danger" onClick={handleDelete}>Eliminar</Button>
    </div>
  </CardBody>
</Card>
*/