import React, {useState} from 'react';

type AccorPropsType = {
    titleValue: string
    // collapsed: boolean
}

export function UncontrolledAccordion(props: AccorPropsType) {
    // debugger
    console.log("Accor rendering")
    const [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccorTitle title={props.titleValue} setCollapsed={()=>{setCollapsed(!collapsed)}} />
            {!collapsed && <AccorBody/>}

        </div>
    )
}

type AccorTitlePropsType = {
    title: string
    setCollapsed:()=>void

}

function AccorTitle(props: AccorTitlePropsType) {
    // debugger
    console.log("AccorTitle rendering")
    const onClickHandler = () => {
        props.setCollapsed()
    }
    return (
        <h3 onClick={onClickHandler}>---{props.title}---</h3>
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

