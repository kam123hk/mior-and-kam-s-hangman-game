import { useState } from "react"

function WordsDisplay({ words, listButtons }) {

    const wordsDisplay = words.split("").map((letter, index) => {
        if (listButtons.includes(letter)) {
            return (
                <li key={index} className="letter">
                    <div>{letter}</div>
                </li>
            )
        } else {
            return (
                <li key={index} className="letter"></li>
            )
        }
    })

    return (
        <ul className="words-display">
            {wordsDisplay}
        </ul>
    )
}

export default WordsDisplay