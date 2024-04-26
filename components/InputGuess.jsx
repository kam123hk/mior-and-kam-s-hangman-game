// function InputGuess() {
//     return <>user input form for guess</>
// }

// export default InputGuess

import { useState } from "react";

function InputGuess() {
    const [guess, setGuess] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        setGuess("new guess");
        console.log(event.target.value)
        // return event.target.value
        // send guess to countGuess and incorrectGuesses
    }

    return (
        <form>
            <label htmlFor="guess"></label>
            <input id="guess" placeholder="put your guess here"></input>            
            <button onClick={handleSubmit}>Submit guess</button>
        </form>
    )
    }
    
    export default InputGuess