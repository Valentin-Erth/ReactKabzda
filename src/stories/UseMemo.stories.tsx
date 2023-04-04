import React, {useMemo, useState} from "react";

export default {
    title: "useMemo"
}
export const DifficultCountingExample1 = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)
    let resultA = 1
    let resultB = 1
    resultA = useMemo(() => {
        // debugger
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB *= i
    }
    return (
        <>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(event) => {
                setB(+(event.currentTarget.value))
            }}/>
            <hr/>
            <div>
                Result for a:{resultA}
            </div>
            <div>
                Result for b:{resultB}
            </div>
        </>

    )
}

const UsersSecret = (props: { users: Array<string> }) => {
    // debugger
    console.log("Users secret")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)
export const HelpForReactMemoExample = () => {
    console.log("HelpForReactMemoExample")
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Anton", "Alex", "Petr", "Vera"]);
const newArray=useMemo(()=>{
    return  users.filter((u=>u.indexOf("a")>-1))
},[])
    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        {counter}
        <Users users={newArray}/>
    </>
}
