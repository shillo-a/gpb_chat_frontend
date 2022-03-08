import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { messagesReducer } from "./messages/messages.reducer";
import { userReducer } from "./user/user.reducer";

const rootReducer = combineReducers({
    messages: messagesReducer,
    user: userReducer
})

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //НЕОБХОДИМО ОТКЛЮЧАТЬ ПРИ ПРОДАКШЕНЕ!!! НЕ РАБОТАЕТ В EDGE
))

export default store;