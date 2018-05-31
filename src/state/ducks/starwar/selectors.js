const getState = (state) =>  {
    return state.starwar
}

export const getData = (state) => {
    return getState(state).data
}

export const getLoading = (state) => {
    return getState(state).loading
}

export const getError = (state) => {
    return getState(state).error
}