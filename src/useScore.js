import React from 'react'
import { useState, useEffect } from 'react'

const useScore = () => {
    const [gameScore, setGameScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        saveScoreInStorage();
    }, [gameScore]);

    useEffect(() => {
        const loadedScore = localStorage.getItem("score");
        setGameScore(loadedScore);
        setIsLoading(false);
    }, []);

    function saveScoreInStorage() {
        localStorage.setItem("score", gameScore);
    }

    function updateScore(newScore) {
     setGameScore(newScore);
    }

    return [gameScore, updateScore, isLoading];
    };

    export default useScore;