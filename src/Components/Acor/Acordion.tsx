import React from 'react';

type ItemType={
    title: string
    value: any
}
export type AccorPropsType = {
    titleValue: string
    setCollapsed: (collapsed: boolean) => void
    collapsed: boolean
    items: ItemType[]
    onClick:(value:any)=>void
}

function Accordion(props: AccorPropsType) {
    // debugger
    console.log("Accor rendering")
    return (
        <div>
            <AccorTitle title={props.titleValue} setCollapsed={props.setCollapsed} collapsed={props.collapsed}/>
            {!props.collapsed && <AccorBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

type AccorTitlePropsType = {
    title: string
    setCollapsed: (collapsed: boolean) => void
    collapsed: boolean
}

function AccorTitle(props: AccorTitlePropsType) {
    // debugger
    console.log("AccorTitle rendering")
    return (
        <h3 onClick={() => {
            props.setCollapsed(props.collapsed)
        }}>---{props.title}---</h3>
    )
}

export type AccorBodyPropsType = {
    items: ItemType[]
    onClick:(value:any)=>void
}

function AccorBody(props: AccorBodyPropsType) {
    console.log("AccorBody rendering")
    return (
        <ul>
            {props.items.map((el, i) => {
                    return (
                        <li onClick={()=>{props.onClick(el.value)}} key={i}>{el.title}</li>
                    )
                }
            )}
        </ul>
    )
}

export default Accordion;