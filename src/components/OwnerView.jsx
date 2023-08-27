
import Card from 'react-bootstrap/Card';
import { useLocation } from 'react-router-dom';
export default function Owner() {
    const location = useLocation();
    const pet = location.state;
    
    return (
    <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pet.ownerurl} />
            <Card.Body>
                <Card.Title>{pet.owner}</Card.Title>
                <Card.Text>
                    Phone: {pet.telephone}
                </Card.Text>
            </Card.Body>
            </Card>
    </div>)
}