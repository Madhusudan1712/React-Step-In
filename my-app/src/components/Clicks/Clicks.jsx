function Clicks() {
    const handelClicks = (e) => {
        e.target.textContent = 'Clisked me';
    }
    return(
        <>
            <button onClick={(e) => handelClicks(e)}>Click me</button>
        </>
    )
}

export default Clicks