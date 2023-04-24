import React from "react";
import s from "./clock.module.css";
import {ClockViewPropsType} from "./Clock";

export const AnalogClockView: React.FC<ClockViewPropsType> = ({
                                                                  hours, minutes, seconds
                                                              }) => {
    //рассчитывает углы поворота для каждой стрелки, и использует эти значения для установки стилей через атрибут style.
    const secondDegree = (+seconds / 60) * 360 ;
    const minuteDegree = (+minutes / 60) * 360 + (+seconds / 60) * 6 ;
    const hourDegree = (+hours / 12) * 360 + (+minutes / 60) * 30 ;
    return (
        <div className={s.clock}>
            {[...Array(12)].map((_, i) => (
                <div
                    key={i}
                    className={s.clock_number}
                    style={{
                        transform: `rotate(${i * 30}deg) translate(0, -90px) rotate(${-i * 30}deg)`,
                    }}
                >
                    {i + 1}
                </div>
            ))}
            <div
                className={s.hand + " " + s.hour_hand}
                style={{transform: `rotate(${hourDegree}deg)`}}
            />
            <div
                className={s.hand + " " + s.minute_hand}
                style={{transform: `rotate(${minuteDegree}deg)`}}
            />
            <div
                className={s.hand + " " + s.second_hand}
                style={{transform: `rotate(${secondDegree}deg)`}}
            />
        </div>
    )
}