import { useState } from "react"

function CountGuess({ listGuesses , listButtons }) {
    return (
    <>
        <label>Number of guesses left: {11 - listGuesses.length - listButtons.length}</label>
    </>
    )
}

export default CountGuess