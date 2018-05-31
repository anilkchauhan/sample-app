import * as types from './types'

export const requesting = () => ({
    type: types.REQUESTING,
    error: false,
    loading: true,
    data: []
})

export const error = () => ({
    type: types.ERROR,
    error: true,
    loading: false,
    data: []
})

export const data = (payload) => ({
    type: types.DATA,
    error: false,
    loading: false,
    data: payload
})