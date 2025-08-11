import { useState } from 'react';
import { MapContainer,
    TileLayer, Marker, useMapEvents, Polyline, distance} from 'react-leaflet';
import { Button } from 'react-bootstrap';
import { useGame } from '../contexts/GameContext';
import '../assets/locations.json';
import 'leaflet/dist/leaflet.css';


const Map = ({coordinates}) => {

    const [markerPosition, setMarkerPosition] = useState(null);
    const {solution, setSolution} = useGame();
    const {currentPoints, setCurrentPoints} = useGame();

    function calculateDistance(coord1, coord2) {
        const R = 6371;
        const dLat = deg2rad(coord2[0] - coord1[0]);
        const dLon = deg2rad(coord2[1] - coord1[1]);
    
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(coord1[0])) * Math.cos(deg2rad(coord2[0])) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
    
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c; 
    
        return distance * 1000;
    }
    function deg2rad(deg) {
        return deg * (Math.PI / 180);
    }

    const handleMapClick = (e) => {
        setMarkerPosition(prevMarkerPosition => {
            const newMarkerPosition = [e.latlng.lat, e.latlng.lng];
            return newMarkerPosition;
        });
    };
    

    const MapClickEvents = () => {
        useMapEvents({
        click: handleMapClick,
        });

    return null;
    };
    
    const calculatePoints = () =>{
        let dist = Math.round(calculateDistance(coordinates, markerPosition));
        if (dist < 10000){
            setCurrentPoints(10000-dist+currentPoints);
        }
    }

    const getSolution = () =>{
        setSolution(true);
        calculatePoints();
    }


    return (
        <div className='map-container'>
             {!solution && markerPosition && <Button  className='button' onClick={getSolution}>Auflösen</Button>}
            <MapContainer center={[50.9413, 6.9583]} zoom={13}
            style={{ height: '400px', width: '100%' }}>
            <MapClickEvents />
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markerPosition && (
                <Marker position={markerPosition}>
                </Marker>
            )}
            {solution && <Polyline positions={[coordinates, markerPosition]} color='red'></Polyline>}
            </MapContainer>
        
        </div>
    );
    };

export default Map;