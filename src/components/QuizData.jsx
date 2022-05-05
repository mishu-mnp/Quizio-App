import React, { useState } from 'react';
import './quizData.css'

const QuizData = ({ test, data, setSubmit, submit, setScore, score }) => {

    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [classOptionName, setClassOptionName] = useState('')


    const handleAnswer = (a) => {
        setSelectedAnswer(a)
        setClassOptionName('tick option')
        if (a.correct) {
            setScore(score + 1)
        }
    }

    const handleSubmit = () => {
        setSubmit(true)
    }

    // console.log(score)

    return (
        <div className='QuizData'>
            <h2> {submit ? `Your Score is ${score}` : test.length > 0 ? 'Quiz on ' + test : 'Questions of Test'}</h2>
            {!submit && data?.map((d) => {
                return <div key={d.id} className="queries">
                    <h2 className='question'>{d.ques}</h2>
                    <div className="options">
                        {d?.options.map((op, index) => {
                            return <div className='ans'>
                                <div key={index} className={selectedAnswer === op ? classOptionName : 'option'} onClick={() => handleAnswer(op)}>{op.ans}</div><input type="radio" />
                            </div>
                        })}
                    </div>
                </div>
            })}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default QuizData