import { useEffect, useRef, useState } from "react";

function UseRef() {
    //const [count, setCount] = useState(0);
    const countRef = useRef(0);

    useEffect(()=>{
        console.log("Component rendred");
    });

    const updateCountRef = () => {
        countRef.current++;
        console.log(countRef.current);
        //setCount(countRef.current++)
    }

    return(<div>
        <h1>{countRef.current}</h1>
        <button onClick={updateCountRef}>+</button>
    </div>);
}

export default UseRef