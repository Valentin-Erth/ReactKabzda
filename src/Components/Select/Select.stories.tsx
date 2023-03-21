import React, {useState} from 'react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select
};

export const WithValue = () => <>
    <Select onChange={action("value changed")} value={2}
            items={[
                {title: "Minsk", value: 1},
                {title: "Moscow", value: 3},
                {title: "Kiev", value: 3}]}/>

</>
export const WithoutValue = () =>
    <Select onChange={action("value changed")} items={[
        {title: "Minsk", value: 1},
        {title: "Moscow", value: 2},
        {title: "Kiev", value: 3}]}/>