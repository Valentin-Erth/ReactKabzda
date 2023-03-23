import {reducer, StateType} from "./reducer";

test("reducer ahould change value to opposite value",()=>{
//data
    const state: StateType={
        collapsed:true
    }

    //action
const newState=reducer(state,{type:"TOGGLE-COLLAPSED"})


    //expection
    expect(newState.collapsed).toBe(false);
})
test("reducer should throw Error,because action type is incorrect",()=>{
//data
    const state: StateType={
        collapsed:true
    }

    //action
   expect(()=>{
        reducer(state,{type:"FAKETYPE"})
    }).toThrowError();




})