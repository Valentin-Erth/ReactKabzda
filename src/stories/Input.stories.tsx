import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";


export default {
    title: "input",
}
export const UncontrolledInput = () => <input/>;

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")
    // debugger
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        // debugger
        setValue(actualValue);
    }
    return <><input onChange={onChange}/> - {value}</>;
};

export const TGetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <><input ref={inputRef}/>
        <button onClick={save}>save</button>
        -actual value: {value}</>;
};

export const ControlledInputWithFixValue = () => <input value={"IT-incubator"}/>;

export const ControlledInput = () => {
    const [parentValue, setparentValue] = useState("")
    // debugger
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        // debugger
        setparentValue(event.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChange}/>
}
export const ControlledChekbox = () => {
    const [parentValue, setparentValue] = useState(true)
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setparentValue(event.currentTarget.checked)
    }
    return <input type={"checkbox"} checked={parentValue} onChange={onChange}/>
}
export const ControlledSelect = () => {
    const [parentValue, setparentValue] = useState<string|undefined>("2")
    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setparentValue(event.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={"1"}>Moscow</option>
        <option value={"2"}>Minsk</option>
        <option value={"3"}>Kiev</option>
    </select>

}