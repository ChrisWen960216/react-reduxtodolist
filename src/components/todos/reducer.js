import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './actionType.js';

let nextTodoId = 0;

export const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: {
            return [
                {
                    id: nextTodoId++,
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