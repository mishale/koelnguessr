import React, { useEffect, useState } from 'react';
import { useGame } from '../contexts/GameContext';
import useScore from '../useScore';

function Highscores() {

  const {currentPoints} = useGame();
  const [gameScore, updateScore, isLoading] = useScore();
  const [highscores, setHighscores] = useState(new Array(3).fill(0));

  let score = currentPoints;

  useEffect(() => {
    updateScore(score);
  }, []);

  useEffect(() => {
    setHighscores(prevHighscores => {
      const newHighscores = [...prevHighscores];
      for (let i = 0; i < 3; i++) {
        if (gameScore > newHighscores[i]) {
          newHighscores.splice(i, 0, gameScore);
          break;
        }
      }
      return newHighscores.slice(0, 3);
    });
  }, [gameScore]);


  return (
    <div>
      <h3>Highscores</h3>
        {highscores[0]===0 ? 
          (<p>Noch keine Highscores</p>) :
          (<ol>
          <li>{highscores[0]} Punkte</li>
          <li>{highscores[1]} Punkte</li>
          <li>{highscores[2]} Punkte</li>
          </ol>)}
    </div>
  )
}

export default Highscores;
