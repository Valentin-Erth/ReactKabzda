import React, {useState} from 'react';

type RatingPropsType = {
    // value: number
}

export function UncntrolledRaiting(props: RatingPropsType) {
    console.log("UncntrolledRaiting rendering")
    let [value, setValue] = useState(0)
    return (
        <div>
            <Star selected={value > 0} setValue={() => {
                setValue(1)
            }}/>
            <Star selected={value > 1} setValue={() => {
                setValue(2)
            }}/>
            <Star selected={value > 2} setValue={() => {
                setValue(3)
            }}/>
            <Star selected={value > 3} setValue={() => {
                setValue(4)
            }}/>
            <Star selected={value > 4} setValue={() => {
                setValue(5)
            }}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setValue: () => void

}

export function Star(props: StarPropsType) {
    console.log("Star rendering")
    const onClickHandler = () => {
        props.setValue()
    }
    return (

    <span onClick = {onClickHandler} >
        {props.selected ? <b> star</b> : " star"}
</span>

)
}
