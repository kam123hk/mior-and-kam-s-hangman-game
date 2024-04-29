import { useState } from 'react'
import './App.css'
import CountGuess from '../components/CountGuess'
import ListGuesses from '../components/ListGuesses'
import InputGuess from '../components/InputGuess'
import Buttons from '../components/Buttons'
import WordsDisplay from '../components/WordsDisplay'

function App() {
  // const [count, setCount] = useState(0)
  const [listGuesses, setListGuesses] = useState([]);
  const [listButtons, setListButtons] = useState([]);
  const [words, setWords] = useState('banter');

  const postGuess = (guess) => {
    setListGuesses(currentListGuesses => {
      return [guess.toLowerCase(), ...currentListGuesses]
    })
  }

  const postButton = (button) => {
    setListButtons(currentListButtons => {
      return [button, ...currentListButtons]
    })
  }

  return (
    <>
    <WordsDisplay words={words} listButtons={listButtons}/>
    <CountGuess listGuesses={listGuesses} listButtons={listButtons}/>
    <p>
    <Buttons postButton={postButton}/>
    </p>
    <InputGuess words={words} listButtons={listButtons} postGuess={postGuess} listGuesses={listGuesses}/>
    <ListGuesses listGuesses={listGuesses} words={words}/>
    </>
  )
}

export default App
