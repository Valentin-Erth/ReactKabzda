import React, {useCallback, useMemo, useState} from "react";

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
    const newArray = useMemo(() => {
        return users.filter((u => u.indexOf("a") > -1))
    }, [])
    const addUser = () => {
        let newUser = "Mikel" + new Date().getTime()
        setUsers([...users, newUser])
    }
    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}
export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(["React", "JS", "Redux", "Mobx"]);

    const memoizeAddBook = useMemo(() => {
        return ()=> {
            console.log("books")
            let newBook = "Angular" + new Date().getTime()
            setBooks([...books, newBook])
        }
    }, [books])
    const memoizeAddBook2 =useCallback(()=>{
        console.log(books)
        let newBook = "Angular" + new Date().getTime()
        setBooks([...books, newBook])
    },[books])
    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        {counter}
        <Book addBook={memoizeAddBook2}/>
    </>
}
const BooksSecret = (props: { addBook: () => void }) => {
    // debugger
    console.log("Books secret")
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
        {/*{props.books.map((b, i) => <div key={i}>{b}</div>)}*/}
    </div>
}
const Book = React.memo(BooksSecret)