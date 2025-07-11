import React, {useState, useEffect} from "react"

function DigitalClock(){

    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(()=> {
            setTime(new Date());
        }, 1000);
        return()=>{
            clearInterval(interval);
        }
    }, [])
    function formatTime(){
        let hrs = time.getHours()
        const min = time.getMinutes()
        const sec = time.getSeconds()
        const mr = hrs >= 12 ? "PM" : "AM";
        hrs = hrs % 12 || 12;

        return `${padZero(hrs)}:${padZero(min)}:${padZero(sec)} ${mr}`
    }

    function padZero(num){
        
        return (num < 10 ? "0" : "") + num;
    }
     return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
     )
};

export default DigitalClock