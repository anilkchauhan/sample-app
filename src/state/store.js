import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import * as reducers from './ducks'

export default () => {
    let rootReducers = combineReducers(reducers)
    return createStore(rootReducers, composeWithDevTools())
}