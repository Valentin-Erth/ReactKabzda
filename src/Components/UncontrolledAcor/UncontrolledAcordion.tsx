import React, {useState} from 'react';

type AccorPropsType = {
    titleValue: string
    // collapsed: boolean
}

export function UncontrolledAccordion(props: AccorPropsType) {
    // debugger
    console.log("Accor rendering")
    const[collapsed,setCollapsed]=useState(false)

    return (
        <div>
            <AccorTitle title={props.titleValue}/>
            <button onClick={()=>{setCollapsed(!collapsed)}}>TOGGLE</button>
            {!collapsed && <AccorBody/>}

        </div>
    )
}
type AccorTitlePropsType = {
    title: string
}

function AccorTitle(props: AccorTitlePropsType) {
    // debugger
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

