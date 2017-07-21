import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './actionType.js';
import { SET_VISIBILITY_FILTER } from '../filters/actionTypes.js';
import { VisibilityFilters } from '../filters/constants.js'

//let nextTodoId = 0;
const {SHOW_ALL} = VisibilityFilters;

export const TodoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: {
            return [
                {
                    id: Math.random(),
                    text: action.text,
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
        default:
            return state
    }
}

export const FilterReducer = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state
    }
}