import { useEffect, useRef, useState } from "react"

function StopWatch(){
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const startTimerRef = useRef(0);

    const intervalRef = useRef(null); //for clean up in useEffect


    useEffect(()=>{
        if(isRunning) {
            intervalRef.current = setInterval(()=>{
                setElapsedTime(Date.now() - startTimerRef.current);
            },10);  
        }

        return() => {
            clearInterval(intervalRef.current);
        }

    },[isRunning]);

    const start = () => {
        setIsRunning(true);
        startTimerRef.current = Date.now()-elapsedTime;
    }

    const pass = () => {
        setIsRunning(false);
    }

    const reset = () => {
        setElapsedTime(0);
        setIsRunning(false);
    }

    const formateTime = () => {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60)); 
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60); 
        let seconds = Math.floor(elapsedTime / (1000) % 60); 
        let milliseconds = Math.floor((elapsedTime % 1000)/10); 

        hours = String(hours).padStart(2,"0");
        minutes = String(minutes).padStart(2,"0");
        seconds = String(seconds).padStart(2,"0");
        milliseconds = String(milliseconds).padStart(2,"0");

        return(<>
            <span>{hours}</span>:
            <span>{minutes}</span>:
            <span>{seconds}</span>:
            <span>{milliseconds}</span>
        </>);
    }

    return(<div className="stopWatch">
        <div className="timer">
            <h1 className="title">Stop Watch</h1>
            <div>
                <span className="timeSection">
                    <span>Hours</span>:
                    <span>Minutes</span>:
                    <span>Seconds</span>:
                    <span>Milli's</span>
                </span>
                <span className="currentTimer">
                    {formateTime()}
                </span>
            </div>
            <div className="stopWatchControls">
                <button onClick={start} className="start-btn">Start</button>
                <button onClick={pass} className="pass-btn">Pass</button>
                <button onClick={reset} className="reset-btn">Reset</button>
            </div>
        </div>
    </div>);
}

export default StopWatch