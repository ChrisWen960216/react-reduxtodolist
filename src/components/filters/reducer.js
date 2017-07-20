import { SHOW_ALL, SHOW_COMPLETED, SHOW_UNCOMPLETED } from './actionTypes.js';

export const FilterReducers = (state = [SHOW_ALL], filter) => {
    switch (filter.type) {
        case SHOW_ALL:
            return state;
        case SHOW_COMPLETED:
            return this.setState(SHOW_COMPLETED);
        case SHOW_UNCOMPLETED:
            return this.setState(SHOW_UNCOMPLETED);
        default:
            return state;
    }
}