import React from 'react'
import './test.css'

const Test = ({ setTest }) => {
    return (
        <div className='Test'>
            <h2 className='test-title'>Choose Test</h2>
            <div className="container">
                <div className="test-type">
                    <div className="test-options">
                        <button className='test__name' onClick={() => setTest('programming')}>Programming</button>
                        <button className='test__name' onClick={() => setTest('politics')}>Politics</button>
                        <button className='test__name' onClick={() => setTest('sports')}>Sports</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Test