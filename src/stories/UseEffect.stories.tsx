import React, {useEffect, useMemo, useState} from "react";

export default {
    title: "useEffect demo",
}
export const SimpleExample = () => {
    console.log("SimpleExample")
    const [counter,setCounter]=useState(1);
const [fake,setFake]=useState(1)
    useEffect(()=>{
         console.log("useEffect every render")
        document.title=counter.toString()
        //api.getUsers().then
        //setInterval
        //indexDb
        //document.gerElementById
        //document.title="User"
    })
    useEffect(()=> {
        console.log("useEffect only first componentDidMount")
        document.title=counter.toString()
    },[])
    useEffect(()=> {
        console.log("useEffect first render and every counter change")
        document.title=counter.toString()
    },[counter])
    return <>
        Hello, {counter}
        <button onClick={()=>{setCounter(counter+1)}}>Counter+</button>
        <button onClick={()=>{setFake(fake+1)}}>Fake+</button>
    </>
}

export const SetTimeoutExample = () => {
    const [counter,setCounter]=useState(1);
    const [fake,setFake]=useState(1)
    const [time,setTime]=useState(new Date)
    console.log("SetTimeoutExample")
    let timer=time.toLocaleTimeString()
    // useEffect(()=>{
    //   setInterval(()=>{
    //         console.log("setInterval"+ counter)
    //         setCounter((state)=>state+1)
    //     },1000)
    //    },[])
    useEffect(()=> {
        // console.log("useEffect every render")
        const intervalID=setInterval(()=>{
                // console.log("TICK")
                setTime(new Date)
            },1000)
        return ()=> {//функция которая запускается когда компонента умирает
            clearInterval(intervalID)
        }
           },[])
        let watch=time.toLocaleTimeString()
        let date=time.toLocaleDateString()

    return <>
        <div>{watch}</div>
        <div>{date}</div>
        Hello, counter:{counter}---fake: {fake}
        {/*<button onClick={()=>{setCounter(counter+1)}}>Counter+</button>*/}
        {/*<button onClick={()=>{setFake(fake+1)}}>Fake+</button>*/}

    </>
}