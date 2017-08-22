import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, DETAIL_TODO, READ_TODO } from './actionType.js';



export const addTodo = (title, id) => ({
    type: ADD_TODO,
    title,
    id
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
})

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id
})

export const detailTodo = (id, text) => ({
    type: DETAIL_TODO,
    id,
    text
})

export const readTodo = (array) => ({
    type: READ_TODO,
    array
})

