import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function PetNavbar() {
  return (
    <Container className='petnavbar'>
      <Navbar expand="lg" bg='primary' data-base-theme="light" fixed="top" >
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default PetNavbar;