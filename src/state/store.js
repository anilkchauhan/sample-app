import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import * as reducers from './ducks'

let logger = createLogger({
    duration: true
})

/*let myLogger = store => next => action => {
    console.group(action.type)
    console.info('Action:', action)
    console.log('Prev State:', store.getState())
    next(action)
    console.log('Next State:', store.getState())
    console.groupEnd()
}

let myLogger2 = store => next => action => {
    console.group(action.type)
    console.info('Action:', action)
    console.groupEnd()
}*/

export default () => {
    let rootReducers = combineReducers(reducers)
    return createStore(rootReducers, composeWithDevTools(
        applyMiddleware(logger, thunk)
    ))
}