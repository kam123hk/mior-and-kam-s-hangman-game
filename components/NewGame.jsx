function NewGame({ selectNewPhrase }) {
  const handleSubmit2 = (event) => {
    selectNewPhrase();
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit2}>
      <button>Reset</button>
    </form>
  );
}

export default NewGame;
