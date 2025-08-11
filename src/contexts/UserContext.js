import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [playerName, setPlayerName] = useState('');

  const updatePlayerName = (name) => {
    setPlayerName(name);
  };

  return (
    <UserContext.Provider value={{ playerName, updatePlayerName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
