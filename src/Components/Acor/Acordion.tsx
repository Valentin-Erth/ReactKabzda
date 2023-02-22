import React from 'react';

type AccorPropsType = {
    titleValue: string
    setCollapsed: (collapsed:boolean)=>void
    collapsed:boolean
}

function Accordion(props: AccorPropsType) {
    // debugger
    console.log("Accor rendering")
    return (
        <div>
            <AccorTitle title={props.titleValue} setCollapsed={props.setCollapsed} collapsed={props.collapsed}/>
            {!props.collapsed && <AccorBody/>}
        </div>
    )
}
type AccorTitlePropsType = {
    title: string
    setCollapsed:(collapsed:boolean)=>void
    collapsed:boolean
}

function AccorTitle(props: AccorTitlePropsType) {
    // debugger
    console.log("AccorTitle rendering")
    return (
        <h3 onClick={()=>{props.setCollapsed(props.collapsed)}}>---{props.title}---</h3>
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