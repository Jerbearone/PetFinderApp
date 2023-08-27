import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

export default function HomeCard({pet}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pet.peturl} />
      <Card.Body>
        <Card.Title>{pet.name}</Card.Title>
        <Card.Text>
          {pet.breed}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Link to="/pet" state={pet} >Pet info</Link><br></br>
        <Link to="/owner" state={pet}>Owner info</Link>
      </Card.Body>
    </Card>
  );
}