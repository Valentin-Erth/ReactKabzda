import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type PropsType = {
    mode?: "analog" | "digital"
}
export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log("TICK")
            return setDate(new Date())
        }, 1000)

        return () => {//функция которая запускается когда компонента умирает
            clearInterval(intervalID)
        }
    }, [])
    const get2digitTring = (num: number) => num < 10 ? "0" + num : num
    const seconds = get2digitTring(date.getSeconds());
    const minutes = get2digitTring(date.getMinutes());
    const hours = get2digitTring(date.getHours());
        // let watch=date.toLocaleTimeString()
    // let dateNow=date.toLocaleDateString()
    let view;
    switch (props.mode) {
        case "analog":
            view = <AnalogClockView hours={hours} minutes={minutes} seconds={seconds}/>
            break;
        case "digital":
        default:
            view = <DigitalClockView hours={hours} minutes={minutes} seconds={seconds}/>
    }
    return (<div>
            {view}
            {/*<div>{watch}</div>*/}
            {/*<div>{dateNow}</div>*/}
        </div>
    )
}
export type ClockViewPropsType = {
    hours: number|string
    minutes: number|string
    seconds: number|string
}



