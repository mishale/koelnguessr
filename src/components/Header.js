import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container} from 'react-bootstrap';
import { useUser } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';


const Header = () => {

  const { playerName } = useUser();
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('./');
  }

  return (
    <Navbar className='header' variant="dark" expand="lg" onClick={navigateToHome}>
      <Container>
        <Navbar.Brand href="#home">KoelnGuessr</Navbar.Brand>
        <div className='headerName'>{playerName && `Hallo, ${playerName}!`}</div>
      </Container>
    </Navbar>
  );
}

export default Header;
