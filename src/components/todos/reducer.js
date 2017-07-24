import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, DETAIL_TODO } from './actionType.js';
import { SET_VISIBILITY_FILTER } from '../filters/actionTypes.js';
import { VisibilityFilters } from '../filters/constants.js'

let nextTodoId = 0;
const {SHOW_ALL} = VisibilityFilters;

/* state.todos={
 *   id:number,
 *   text:string,
 *   completed: boolean,
 *   deleted: boolean,
 *   details: string
 * }
 */

/**
 * 这里封装的是逻辑函数
 * @param {state.todos} state 
 * @param {actionType} action 
 */
export const TodoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: {
            return [
                {
                    id: nextTodoId++,
                    text: action.text,
                    details: '',
                    date: '',
                    completed: false,
                    deleted: false
                },
                ...state
            ]
        }
        case TOGGLE_TODO: {
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                } else {
                    return todo
                }
            })
        }
        case DELETE_TODO: {
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        deleted: true
                    }
                } else {
                    return todo
                }
            })
        }
        case DETAIL_TODO: {
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        details: action.text

                    }
                } else {
                    return todo;
                }

            })
        }
        default:
            return state
    }
}

/**
 * 
 * @param {state.filter} state 
 * @param {actionType} action 
 */
export const FilterReducer = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state
    }
}