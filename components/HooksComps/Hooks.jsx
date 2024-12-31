import { useState } from "react"

function Hooks() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [employed, setEmployed] = useState(true);

    const updateName = () => {
        setName("Madhu");
    }
    const updateAge = () => {
        setAge(age+1);
    }
    const updateStatus = () => {
        setEmployed(!employed);
    }
    return(
        <>
            <p>Name: {name}</p>
            <button onClick={() => updateName()}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={() => updateAge()}>Set Age</button>
            <p>Employed: {(employed)?"Yes":"No"}</p>
            <button onClick={() => updateStatus()}>Status</button>
        </>
    )
}

export default Hooks