import * as types from './types'

export const incrementCounter = (number = 1) => ({
    type: types.INCREMENT,
    number
})

export const decrementCounter = (number = 1) => ({
    type: types.DECREMENT,
    number
})