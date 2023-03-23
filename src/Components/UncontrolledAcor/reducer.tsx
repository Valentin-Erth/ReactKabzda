type ActionType = {
    type: string
}
export type StateType={
    collapsed:boolean
}
export const reducer = (state: StateType, action: ActionType):StateType => {
    // console.log("REDUCER START:")
    // console.log(state)
    // console.log(action)
    // console.log("REDUCER END")
    switch (action.type) {
        case "TOGGLE-COLLAPSED": {
            return {...state,collapsed:!state.collapsed}
        }
        default:
            throw new Error("Bad action type")
    }
}