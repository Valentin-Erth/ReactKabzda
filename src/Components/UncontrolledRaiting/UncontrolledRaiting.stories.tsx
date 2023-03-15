import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";
import {UncntrolledRaiting} from "./UncntrolledRaiting";


export default {
    title: 'UncntrolledRaiting stories',
    component: UncntrolledRaiting,
};
const callback=action("raiting changed inside component")
export const EmptyRating = () => <UncntrolledRaiting Defaultvalue={0} onChange={callback}/>;
export const Raiting1 = () => <UncntrolledRaiting Defaultvalue={1} onChange={callback}/>;
export const Raiting2 = () => <UncntrolledRaiting Defaultvalue={2} onChange={callback}/>;
export const Raiting3 = () => <UncntrolledRaiting Defaultvalue={3} onChange={callback}/>;
export const Raiting4 = () => <UncntrolledRaiting Defaultvalue={4} onChange={callback}/>;
export const Raiting5 = () => <UncntrolledRaiting Defaultvalue={5} onChange={callback}/>;
