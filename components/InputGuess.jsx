// function InputGuess() {
//     return <>user input form for guess</>
// }

// export default InputGuess

import { useState } from "react";

function InputGuess() {
    const [guess, setGuess] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        // setGuess("new guess");
        console.log(event.target[0].value)
        return event.target[0].value
        // send guess to countGuess and incorrectGuesses
    }

    // const handleSubmit = (event) => {
    //     // prevent the form's default submission behaviour
    //     event.preventDefault();
    //     // add the newItem to our list in App
    //     setList((currList) => {
    //       return [newItem, ...currList];
    //     });
    //     // reset the input to be empty
    //     setNewItem('');
    //   };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="guess"></label>
            <input id="guess" placeholder="put your guess here" ></input>            
            <button type="submit">Submit guess</button>
        </form>
    )
    };

    
    export default InputGuess