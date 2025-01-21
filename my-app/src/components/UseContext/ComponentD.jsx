import { useContext, useState } from "react";
import { userNameContext } from "./ComponentA";

function Component_D() {
    const [loaclUserName, setLoaclUserName] =useState("Mobby");
    const {userName,setUserName} = useContext(userNameContext)

    const changeToLocalUser = () => {
        setUserName(loaclUserName);
    }
    return(
        <div className="comp comp-D">
            <h1>Component D</h1>
            <p>User: {userName}</p>
            <button class="comp-D-Btn" role="button" onClick={changeToLocalUser}><span class="text">Change to loacl user</span></button>
        </div>
    );
}

export default Component_D