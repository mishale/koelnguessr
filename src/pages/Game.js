import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import GameBox from '../components/GameBox';
import { useGame } from '../contexts/GameContext';



function Game() {

  const [showGame, setShowGame] = useState(false);
  const {currentPoints, setCurrentPoints} = useGame();

  const handleGameStart = () => {
    setShowGame(true);
    setCurrentPoints(0);
    
  }

  return (

      <Card className='cardbox game'>
        {!showGame ?
        (<Card.Body>
          <Button className='button' onClick={handleGameStart}>Spiel starten</Button> 
        </Card.Body>) :
        (<GameBox></GameBox>) }
        
        </Card>
  )
}

export default Game;
