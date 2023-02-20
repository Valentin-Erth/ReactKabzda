import React, {useState} from 'react';

type RatingPropsType = {
    // value: number
}

export function UncntrolledRaiting(props: RatingPropsType) {
    console.log("UncntrolledRaiting rendering")
    let [value, setValue] = useState(0)
    return (
        <div>
            <Star selected={value > 0} callBack={setValue} value={1}/>
            <Star selected={value > 1} callBack={setValue} value={2}/>
            <Star selected={value > 2} callBack={setValue} value={3}/>
            <Star selected={value > 3} callBack={setValue} value={4}/>
            <Star selected={value > 4} callBack={setValue} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    callBack: (value: 1 | 2 | 3 | 4 | 5) => void
    value: 1 | 2 | 3 | 4 | 5
}

export function Star(props: StarPropsType) {
    console.log("Star rendering")
    const onClickHandler = (num: 1 | 2 | 3 | 4 | 5) => {
        props.callBack(num)
    }
    return (
        <div>
            <button onClick={() => {
                onClickHandler(props.value)
            }}>{props.selected ? <b>star</b> : "star"}
            </button>


        </div>
    )
}
