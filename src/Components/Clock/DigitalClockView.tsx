import React from "react";
import {ClockViewPropsType} from "./Clock";

export const DigitalClockView: React.FC<ClockViewPropsType> = ({
                                                                   hours, minutes, seconds
                                                               }) => {
    return <><span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span></>
}