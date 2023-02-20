import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Raiting} from './Components/Raiting/Raiting';
import Accordion from './Components/Acor/Acordion';
import {OnOff} from "./Components/OnOff/OnOff";
import {UncontrolledAccordion} from "./Components/UncontrolledAcor/UncontrolledAcordion";
import {UncntrolledRaiting} from "./Components/UncontrolledRaiting/UncntrolledRaiting";



function App() {

    console.log("App rendering")
    return (
        <div className={"App"}>
            <OnOff/>
            {/*<Accordion titleValue={"Menu"} collapsed={false}/>*/}
            <UncontrolledAccordion titleValue={"Menu"}/>
            {/*<UncontrolledAccordion titleValue={"Users"}/>*/}
            <UncntrolledRaiting/>
            {/*<Raiting value={3}/>*/}
            {/*<OnOff on={true}/>*/}
            {/*<OnOff on={false}/>*/}
            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            {/*<Raiting value={0}/>*/}
            {/*<Raiting value={1}/>*/}
            {/*<Raiting value={2}/>*/}
            {/*<Raiting value={3}/>*/}
            {/*<Raiting value={4}/>*/}
            {/*<Raiting value={5}/>*/}

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("AppTitle rendering");
    return <h1>{props.title}</h1>;
}


export default App;
