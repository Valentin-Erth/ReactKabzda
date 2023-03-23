import React, {useReducer} from 'react';
import {reducer} from "./reducer";


type AccorPropsType = {
    titleValue: string
    // collapsed: boolean
}

export function UncontrolledAccordion(props: AccorPropsType) {
    // debugger
    console.log("UncontrolledAccordion rendering")
    // const [collapsed, setCollapsed] = useState(false)
    const [state, dispatch] = useReducer(reducer, {collapsed: false})
    return (
        <div>
            <AccorTitle title={props.titleValue} setCollapsed={() => {
                // debugger
                dispatch({type: "TOGGLE-COLLAPSED"})
            }}/>
            {!state.collapsed && <AccorBody/>}
        </div>
    )
}

type AccorTitlePropsType = {
    title: string
    setCollapsed: () => void

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

