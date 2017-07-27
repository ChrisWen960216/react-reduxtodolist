import { createStore, applyMiddleware, combineReducers } from 'redux';
import { compose } from 'redux';
import { TodoReducer, FilterReducer } from './todos/reducer.js';


import { loggerConst } from './middleware/index.js';

//这里的 reducer 输出的是整个系统的 state
let reducer = combineReducers({
    todos: TodoReducer,
    filters: FilterReducer
})

//applyMiddleware(middlewares)(createStore)(reducer)
let store = createStore(reducer, compose(applyMiddleware(loggerConst), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
// let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//let store = applyMiddleware(loggerConst)(createStore)(reducer);

export default store;