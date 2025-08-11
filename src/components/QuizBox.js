import React from 'react';
import { Card, Form } from 'react-bootstrap';

const QuizBox = ({ question, answers, selectedAnswer, onCheckboxChange, showCorrectAnswer, correctAnswer }) => {
  return (
    <Card className='quiz-container'>
      <Card.Body>
        <h5>{question}</h5>
        <Form>
          {answers.map((answer, answerIndex) => (
            <Form.Check
              key={answerIndex}
              type="checkbox"
              label={answer}
              checked={selectedAnswer === answer}
              onChange={() => onCheckboxChange(answer)}
              className={showCorrectAnswer && answer === correctAnswer ? 'correct-answer' : ''}
              
            />
          ))}
        </Form>
      </Card.Body>
    </Card>
  );
};

export default QuizBox;
