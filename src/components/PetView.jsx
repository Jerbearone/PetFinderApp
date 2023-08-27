import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useLocation } from 'react-router-dom';

function PetAppointments({pet}) {
    return (<div>
        {pet.appointments.map((appointment)=> {
            return <p key={appointment.date}>Date: {appointment.date} time: {appointment.time} reason: {appointment.reason}</p>
        })}
    </div>)
}

export default function PetView() {
    const location = useLocation();
    const pet = location.state;

    return (<div>

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Title>{pet.name}</Card.Title>
                <Card.Text>
                    {pet.breed}
                </Card.Text>
                <Card.Text>
                    Age: {pet.age}
                </Card.Text>

                <Card.Text>
                    Appointments:
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <PetAppointments pet={pet}></PetAppointments>
            </ListGroup>
        </Card>
    </div>)
}