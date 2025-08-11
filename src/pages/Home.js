import React from 'react';
import HomeForm from '../components/HomeForm';
import Highscores from '../components/Highscores';
import { useNavigate } from 'react-router-dom';
//import '../styles/Home.css';
import { Card , Button} from 'react-bootstrap';

function Home() {

  const navigate = useNavigate();
  const navigatoToQuiz = () => {
    navigate('./Info');
    
  };
  return (
    <Card className='cardbox home'>
      <Card.Title>Willkommen bei KoelnGuessr</Card.Title>
      <Card.Body>
        <HomeForm></HomeForm>
        <Highscores></Highscores>
      </Card.Body>
      <Card.Footer>
        <p>Oder besuche hier unser</p> 
        <Button className='button' onClick={navigatoToQuiz}>Geographiequiz!</Button>
      </Card.Footer>
    </Card>
  );
}

export default Home;