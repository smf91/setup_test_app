import usersReducer from './users-reducer'
import thunkMiddleware from 'redux-thunk'
import { save, load } from "redux-localstorage-simple"
import { createStore, combineReducers, applyMiddleware, compose } from "redux"


let reducers = combineReducers({
    users : usersReducer,
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, load(), composeEnhancers(applyMiddleware(thunkMiddleware, save())))
// const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store
export default store