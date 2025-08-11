import React, { useState } from "react";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { Container, Button, Alert } from 'react-bootstrap';
import QuizBox from '../components/QuizBox';


const Info = () => {

    const navigate = useNavigate();

  const [quizData, setQuizData] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showJsonData, setShowJsonData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("https://opentdb.com/api.php?amount=5&category=22&difficulty=medium&type=multiple");
        console.log(response.data);
        setQuizData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCheckboxChange = (questionIndex, answer) => {
    setSelectedAnswers(prevState => ({
      ...prevState,[questionIndex]:answer
    }));
  }; 

  const highlightCorrectAnswers = () =>{
    setShowCorrectAnswers(true);
    setQuizCompleted(true);
  };

  const calculatePoints = () =>{
    const correctAnswers = quizData.results.map((question, index) => {
      return selectedAnswers[index] === question.correct_answer;
    });
    let count = 0;
    for(let i=0; i<correctAnswers.length; i++){
      if (correctAnswers[i]===true){
        count = count+20;
      }
    }
    console.log(count);
    return count;
  }
  const navigateToHome = () =>{
    navigate('../');
  }

  const handleToggle = () => {
    setShowJsonData(!showJsonData);
  };

  return (
    <Container>
      {showJsonData ? (
        <pre>{JSON.stringify(quizData, null, 2)}</pre>
      ) : (
        <>
      {quizData && (
        quizData.results.map((question, index) => (
          <QuizBox
            key={index}
            question={question.question}
            answers={[...question.incorrect_answers, question.correct_answer]}
            selectedAnswer={selectedAnswers[index]}
            correctAnswer={question.correct_answer}
            onCheckboxChange={(answer) => handleCheckboxChange(index, answer)}
            showCorrectAnswer={showCorrectAnswers}
            />
        ))
      )}
     {!quizCompleted ? (
      <>
        <Button  className='button quiz-button' onClick={highlightCorrectAnswers}>Quiz beenden</Button>
      </>
        ) : (
          <>
          <Button  className='button' onClick={navigateToHome}>Startseite</Button>
          <Alert className='alert'>{calculatePoints()}% richtig!</Alert>
          </>
          )}
        </>
      )}
       <Button  className='button quiz-button json' variant="info" onClick={handleToggle}>
        {showJsonData ? "Quiz" : "JSON"}
      </Button>
     
    </Container>
  );
};


export default Info;