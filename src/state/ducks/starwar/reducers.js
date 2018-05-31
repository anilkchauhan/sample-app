import * as types from './types'

let initialState = {
    loading: true,
    error: false,
    data: []
}
let reducer = (state = initialState, action) => {
    let { type, ...rest} = action
    switch(type) {
        case types.REQUESTING:
        case types.ERROR:
        case types.DATA:
            return {...state, ...rest};
        default:
            return state
    }
}

export default reducer