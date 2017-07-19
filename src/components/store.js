import { createStore, applyMiddleware, combineReducers } from 'redux';
import { TodoReducer } from './todos/reducer.js';
import { FilterReducer } from './filters/reducer.js';
import { loggerConst } from './middleware/index.js';

//这里的 reducer 输出的是整个系统的 state
let reducer = combineReducers({
    todos: TodoReducer,
    filters: FilterReducer
})

//applyMiddleware(middlewares)(createStore)(reducer)
let store = applyMiddleware(loggerConst)(createStore)(reducer)
export default store;