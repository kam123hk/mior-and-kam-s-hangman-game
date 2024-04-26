// function CountGuess() {
//     return <>countdown of guesses left</>
// }

// export default CountGuess

import { useState } from "react"
import InputGuess from "./InputGuess";

function CountGuess() {
    const [guessesLeft, setGuessesLeft] = useState(11);
    const handleClick = () => {
        setGuessesLeft(currentGuessesLeft => {
            return currentGuessesLeft - 1
        })
    } 

    return (
    <div>
        <p>Number of guesses left: {guessesLeft}</p>
        <button onClick={handleClick}>Decrease guesses</button>
    </div>
    )
}

export default CountGuess