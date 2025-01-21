import { useState } from "react";


function Counter() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(c => c + 1); //updater function
    }
    const decrementCount = () => {
        setCount(c => c - 1);
    }
    const resetCount = () => {
        setCount(0);
    }

    return(
        <div className="Counter">
            <h1>Count: {count}</h1>
            <button onClick={() => decrementCount()}>Decrement</button>
            <button onClick={() => resetCount()}>Reset</button>
            <button onClick={() => incrementCount()}>Increment</button>
        </div>
    )
}
export default Counter