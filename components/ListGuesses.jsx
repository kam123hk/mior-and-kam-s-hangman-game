function ListGuesses({listGuesses, words}) {

    return (
    <ol>
        {listGuesses.map((guess, index) => {
        return guess === words ? <li key={index}>✅ <strong>{guess}</strong> is correct!</li> : <li key={index}>{guess} ❌</li>
        })}
    </ol>
    )

}

export default ListGuesses