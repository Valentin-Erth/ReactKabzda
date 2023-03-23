import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Raiting, RaitingValueType} from './Components/Raiting/Raiting';
import Accordion from './Components/Acor/Acordion';
import {OnOff} from "./Components/OnOff/OnOff";
import {UncontrolledAccordion} from "./Components/UncontrolledAcor/UncontrolledAcordion";
import {UncntrolledRaiting} from "./Components/UncontrolledRaiting/UncntrolledRaiting";
import {UncontrolledOnOff} from "./Components/UncontrolledOnOff/UncontrolledOnOff";
import {Select} from "./Components/Select/Select";

const SelectOpt=React.memo(Select)
const UncntrolledRaitingOpt=React.memo(UncntrolledRaiting)
const UncontrolledAccordionOpt=React.memo(UncontrolledAccordion)
const UncontrolledOnOffOpt=React.memo(UncontrolledOnOff)
function App() {
    let [raitingValue, setRaitingValue] = useState<RaitingValueType>(0);
    let [acordionCollapsed, setAcordionCollapsed] = useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState<boolean>(false);
    console.log("App rendering")
    return (
        <div className={"App"}>
            {/*<Accordion titleValue={"Menu"}*/}
            {/*           setCollapsed={setAcordionCollapsed}*/}
            {/*           collapsed={!acordionCollapsed}*/}
            {/*           items={[]}*/}
            {/*           onClick={() => {*/}
            {/*           }}/>*/}


            {/*<Raiting value={raitingValue} onClick={setRaitingValue}/>*/}
            <UncntrolledRaitingOpt Defaultvalue={0} onChange={()=>{}}/>
            {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}
            <UncontrolledOnOffOpt onChange={()=>{}}/>

            <UncontrolledAccordionOpt titleValue={"Menu"}/>
            {/*<UncontrolledAccordion titleValue={"Users"}/>*/}


            {/*<UncontrolledOnOff on={true}/>*/}
            {/*<UncontrolledOnOff on={false}/>*/}


            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            {/*<Raiting value={0}/>*/}
            {/*<Raiting value={1}/>*/}
            {/*<Raiting value={2}/>*/}
            {/*<Raiting value={3}/>*/}
            {/*<Raiting value={4}/>*/}
            {/*<Raiting value={5}/>*/}

            <SelectOpt value={"Dmitriy"} items={[
                {title: "Dmitriy", value: 1},
                {title: "Valera", value: 2},
                {title: "Artem", value: 3},
                {title: "Andrew", value: 4}
            ]} onChange={() => {
            }}/>
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
