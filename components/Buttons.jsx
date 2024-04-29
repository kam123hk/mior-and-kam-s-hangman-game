function Buttons({ postButton }) {

    const handleClick = (event) => {
        event.currentTarget.disabled = "true";
        postButton(event.currentTarget.innerText);
    }

    return (
        <>
        <button disabled={false} onClick={handleClick}>a</button>
        <button disabled={false} onClick={handleClick}>b</button>
        <button disabled={false} onClick={handleClick}>c</button>
        <button disabled={false} onClick={handleClick}>d</button>
        <button disabled={false} onClick={handleClick}>e</button>
        <button disabled={false} onClick={handleClick}>f</button>
        <button disabled={false} onClick={handleClick}>g</button>
        <button disabled={false} onClick={handleClick}>h</button>
        <button disabled={false} onClick={handleClick}>i</button>
        <button disabled={false} onClick={handleClick}>j</button>
        <button disabled={false} onClick={handleClick}>k</button>
        <button disabled={false} onClick={handleClick}>l</button>
        <button disabled={false} onClick={handleClick}>m</button>
        <button disabled={false} onClick={handleClick}>n</button>
        <button disabled={false} onClick={handleClick}>o</button>
        <button disabled={false} onClick={handleClick}>p</button>
        <button disabled={false} onClick={handleClick}>q</button>
        <button disabled={false} onClick={handleClick}>r</button>
        <button disabled={false} onClick={handleClick}>s</button>
        <button disabled={false} onClick={handleClick}>t</button>
        <button disabled={false} onClick={handleClick}>u</button>
        <button disabled={false} onClick={handleClick}>v</button>
        <button disabled={false} onClick={handleClick}>w</button>
        <button disabled={false} onClick={handleClick}>x</button>
        <button disabled={false} onClick={handleClick}>y</button>
        <button disabled={false} onClick={handleClick}>z</button>
        </>
    )
}

export default Buttons;