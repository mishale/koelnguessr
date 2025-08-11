import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
    
  const [solution, setSolution] = useState(false);
  const [currentPoints, setCurrentPoints] = useState(0);

  return (
    <GameContext.Provider 
      value={{ solution, setSolution, currentPoints, setCurrentPoints}}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  return useContext(GameContext);
};