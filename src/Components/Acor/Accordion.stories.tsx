import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion, {AccorPropsType} from "./Acordion";
import {ComponentStory} from "@storybook/react";

export default {
    title: 'Accordion stories',
    component: Accordion,
};
const callback = action("accordion mode change event fired");
const onClickCallbak = action("some item was claicked")
// const Template: ComponentStory<typeof Accordion>  = (args) => <Accordion {...args} />;
// export const MenuCollapsedMode2=Template.bind({});
// MenuCollapsedMode2.args={
//     titleValue:"Menu",
//     collapsed:true,
//     setCollapsed: callback
// }

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} setCollapsed={callback}
                                                  items={[]} onClick={onClickCallbak}/>;
export const UsersUnCollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} setCollapsed={callback}
                                                     items={[{title: "Dmitriy", value: 1}, {
                                                         title: "Valera",
                                                         value: 2
                                                     }, {title: "Artem", value: 3}, {title: "Andrew", value: 4}]}
                                                     onClick={onClickCallbak}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={"Users"} collapsed={value} setCollapsed={() => setValue(!value)} items={[
        {title: "Dmitriy", value: 1},
        {title: "Valera", value: 2},
        {title: "Artem", value: 3},
        {title: "Andrew", value: 4}
    ]}
                      onClick={(id)=>{alert(`user with ID ${id} should be happy`)}}/>
}