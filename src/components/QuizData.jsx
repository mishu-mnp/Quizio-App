import React from 'react';
import './quizData.css'

const QuizData = ({ test }) => {
    return (
        <div className='QuizData'>
            <h2>Quiz on {test}</h2>
        </div>
    )
}

export default QuizData