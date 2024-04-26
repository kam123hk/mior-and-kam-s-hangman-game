import { useState } from 'react'
import './App.css'
import CountGuess from '../components/CountGuess'
import IncorrectGuesses from '../components/IncorrectGuesses'
import InputGuess from '../components/InputGuess'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <p><CountGuess/></p>
    <p><IncorrectGuesses/></p>
    <p><InputGuess/></p>
    </>
  )
}

export default App
