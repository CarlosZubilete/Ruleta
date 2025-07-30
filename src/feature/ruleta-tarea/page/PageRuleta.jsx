import { Container } from 'reactstrap';
import RuletaTareas from '../components/RuletaTarea';

function PageRuleta() {
  return (
    <Container className="mt-5">
      <h2 className="text-center">Ruleta de tareas</h2>
      <RuletaTareas />
    </Container>
  );
}

export default PageRuleta;