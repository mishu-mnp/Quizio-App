import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import QuizData from './components/QuizData';
import Test from './components/Test';
import { programming, politics, sports } from './data';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [test, setTest] = useState('')
  const [data, setData] = useState([])
  const [submit, setSubmit] = useState(false)
  const [score, setScore] = useState(0)


  // set test type data
  const handleTestData = (test) => {
    if (test === 'programming') {
      setData(programming)
    } else if (test === 'politics') {
      setData(politics)
    } else {
      setData(sports)
    }
  }

  console.log(data)

  useEffect(() => {
    handleTestData(test)
  }, [test])

  // console.log(test)
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path='/'
            element={<>
              <Test setTest={setTest} setSubmit={setSubmit} setScore={setScore} />
            </>}>
          </Route>
          <Route path='/test'
            element={<>
              <div className="app-content">
                <Test setTest={setTest} setSubmit={setSubmit} setScore={setScore} />
                <QuizData test={test} data={data} setSubmit={setSubmit} submit={submit} setScore={setScore} score={score} />
              </div>
            </>}>
          </Route>
        </Routes>
      </div>
    </Router>
  )
}


export default App;
