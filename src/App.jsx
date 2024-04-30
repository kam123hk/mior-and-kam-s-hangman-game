import { useState } from 'react'
import './App.css'
import CountGuess from '../components/CountGuess'
import ListGuesses from '../components/ListGuesses'
import InputGuess from '../components/InputGuess'
import Buttons from '../components/Buttons'
import WordsDisplay from '../components/WordsDisplay'
// import { phrases } from './phrases.json'
import NewGame from '../components/NewGame'

function App() {

  // const phrasesArray = [];
  // phrases.forEach((phrase, index) => {
  //   phrasesArray.splice(Math.floor(Math.random()*(index+1)), 0, phrase)
  // })

  const [listGuesses, setListGuesses] = useState([]);
  const [listButtons, setListButtons] = useState([]);
  const [listPhrases, setListPhrases] = useState(['first', 'second phrase', 'third phr', 'fourth', 'fifth words', 'sixth ones']);

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

  const selectNewPhrase = () => {    
    setListPhrases(currentListPhrases => {
      return currentListPhrases.slice(1);
    })
  }

  return (
    <>
    <WordsDisplay words={listPhrases[0]} listButtons={listButtons}/>
    <CountGuess listGuesses={listGuesses} listButtons={listButtons}/>
    <p>
    <Buttons postButton={postButton}/>
    </p>
    <InputGuess words={listPhrases[0]} listButtons={listButtons} postGuess={postGuess} listGuesses={listGuesses}/>
    <ListGuesses listGuesses={listGuesses} words={listPhrases[0]}/>
    <NewGame selectNewPhrase={selectNewPhrase} />
    </>
  )
}

export default App
