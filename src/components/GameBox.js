import React, { useContext } from 'react';
import { Card, Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Map from './Map';
import locationData from '../assets/locations.json';
import { useGame } from '../contexts/GameContext';

function GameBox() {

    const [currentImage, setCurrentImage] = useState('');
    const [currentRound, setCurrentRound] = useState(1);
    const {currentPoints, setCurrentPoints} = useGame();
    const {solution, setSolution} = useGame();

    const navigate = useNavigate();

    useEffect(() => {
        getRandomImg();
    }, []);

    const images = require.context('../assets/imgs');
    const imageList = images.keys().map(image => images(image));

    const getRandomImg = () =>{
      const randomIndex = Math.floor(Math.random() * imageList.length);
      const randomPath = imageList[randomIndex];
      setCurrentImage(randomPath);
    }
    const handleNextRound = () =>{
      setCurrentRound(currentRound+1);
      getRandomImg();
      setSolution(false);  
    }
    
    const handleFinish = () =>{
      navigate('../');
      //updateScore(currentPoints);
    }

    const getCoordinates = () =>{
      let x = currentImage.split('media');
      if(x.length > 1){
        let y = x[1].split('.');
        const imgPath = '/imgs'+y[0]+'.jpg';
        let lat = 0.0;
        let long = 0.0;
        for (const place of locationData.places){
          if (place.img === imgPath){
            lat = place.lat;
            long = place.long;
            break;
          }
      }
      return [lat, long];
      }
    }

    useEffect(() => {
        getRandomImg();
    }, []);

  return (
    <div className='container'>
      <Card className='point-container'>
        <Card.Title>Runde {currentRound}/5</Card.Title>
        <Card.Text>{currentPoints} von 50.000 Punkten</Card.Text>
      </Card>
      <div className='game-box'>
      <Card>
        <Card.Body>
            <Card.Title>Wo ist dieser Kölner Ort?</Card.Title>
            <Card.Img src={currentImage} />
            <Card.ImgOverlay>
            </Card.ImgOverlay>
        </Card.Body>
      </Card>
      <div className='button-container'>
        {(currentRound==5 && solution) ?
        (<Button className='button' onClick={handleFinish}>Runde beenden</Button>) : 
        (solution && <Button  className='button' onClick={handleNextRound}>Nächste Runde</Button>)}
      </div>
      </div>
      {currentImage && <Map coordinates={getCoordinates()} className="map-container"></Map>}
    </div>
  )
}

export default GameBox