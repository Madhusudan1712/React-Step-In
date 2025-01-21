import { useEffect, useState } from "react";

function UseEffect2() {
    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(()=>{
        window.addEventListener("resize", updateWindowSize);

        //clean up
        // return(
        //     window.removeEventListener("resize", updateWindowSize)
        // );
    },[]);

     useEffect(()=>{
         document.title='Size: '+ height +' X '+ width ;
     }, [height, width])

    const updateWindowSize = () => {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }
    return(<div>
        <h1>Window Height: {height}px</h1>
        <h1>Window Width: {width}px</h1>
    </div>);
}

export default UseEffect2 