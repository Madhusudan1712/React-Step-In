import {createContext, useState } from "react";
import Component_B from "./ComponentB";

export const userNameContext = createContext();

function Component_A() {
    const [userName, setUserName] = useState("Madhu");
    return(
        <userNameContext.Provider value={{userName, setUserName}}>
            <div className="comp comp-A">
                <h1>Component A</h1>
                <p>User: {userName}</p>
                <Component_B/>
            </div>
        </userNameContext.Provider>

    );
}

export default Component_A