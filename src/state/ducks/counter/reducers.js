import * as types from './types'

let initialState = 0
let reducer = (state = initialState, action) => {
    switch(action.type) {
        case types.INCREMENT:
            return state + action.number;
        case types.DECREMENT:
            return state - action.number;
    }

    return state
}

export default reducer