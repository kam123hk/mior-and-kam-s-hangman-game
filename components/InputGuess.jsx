import { useState } from "react";

function InputGuess({ words, listButtons, postGuess, listGuesses }) {
    const [guess, setGuess] = useState("");
    const [isDisabled, setIsDisabled] = useState(true)

    const handleSubmit = (event) => {
        event.preventDefault();
        postGuess(guess);
        setIsDisabled(true);
        setGuess("");
    }

    const handleChange = (event) => {
        if (event.target.value !== "" && !listGuesses.includes(event.target.value.toLowerCase()) && event.target.value.length === words.length && event.target.value.toLowerCase().split("").every((letter, index) => {return (listButtons.includes(letter) && words[index] === letter) || !listButtons.includes(words[index])})) setIsDisabled(false)
        else setIsDisabled(true);
        setGuess(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="guess"></label>
            <input id="guess" placeholder="type your guess here" onChange={handleChange} value={guess}></input>            
            <button disabled={isDisabled} type="submit">Submit guess</button>
        </form>)
    };
    
    export default InputGuess