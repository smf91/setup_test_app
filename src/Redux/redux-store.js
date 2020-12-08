import usersReducer from './users-reducer'
import thunkMiddleware from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware, compose } from "redux"


let reducers = combineReducers({
    users : usersReducer,
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))
// const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store
export default store