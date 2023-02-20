import React from 'react';

type AccorPropsType = {
    titleValue: string
    collapsed: boolean
}

function Accordion(props: AccorPropsType) {
    debugger
    console.log("Accor rendering")
    return (
        <div>
            <AccorTitle title={props.titleValue}/>
            {!props.collapsed && <AccorBody/>}
        </div>
    )
}
type AccorTitlePropsType = {
    title: string
}

function AccorTitle(props: AccorTitlePropsType) {
    debugger
    console.log("AccorTitle rendering")
    return (
        <h3>---{props.title}---</h3>
    )
}

function AccorBody() {
    console.log("AccorBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;