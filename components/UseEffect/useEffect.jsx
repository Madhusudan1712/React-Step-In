import { useEffect, useState } from "react";

function UseEfffect(){
    const [count, setCount] = useState(0);
    const [action, setAction] = useState("Idel");

    useEffect(() => {
        document.title = `You clicked ${count} times`
    },[action])

    const updateCount = () => {
        setCount(c => c + 1);
    }

    const updateActionStatus = () => {
        setAction("Changed")
    }


    return(
        <div>
            <p>Count: {count}</p>
            <p>Action: {action}</p>
            <button onClick={updateCount}>+</button> <button onClick={updateActionStatus}>Update Action</button>
        </div>
    );
}

export default UseEfffect