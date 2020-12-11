import usersReducer from './users-reducer'
import appReducer from './app-reducer'
import thunkMiddleware from 'redux-thunk'
import { save, load} from "redux-localstorage-simple"
import { createStore, combineReducers, applyMiddleware, compose } from "redux"

let reducers = combineReducers({
    users : usersReducer,
    app : appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(  reducers,
                            load({states : ['users.users']}),
                            composeEnhancers(applyMiddleware(thunkMiddleware,
                            save({states : ['users.users']}))
                                )
                            )

window.store = store
export default store