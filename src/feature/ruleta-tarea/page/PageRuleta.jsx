import { Container } from 'reactstrap';
import RuletaTareas from '../components/RuletaTarea';
import '../styles/PageRuleta.css'

function PageRuleta() {
  return (
    <Container>
      <h2 className="text-center">Ruleta</h2>
      <RuletaTareas />
    </Container>
  );
}

export default PageRuleta;