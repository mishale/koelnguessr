import React, { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function HomeForm() {
  const [inputValue, setInputValue] = useState('');
  const { updatePlayerName } = useUser();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    updatePlayerName(inputValue);
    navigate('./Game');
    
  };

  return (
    <div className='homeform'>
      <input 
        type='text' 
        placeholder='Dein Name'
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button className='button' onClick={handleButtonClick}>Los geht's!</Button>
    </div>
  );
}

export default HomeForm;

/*
import React from 'react';
import HomeBox from './HomeBox';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function HomeForm({ onSubmit }) {

    const [inputValue, setInputValue]= useState[''];

    const handleSubmit = () => {
        onSubmit(inputValue);
    };
  return (
    <div>
        <input 
            type="text" 
            placeholder='Dein Name' 
            value={inputValue} 
            onChange={(e) =>setInputValue(e.target.value)}>
        </input>
        <Button 
            className='startButton' 
            style={{backgroundColor: '#6B6DE0'}} 
            onClick={handleSubmit}>Los gehts!
        </Button>
    </div>
  )
}

export default HomeForm;
*/