import React, {useState, KeyboardEvent, useEffect} from "react";
import s from "./Select.module.css"

type ItemType = {
    title: string
    value: any
}
type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {

    const [active, setActive] = useState(false)
    const [hoverElementValue, setHoverElementValue] = useState(props.value)
    console.log("Select Rendering")
    useEffect(()=>{
        setHoverElementValue(props.value)
    },[props.value])
    const showItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        showItems()
    }
    const onKeyUp=(e:KeyboardEvent<HTMLDivElement>)=>{
        if(e.key==="ArrowDown"||e.key==="ArrowUp"){
            for (let i=0;i<props.items.length;i++){
                if(props.items[i].value===hoverElementValue){
                    const pretendentElement=e.key==="ArrowDown"?props.items[i+1]
                        :props.items[i-1]
                    if(pretendentElement){
                        props.onChange(pretendentElement.value)
                        return;
                    }
                }
            }
            if(!selectedItem){
                props.onChange(props.items[0].value)
            }
        }
        if(e.key==="Enter"||e.key==="Escape"){
            setActive(false)
        }
    }
    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoverElementValue)
    return (
        <>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span onClick={showItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(el =>
                            <div onMouseEnter={()=>{setHoverElementValue(el.value)}}
                                className={s.item + " " + (hoveredItem === el ? s.selected : "")}
                                 key={el.value}
                                 onClick={() => {
                                     onItemClick(el.value)
                                 }}
                            >{el.title}</div>)}
                    </div>
                }
            </div>
        </>

    );
};


