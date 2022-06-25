import {createStore, combineReducers, applyMiddleware} from 'redux'
import users_Reducer from "./users_reducer"
import login_Reducer from "./login_reducer"
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    usersPage : users_Reducer,
    loginPage : login_Reducer
})

let store = createStore(reducers,applyMiddleware(thunkMiddleware))

export default store