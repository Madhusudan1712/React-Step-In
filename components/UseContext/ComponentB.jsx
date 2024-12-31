import { useContext } from "react";
import Component_C from "./ComponentC";
import { userNameContext } from "./ComponentA";

function Component_B() {
    const {userName} = useContext(userNameContext);
    return(
        <div className="comp comp-B">
            <h1>Component B</h1>
            <p>User: {userName}</p>
            <Component_C/>
        </div>
    );
}

export default Component_B
