import React, { useState } from 'react'
import './test.css'

const Test = ({ setTest, setSubmit, setScore }) => {

    const initialState = {
        testType: '',
        ques: '',
        options: [{ ans: '' }, { ans: '' }, { ans: '' }, { ans: '' }]
    }

    // console.log(initialState.options[0].ans)
    const [question, setQuestion] = useState(initialState)

    const handleTest = (test) => {
        setTest(test)
        setSubmit(false)
        setScore(0)
    }

    console.log(question)

    let tests = ['programming', 'politics', 'sports']

    const handleCreateTest = () => {
        tests.push()
    }
    return (
        <div className='Test'>
            <div className="container">
                <div className="test-type">
                    <div className="test-options">
                        <h2 className='test-head'>Choose Test</h2>
                        {tests.map((t) => <button className='test__name' onClick={() => handleTest(t)}>{t.charAt(0).toUpperCase() + t.slice(1, t.length)}</button>
                        )}
                        {/* <button className='test__name' onClick={() => handleTest('programming')}>Programming</button>
                        <button className='test__name' onClick={() => handleTest('politics')}>Politics</button>
                        <button className='test__name' onClick={() => handleTest('sports')}>Sports</button> */}
                    </div>
                    <div className="new-test">
                        <h2 className='test-head'>Create New Test</h2>
                        <input type="text" placeholder='enter test type' name='testType' value={question.testType} onChange={(e) => setQuestion({ ...question, testType: e.target.value })} />
                        <input type="text" placeholder='enter question' name='ques' value={question.ques} onChange={(e) => setQuestion({ ...question, ques: e.target.value })} />
                        <div className="q-options">
                            <input type="text" placeholder='option-1' />
                            <input type="text" placeholder='option-2' />
                            <input type="text" placeholder='option-3' />
                            <input type="text" placeholder='option-4' />
                        </div>
                        <button className='create-test' onClick={handleCreateTest}>Create</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Test