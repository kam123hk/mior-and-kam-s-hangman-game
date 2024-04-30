function NewGame( { selectNewPhrase }) {

    const handleSubmit2 = () => {
        selectNewPhrase()
    }

    return (
        <form onSubmit={handleSubmit2}>
        <button>Reset</button>
        </form>
    )
}

export default NewGame