import React, {useState} from 'react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select
};

export const WithValue = () =>{
const [value, setvalue] = useState(2)
    return(
        <Select onChange={setvalue}
                value={value}
                items={[
                    {title: "Minsk", value: 1},
                    {title: "Moscow", value: 2},
                    {title: "Kiev", value: 3}]}/>
        )
        }
export const WithoutValue = () =>{
    const [value, setvalue] = useState(null)
    return(
    <Select onChange={setvalue} value={value} items={[
        {title: "Minsk", value: 1},
        {title: "Moscow", value: 2},
        {title: "Kiev", value: 3}]}/>
    )
}
