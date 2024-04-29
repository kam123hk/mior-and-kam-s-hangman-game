function ListGuesses({listGuesses, words}) {

    return (
    <ul>
        {listGuesses.map((guess, index) => {
        return guess === words ? <li key={index}>{guess} is correct!</li> : <li key={index}>{guess}</li>
        })}
    </ul>
    )

}

export default ListGuesses