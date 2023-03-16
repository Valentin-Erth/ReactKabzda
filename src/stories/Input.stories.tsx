import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";


export default {
    title: "input",
}
export const UncontrolledInput = () => <input/>;

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")
    // debugger
    const onChange=(event:ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        // debugger
        setValue(actualValue);
    }
    return <><input onChange={onChange}/> - {value}</>;
};

export const TGetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("")
    const inputRef=useRef<HTMLInputElement>(null)
    const save=()=>{
        const el=inputRef.current as HTMLInputElement
        setValue(el.value)}
    return <><input ref={inputRef}/><button onClick={save}>save</button> -actual value: {value}</>;
};

export const ControlledInputWithFixValue = () => <input value={"IT-incubator"}/>;

export const ControlledInput=()=>{
    const [parentValue,setparentValue]=useState("")
    const onChange=(event:ChangeEvent<HTMLInputElement>)=>{
        setparentValue(event.currentTarget.value)
    }
return <input value={parentValue} onChange={onChange}/>
}
export const ControlledChekbox=()=>{

}
export const ControlledSelect=()=>{

}