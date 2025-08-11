import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Game from'./pages/Game.js';
import Info from './pages/Info.js';
import { UserProvider } from './contexts/UserContext';
import { GameProvider } from './contexts/GameContext';


function App() {

  return (
    <div className='app'>
      <GameProvider>
      <UserProvider>
        <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Game" element={<Game/>} />
            <Route path="/Info" element={<Info/>} />
            <Route path="/Game#home" element={<Home/>} />
            <Route path="/Info#home" element={<Home/>} />
          </Routes>
        </Router>
      </UserProvider>
      </GameProvider>
    </div>
  );
}

export default App;

/*
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Game from './pages/Game';
import Info from './pages/Info';
import  PlayerContext  from './contexts/PlayerContext';

function App() {

  const [playerName, setPlayername]=useState('');
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/Game" element={<Game/>} />
          <Route path="/Info" element={<Info/>} />
        </Routes>
      </Router>
      <PlayerContext.Provider value={{playerName}}>
        <Home></Home>
      </PlayerContext.Provider>
    </div>
  );
}

export default App;

/* Color Wheel

#8785EB
#CFC0EB
#C0DAEB
*/

