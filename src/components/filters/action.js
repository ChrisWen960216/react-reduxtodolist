import { SET_VISIBILITY_FILTER } from './actionTypes.js';

export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}