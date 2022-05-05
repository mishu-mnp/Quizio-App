import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import QuizData from './components/QuizData';
import Test from './components/Test';
import { programming, politics, sports } from './data'

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
    <div className="App">
      {/*<h1>Quizio</h1> */}
      <Navbar />
      <div className="app-content">
        <Test setTest={setTest} setSubmit={setSubmit} setScore={setScore} />
        {<QuizData test={test} data={data} setSubmit={setSubmit} submit={submit} setScore={setScore} score={score} />}
      </div>
    </div>
  );
}

export default App;
