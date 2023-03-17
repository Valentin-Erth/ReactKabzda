import React, {useState} from "react";
import s from "./Select.module.css"
type ItemType = {
    title: string
    value: any
}
type SelectPropsType = {
    value: any
    onChange?: (value: any) => void
    items: ItemType[]
}
export const Select = (props: SelectPropsType) => {
    const [value, setValue] = useState<string | undefined>("None")
    let [isOpen, setOpen] = useState<boolean>(true);
    const onChange=(value:any)=>{
let filteredValue=props.items.filter(el=>el.value===value)
        setValue(filteredValue[0].title)
    }
    return (
        <div>
            <div className={s.menu}  onClick={()=>{setOpen(!isOpen)}}>{value}</div>

            {!isOpen && props.items.map((el,i) =>
                <div className={s.menu_element} key={i} onClick={()=>onChange(el.value)}>{el.title}</div>)}
        </div>
    );
};

