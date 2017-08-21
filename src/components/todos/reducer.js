import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, DETAIL_TODO, READ_TODO } from './actionType.js';
import { SET_VISIBILITY_FILTER } from '../filters/actionTypes.js';
import { VisibilityFilters } from '../filters/constants.js';
//import { TodoModel } from '../../api/leanCloud.js';

import { message } from 'antd';

//let nextTodoId = 0;
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
        case READ_TODO: {
            let initTodo = action.array;
            return [...initTodo, ...state];
        }
        case ADD_TODO: {
            let newTodo = {
                text: action.text,
                details: '',
                date: '',
                completed: false,
                deleted: false
            }
            // TodoModel.create(newTodo, (id) => {
            //     newTodo.id = id;
            // }, (success) => {
            //     message.success('云端同步更新成功!')
            // })
            return ([newTodo, ...state])
        }
        case TOGGLE_TODO: {
            return state.map((todo) => {
                if (todo.id === action.id) {
                    let newTodo = {
                        ...todo,
                        completed: !todo.completed
                    }
                    // TodoModel.update(newTodo, () => {
                    //     //todo.completed = true;
                    //     //console.log('todo', todo);
                    // })
                    return newTodo
                } else {
                    return todo
                }
            })
        }
        case DELETE_TODO: {
            return state.map((todo) => {
                if (todo.id === action.id) {
                    // TodoModel.destroy(todo.id, () => {
                    // })
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
                    let newTodo = {
                        ...todo,
                        details: action.text
                    }
                    console.log('action.text', action.text);
                    // TodoModel.update(newTodo, () => {
                    //     //todo.completed = true;
                    //     //console.log('todo', todo);
                    // })
                    return newTodo
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