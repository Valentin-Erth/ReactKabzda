import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion, {AccorPropsType} from "./Acordion";
import {ComponentStory} from "@storybook/react";

export default {
    title: 'Accordion stories',
    component: Accordion,
};
const callback=action("accordion mode change event fired");
// const Template: ComponentStory<typeof Accordion>  = (args) => <Accordion {...args} />;
// export const MenuCollapsedMode2=Template.bind({});
// MenuCollapsedMode2.args={
//     titleValue:"Menu",
//     collapsed:true,
//     setCollapsed: callback
// }

export const MenuCollapsedMode = () =><Accordion titleValue={"Menu"} collapsed={true} setCollapsed={callback}/> ;
export const UsersUnCollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} setCollapsed={callback}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={"Users"} collapsed={value}setCollapsed={()=>setValue(!value)}/>
}