import { useEffect, useState } from "react";

function DigitalClock() {
    const [time, setTime] = useState(new Date())

    useEffect(()=>{
        const refreshTime = setInterval(()=>{
            setTime(new Date());
        },1000);
    },[]);

    const formateTime = () => {
        let hours = time.getHours();
        hours = hours%12 || 12;
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours > 12 ? "PM" : "AM";

        return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}:${meridiem}`
    }

    const addZero = (number)=>{
        return (number < 10 ? "0" : "")+number;
    }

    return(<div className="digitalTimer">
        <h1 className="currentTime">{formateTime()}</h1>
    </div>)
}

export default DigitalClock