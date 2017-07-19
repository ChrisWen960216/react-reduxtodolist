import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducer.js';
import { loggerConst } from '../middleware/index.js';

//applyMiddleware(middlewares)(createStore)(reducer)
let store = applyMiddleware(loggerConst)(createStore)(reducer)
export default store;