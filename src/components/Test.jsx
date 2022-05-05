import React from 'react'
import './test.css'

const Test = ({ setTest, setSubmit, setScore }) => {

    const handleTest = (test) => {
        setTest(test)
        setSubmit(false)
        setScore(0)
    }
    return (
        <div className='Test'>
            <h2 className='test-title'>Choose Test</h2>
            <div className="container">
                <div className="test-type">
                    <div className="test-options">
                        <button className='test__name' onClick={() => handleTest('programming')}>Programming</button>
                        <button className='test__name' onClick={() => handleTest('politics')}>Politics</button>
                        <button className='test__name' onClick={() => handleTest('sports')}>Sports</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Test