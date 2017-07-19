import { FilterTypes } from './constant.js';

export const FilterReducer = (todo = [], action) => {
    switch (action.types) {
        case FilterTypes.ALL:
            return todo;
        case FilterTypes.COMPLETED:
            return todo.filter((item) => item.completed);
        case FilterTypes.UNCOMPLETED:
            return todo.filter((item) => !item.completed);
        default:
            return todo
    }
}