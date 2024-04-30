function WordsDisplay({ words, listButtons }) {
    console.log(words, '<-words')
    const wordsDisplay = words.split("").map((letter, index) => {
        if (listButtons.includes(letter)) {
            return (
                <li key={index} className="letter">
                    <div>{letter}</div>
                </li>
            )
        } else if (letter === " ") {
            return (
                <li key={index} className="space">
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